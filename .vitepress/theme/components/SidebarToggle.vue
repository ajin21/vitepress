<!-- .vitepress/theme/components/SidebarToggle.vue -->
<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const isCollapsed = ref(false)
const isMobile = ref(false)

// 初始化状态
onMounted(() => {
  // 读取本地存储
  isCollapsed.value = localStorage.getItem('sidebar-collapsed') === 'true'
  
  // 检测移动端
  checkMobile()
  window.addEventListener('resize', checkMobile)

  // 初始应用状态
  toggleSidebarClass(isCollapsed.value)
})

// 清理事件监听
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
  localStorage.setItem('sidebar-collapsed', isCollapsed.value)
  toggleSidebarClass(isCollapsed.value)
  
  // 移动端点击后自动关闭
  if (isMobile.value && !isCollapsed.value) {
    setTimeout(() => {
      document.addEventListener('click', autoCloseSidebar, { once: true })
    }, 50)
  }
}

const toggleSidebarClass = (collapsed) => {
  const sidebar = document.querySelector('.VPSidebar')
  if (sidebar) {
    sidebar.classList.toggle('collapsed', collapsed)
  }
}

const autoCloseSidebar = (e) => {
  if (!e.target.closest('.VPSidebar') && 
      !e.target.closest('.sidebar-toggle')) {
    toggleSidebar()
  }
}

// 键盘快捷键支持
const handleKeydown = (e) => {
  if (e.key === 'Escape' && !isCollapsed.value) {
    toggleSidebar()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <button
    class="sidebar-toggle"
    :class="{ 'is-mobile': isMobile }"
    @click="toggleSidebar"
    aria-label="Toggle sidebar"
  >
    <transition name="icon" mode="out-in">
      <svg v-if="isCollapsed" key="open" viewBox="0 0 24 24" width="24" height="24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
      <svg v-else key="close" viewBox="0 0 24 24" width="24" height="24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </transition>
  </button>
</template>

<style scoped>
.sidebar-toggle {
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: var(--vp-shadow-2);
  
  /* 默认桌面端位置 */
  top: 1rem;
  left: 1rem;
}

.sidebar-toggle:hover {
  background: var(--vp-c-bg);
  transform: scale(1.05);
}

.sidebar-toggle:active {
  transform: scale(0.95);
}

/* 移动端样式 */
.sidebar-toggle.is-mobile {
  top: auto;
  bottom: 1.5rem;
  right: 1rem;
  left: auto;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: var(--vp-shadow-3);
}

/* SVG 图标样式 */
svg {
  fill: var(--vp-c-text-1);
  transition: fill 0.3s ease;
}

/* 过渡动画 */
.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0;
  transform: rotate(-90deg);
}

.icon-enter-to,
.icon-leave-from {
  opacity: 1;
  transform: rotate(0deg);
}
</style>