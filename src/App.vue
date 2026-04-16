<template>
  <div class="app-container">
    <el-button @click="store.toggleDark()">
      {{ store.isDark ? '浅色' : '深色' }}模式
    </el-button>
    <header class="header">
      <!-- 关键：把 default-active 改成绑定当前路由 -->
      <el-menu
        :router="true"
        mode="horizontal"
        :default-active="$route.path" 
        active-text-color="#409eff"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
        <el-menu-item index="/projects">项目</el-menu-item>
        <el-menu-item index="/tools/cropper">图片裁剪</el-menu-item>
        <el-menu-item index="/tools/json">JSON格式化</el-menu-item>

        <!-- <el-sub-menu index="tools">
          <template #title>工具箱</template>
          <el-menu-item index="/tools/cropper">图片裁剪</el-menu-item>
          <el-menu-item index="/tools/json">JSON格式化</el-menu-item>
        </el-sub-menu> -->
      </el-menu>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/store/theme'
const store = useThemeStore()
const route = useRoute()
</script>

<style scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
}

.main-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>