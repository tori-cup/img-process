<template>
  <div class="home-container">
    <div class="hero">
      <h1 class="title">Hello, I'm Frontend Developer</h1>
      <p class="desc">Vue3 + Vite + Pinia + 响应式开发</p>
      <el-button type="primary" size="large" @click="goProject">
        查看项目
      </el-button>
    </div>

    <div class="section">
      <h2>技能栈</h2>
      <div class="skill-list">
        <el-tag size="large" v-for="s in skills" :key="s">{{ s }}</el-tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const skills = ['Vue3', 'Vite', 'Pinia', 'Router', 'Element Plus', '响应式']
const router = useRouter()
const goProject = () => router.push('/projects')
</script>

<style scoped>
.home-container {
  width: 100%;
  padding: 20px 0;
}

.hero {
  text-align: center;
  padding: 80px 20px;
}

.title {
  font-size: 42px;
  margin-bottom: 20px;
}

.desc {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.section {
  margin-top: 60px;
  text-align: center;
}

.skill-list {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }
}
</style>