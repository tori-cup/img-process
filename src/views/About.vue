<template>
  <div class="about-container">
    <div class="about-wrapper">
      <!-- 左侧个人信息 -->
      <div class="about-left">
        <div class="avatar-box">
          <el-avatar :size="120" src="https://picsum.photos/200/200">
            <span class="avatar-text">ME</span>
          </el-avatar>
        </div>

        <div class="info-list">
          <div class="info-item">
            <span class="label">姓名</span>
            <span class="value">前端开发者</span>
          </div>
          <div class="info-item">
            <span class="label">职业</span>
            <span class="value">Web 前端工程师</span>
          </div>
          <div class="info-item">
            <span class="label">技术栈</span>
            <span class="value">Vue3 / Vite / Pinia / JS / TS</span>
          </div>
          <div class="info-item">
            <span class="label">邮箱</span>
            <span class="value">toricup@163.com</span>
          </div>
        </div>
      </div>

      <!-- 右侧介绍 -->
      <div class="about-right">
        <div class="section-title">
          <h3>关于我</h3>
        </div>
        <div class="desc">
          <p>
            热爱前端开发，熟悉现代前端工程化体系，熟练使用 Vue3 全家桶进行响应式开发。
            注重用户体验与代码规范，擅长 PC / 移动端适配、交互效果实现、第三方工具库整合。
          </p>
          <p>
            具备独立开发完整项目的能力，能够从 0 → 1 搭建项目结构、封装通用组件、处理兼容性问题，
            追求简洁、高效、可维护的代码风格。
          </p>
        </div>

        <div class="section-title">
          <h3>技能亮点</h3>
        </div>
        <div class="skills">
          <el-tag v-for="tag in skills" :key="tag" class="skill-tag">
            {{ tag }}
          </el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  'Vue3',
  'React',
  'ReactHooks',
  'Vite',
  'Pinia',
  'Vue Router',
  'JavaScript',
  'CSS3',
  '响应式布局',
  'Canvas',
  'Element Plus',
  'Vant',
  'Ant Design',
  '工程化',
  'Git',
  'uni-app'
]
</script>

<style scoped>
.about-container {
  width: 100%;
  padding: 20px 0;
}

.about-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

/* 左侧 */
.about-left {
  width: 320px;
  flex-shrink: 0;
}

.avatar-box {
  text-align: center;
  margin-bottom: 30px;
}

.avatar-text {
  font-size: 36px;
  font-weight: bold;
}

.info-list {
  width: 100%;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.label {
  color: #666;
  font-weight: 500;
}

.value {
  color: #333;
  font-weight: 500;
}

/* 右侧 */
.about-right {
  flex: 1;
}

.section-title {
  margin-bottom: 20px;
}

.section-title h3 {
  font-size: 22px;
  position: relative;
  padding-left: 14px;
}

.section-title h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 4px;
  background-color: var(--el-color-primary);
  border-radius: 2px;
}

.desc {
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.desc p {
  margin-bottom: 14px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  font-size: 14px;
  padding: 4px 10px;
}

/* 深色模式 */
:deep(.dark) .info-item {
  border-color: #333;
}

:deep(.dark) .label {
  color: #aaa;
}

:deep(.dark) .value {
  color: #eee;
}

:deep(.dark) .desc {
  color: #ccc;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .about-wrapper {
    flex-direction: column;
    gap: 30px;
  }

  .about-left {
    width: 100%;
  }
}
</style>