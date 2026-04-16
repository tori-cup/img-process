<template>
  <div class="json-tool">
    <div class="tool-header">
      <h2>JSON 格式化工具</h2>
      <p>支持格式化、压缩、校验、高亮、复制、下载，纯前端实现</p>
    </div>

    <div class="tool-body">
      <!-- 输入区 -->
      <div class="input-area">
        <div class="toolbar">
          <span>输入 JSON</span>
          <div class="btns">
            <el-button type="primary" size="small" @click="formatJson">格式化</el-button>
            <el-button size="small" @click="compressJson">压缩</el-button>
            <el-button size="small" @click="clearInput">清空</el-button>
          </div>
        </div>
        <el-input
          v-model="jsonInput"
          type="textarea"
          :rows="12"
          placeholder="请粘贴 JSON 字符串..."
          class="json-input"
        />
      </div>

      <!-- 输出区 -->
      <div class="output-area">
        <div class="toolbar">
          <span>格式化结果</span>
          <div class="btns">
            <el-button size="small" @click="copyResult">复制</el-button>
            <el-button size="small" @click="downloadJson">下载</el-button>
          </div>
        </div>
        <div
          class="json-output"
          v-html="formattedHtml"
          :class="{ error: isError }"
        ></div>
      </div>
    </div>

    <!-- 错误提示 -->
    <div v-if="errorMsg" class="error-tip">
      <el-icon color="#f56c6c"><Warning /></el-icon>
      {{ errorMsg }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { Warning } from '@element-plus/icons-vue'

const jsonInput = ref('')
const isError = ref(false)
const errorMsg = ref('')

// 格式化
const formatJson = () => {
  try {
    const obj = JSON.parse(jsonInput.value.trim())
    isError.value = false
    errorMsg.value = ''
    jsonInput.value = JSON.stringify(obj, null, 2)
  } catch (e) {
    isError.value = true
    errorMsg.value = 'JSON 格式错误：' + e.message
  }
}

// 压缩
const compressJson = () => {
  try {
    const obj = JSON.parse(jsonInput.value.trim())
    isError.value = false
    errorMsg.value = ''
    jsonInput.value = JSON.stringify(obj)
  } catch (e) {
    isError.value = true
    errorMsg.value = 'JSON 格式错误：' + e.message
  }
}

// 清空
const clearInput = () => {
  jsonInput.value = ''
  isError.value = false
  errorMsg.value = ''
}

// 复制结果
const copyResult = () => {
  if (!jsonInput.value) return
  navigator.clipboard.writeText(jsonInput.value).then(() => {
    ElMessage.success('复制成功')
  })
}

// 下载
const downloadJson = () => {
  if (!jsonInput.value) return
  const blob = new Blob([jsonInput.value], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'data.json'
  a.click()
  URL.revokeObjectURL(url)
  ElMessage.success('下载成功')
}

// 高亮 HTML（简易版）
const formattedHtml = computed(() => {
  let str = jsonInput.value
  if (!str) return '暂无内容'
  str = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  str = str
    .replace(
      /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*")/g,
      '<span class="json-string">$1</span>'
    )
    .replace(/(\b(true|false|null)\b)/g, '<span class="json-boolean">$1</span>')
    .replace(/(\d+)/g, '<span class="json-number">$1</span>')
  return str
})
</script>

<style scoped>
.json-tool {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.tool-header {
  text-align: center;
  margin-bottom: 30px;
}

.tool-header h2 {
  font-size: 24px;
  margin-bottom: 8px;
}

.tool-header p {
  color: #666;
  font-size: 14px;
}

.tool-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.input-area,
.output-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.btns {
  display: flex;
  gap: 8px;
}

.json-input {
  height: 240px;
  border-radius: 6px;
  font-family: monospace;
}

.json-output {
  height: 300px;        /* ⭐关键：固定高度 */
  overflow: auto;       /* ⭐关键：滚动条 */
  padding: 15px;
  background: #f7f8fa;
  border-radius: 6px;
  white-space: pre-wrap;
  font-family: monospace;
  line-height: 1.6;
}
.json-output.error {
  background: #fff2f2;
}

.error-tip {
  margin-top: 15px;
  color: #f56c6c;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

/* 高亮颜色 */
.json-string {
  color: #008000;
}
.json-boolean {
  color: #0000ff;
}
.json-number {
  color: #ff00ff;
}

/* 深色模式 */
:deep(.dark) .json-output {
  background: #181818;
  color: #eee;
}
:deep(.dark) .json-string {
  color: #7ccc69;
}
:deep(.dark) .json-boolean {
  color: #6796e6;
}
:deep(.dark) .json-number {
  color: #d966c9;
}

/* 移动端 */
@media (max-width: 768px) {
  .tool-body {
    grid-template-columns: 1fr;
  }
}
</style>