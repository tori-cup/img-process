<template>
  <div class="projects-container">
    <!-- 页面标题 -->
    <div class="page-title">
      <h2>我的项目</h2>
      <p>专注前端开发，打造高质量、可复用的解决方案</p>
    </div>

    <!-- 项目卡片容器（响应式网格） -->
    <div class="projects-grid">
      <!-- 项目卡片1：当前作品集项目 -->
      <el-card class="project-card" shadow="hover">
        <div class="card-header">
          <el-tag type="primary" size="small">Vue3</el-tag>
          <el-tag size="small">响应式</el-tag>
        </div>
        <div class="card-body">
          <h3 class="card-title">响应式个人作品集 + 工具站</h3>
          <p class="card-desc">
            一套代码适配PC、移动端，集成图片裁剪、JSON格式化等实用工具，采用Vue3+Pinia+Router技术栈，支持深色/浅色模式切换，遵循工程化规范。
          </p>
          <div class="card-footer">
            <el-button type="text" @click="goToLink('https://github.com')">查看源码</el-button>
            <el-button type="text" @click="goToLink('https://your-domain.com')">在线预览</el-button>
          </div>
        </div>
      </el-card>

      <!-- 项目卡片2：图片工具箱 -->
      <el-card class="project-card" shadow="hover">
        <div class="card-header">
          <el-tag type="success" size="small">Canvas</el-tag>
          <el-tag size="small">Cropper.js</el-tag>
        </div>
        <div class="card-body">
          <h3 class="card-title">前端图片处理工具箱</h3>
          <p class="card-desc">
            集成图片裁剪、压缩、格式转换、水印等功能，基于Canvas和Cropper.js开发，纯前端实现，支持本地图片处理与下载。
          </p>
          <div class="card-footer">
            <el-button type="text" @click="goToLink('https://github.com')">查看源码</el-button>
            <el-button type="text" @click="goToLink('/tools/cropper')">在线使用</el-button>
          </div>
        </div>
      </el-card>

      <!-- 项目卡片3：待办清单升级版 -->
      <el-card class="project-card" shadow="hover">
        <div class="card-header">
          <el-tag type="warning" size="small">Pinia</el-tag>
          <el-tag size="small">本地存储</el-tag>
        </div>
        <div class="card-body">
          <h3 class="card-title">高级待办清单系统</h3>
          <p class="card-desc">
            支持任务增删改查、分类、优先级排序、深色模式，采用Pinia管理状态，localStorage持久化数据，响应式适配全设备。
          </p>
          <div class="card-footer">
            <el-button type="text" @click="goToLink('https://github.com')">查看源码</el-button>
            <el-button type="text" @click="goToLink('https://your-domain.com')">在线预览</el-button>
          </div>
        </div>
      </el-card>

      <!-- 项目卡片4：响应式商城首页 -->
      <el-card class="project-card" shadow="hover">
        <div class="card-header">
          <el-tag type="danger" size="small">CSS3</el-tag>
          <el-tag size="small">响应式布局</el-tag>
        </div>
        <div class="card-body">
          <h3 class="card-title">高仿电商首页</h3>
          <p class="card-desc">
            仿主流电商平台首页，实现轮播图、吸顶导航、瀑布流商品列表、滚动加载等功能，纯前端开发，适配PC/平板/手机。
          </p>
          <div class="card-footer">
            <el-button type="text" @click="goToLink('https://github.com')">查看源码</el-button>
            <el-button type="text" @click="goToLink('https://your-domain.com')">在线预览</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 跳转链接（可替换成你的真实地址）
const goToLink = (url) => {
  if (url.startsWith('/')) {
    // 内部路由跳转
    router.push(url)
  } else {
    // 外部链接跳转
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
.projects-container {
  width: 100%;
  padding: 20px 0;
}

.page-title {
  text-align: center;
  margin-bottom: 40px;
}

.page-title h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.page-title p {
  font-size: 16px;
  color: #666;
}

/* 响应式网格布局 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

/* 项目卡片样式 */
.project-card {
  transition: all 0.3s ease;
  border-radius: 12px !important;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.card-header {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.card-title {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
}

.card-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;
}

/* 深色模式适配 */
.dark .project-card {
  background: #222 !important;
  border-color: #333 !important;
}

.dark .card-header {
  border-bottom-color: #444;
}

.dark .card-desc {
  color: #ccc;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .page-title h2 {
    font-size: 26px;
  }

  .projects-grid {
    gap: 20px;
  }

  .card-desc {
    height: auto;
    -webkit-line-clamp: unset;
  }
}
</style>