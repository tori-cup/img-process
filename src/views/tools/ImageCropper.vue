<template>
  <div class="container">
    <h2>Cropper.js 完整功能版</h2>

    <!-- 上传 -->
    <input type="file" accept="image/*" @change="onFileChange" />

    <!-- 主体区域 -->
    <div v-if="imageUrl" class="main">

      <!-- 左：原图 -->
      <div class="left">
        <div class="cropper-box">
          <img ref="imageRef" :src="imageUrl" class="image" />
        </div>
      </div>

      <!-- 中：按钮 -->
      <div class="center">
        <div class="btns">
          <button @click="handleCrop">裁剪</button>

          <button @click="zoom(0.1)">放大</button>
          <button @click="zoom(-0.1)">缩小</button>

          <button @click="rotate(45)">旋转45°</button>
          <button @click="rotate(-45)">旋转-45°</button>

          <button @click="scaleX">水平翻转</button>
          <button @click="scaleY">垂直翻转</button>

          <button @click="move(10, 0)">右移</button>
          <button @click="move(-10, 0)">左移</button>
          <button @click="move(0, -10)">上移</button>
          <button @click="move(0, 10)">下移</button>

          <button @click="enableCrop">启用裁剪</button>
          <button @click="disableCrop">禁用裁剪</button>

          <button @click="reset">重置</button>

          <button v-show="cropped" @click="download"  class="download-btn">下载</button>
        </div>
      </div>

      <!-- 右：结果 -->
      <div class="right">
        <h3>裁剪结果</h3>
        <img :src="cropped" class="preview" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

const imageRef = ref(null)
const imageUrl = ref('')
const cropper = ref(null)
const cropped = ref('')

let objectUrl = null
let scaleXVal = 1
let scaleYVal = 1

// 上传
const onFileChange = (e) => {
  const file = e.target.files[0]
  if (!file) return

  // ⭐ 清空旧结果（关键）
  cropped.value = ''
  scaleXVal = 1
  scaleYVal = 1
  // 释放旧 URL
  if (objectUrl) URL.revokeObjectURL(objectUrl)

  objectUrl = URL.createObjectURL(file)
  imageUrl.value = objectUrl

  nextTick(() => {
    initCropper()
  })
}

// 初始化
const initCropper = () => {
  cropper.value?.destroy()

  cropper.value = new Cropper(imageRef.value, {
    aspectRatio: 1,
    viewMode: 1,
    autoCropArea: 0.8,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
  })
}

// 更新预览
const updatePreview = () => {
  if (!cropper.value) return
  const canvas = cropper.value.getCroppedCanvas()
  if (canvas) {
    cropped.value = canvas.toDataURL('image/png')
  }
}

// 裁剪
const handleCrop = () => updatePreview()

// 缩放
const zoom = (val) => {
  cropper.value.zoom(val)
  updatePreview()
}

// 旋转
const rotate = (deg) => {
  cropper.value.rotate(deg)
  updatePreview()
}

// 翻转
const scaleX = () => {
  scaleXVal = -scaleXVal
  cropper.value.scaleX(scaleXVal)
  updatePreview()
}

const scaleY = () => {
  scaleYVal = -scaleYVal
  cropper.value.scaleY(scaleYVal)
  updatePreview()
}

// 移动
const move = (x, y) => {
  cropper.value.move(x, y)
  updatePreview()
}

// 裁剪框
const enableCrop = () => {
  cropper.value.crop()
  updatePreview()
}

const disableCrop = () => {
  cropper.value.clear()
  updatePreview()
}

// 重置
const reset = () => {
  cropper.value.reset()
  scaleXVal = 1
  scaleYVal = 1
  updatePreview()
}

// 下载
const download = () => {
  if (!cropper.value) return

  const canvas = cropper.value.getCroppedCanvas()

  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'cropped.png'
    link.click()

    URL.revokeObjectURL(url)
  }, 'image/png')
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 20px auto;
  text-align: center;
}

/* 主布局 */
.main {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* 左中右 */
.left,
.center,
.right {
  flex: 1;
}

.left,
.right {
  min-width: 0;
}

/* 原图 */
.cropper-box {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.image {
  width: 100%;
  height: auto;
  display: block;
}

/* ================= 关键修复：按钮流式布局 ================= */
.btns {
  display: flex;
  flex-wrap: wrap;   /* ⭐核心：自动换行 */
  gap: 10px;
  justify-content: center;
}

button {
  flex: 0 0 auto;
  min-width: 90px;
  padding: 8px 12px;
  white-space: nowrap;
  cursor: pointer;

  border: 1px solid #bbb;
  background: #ffffff;
  color: #333;
  border-radius: 6px;

  font-size: 13px;
  transition: all 0.2s ease;
}
button:hover {
  border-color: #409eff;
  color: #409eff;
  background: #ecf5ff;
  transform: translateY(-1px);
}

button:active {
  transform: scale(0.96);
}
.download-btn {
  background: #409eff;
  color: #fff;
  border: none;
}

.download-btn:hover {
  background: #66b1ff;
  color: #fff;
  border-color: transparent;
}

.download-btn:active {
  background: #3a8ee6;
}
/* 结果 */
.preview {
  width: 100%;
  height: auto;
}

/* ================= 响应式 ================= */
@media (max-width: 900px) {
  .main {
    flex-wrap: wrap;
  }

  .left,
  .center,
  .right {
    flex: 100%;
  }
}

@media (max-width: 600px) {
  .main {
    flex-direction: column;
  }
}
</style>