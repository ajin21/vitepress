<script setup lang="ts">
</script>

<template>
  <div class="panel">
    <div class="container">
      <div class="text left">
        本站总访问量 <span id="busuanzi_value_site_pv" class="font-bold number">--</span> 次
      </div>
      <div class="text right">
        本站访客数 <span id="busuanzi_value_site_uv" class="font-bold number">--</span> 人次
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 整体面板样式 */
.panel {
  background-color: #fff; /* 白色背景 */
  border: 1px solid #425AEF; /* 添加灰色边框，颜色可根据需要修改 */
  border-radius: 12px; /* 圆角 */
  padding: 16px; /* 内边距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  width: 100%; /* 宽度自适应 */
  max-width: 600px; /* 最大宽度 */
  margin: 20px auto; /* 水平居中 */
}

/* 容器样式 */
.container {
  display: flex;
  justify-content: space-between; /* 左右对齐 */
  align-items: center; /* 垂直居中 */
}

/* 文字样式 */
.text {
  font-size: 15px; /* 字体大小 */
  
}

/* 数字样式 */
.number {
  color: #425AEF; /* 数字颜色（蓝色） */
}

/* 加粗样式 */
.font-bold {
  font-weight: bold; /* 加粗 */
}

/* 左边和右边的样式 */
.left {
  text-align: left; /* 左边文字左对齐 */
}

.right {
  text-align: right; /* 右边文字右对齐 */
}
</style>