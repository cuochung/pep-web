<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="/images/logo/pep-logo.gif" alt="PEP利得膜" class="logo-img" />
        </router-link>

        <!-- 桌面導航 -->
        <Navigation class="hidden-mobile" />

        <!-- 行動裝置選單按鈕 -->
        <button 
          class="mobile-menu-btn hidden-desktop" 
          @click="toggleMobileMenu"
          aria-label="選單"
        >
          <span class="hamburger" :class="{ 'active': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <!-- LINE 按鈕 -->
        <a 
          href="https://line.me/ti/p/@super-pep" 
          target="_blank" 
          rel="noopener noreferrer"
          class="line-btn"
        >
          <img src="/images/icons/line-icon.svg" alt="LINE" class="line-icon" />
          <span>加入好友</span>
        </a>
      </div>
    </div>

    <!-- 行動裝置選單 -->
    <MobileMenu :isOpen="isMobileMenuOpen" @close="closeMobileMenu" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from './Navigation.vue'
import MobileMenu from './MobileMenu.vue'
import { useScrollPosition } from '../../composables/useScrollAnimation'

const { isScrolled } = useScrollPosition()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // 防止背景滾動
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background-color: var(--color-bg-accent);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.header-scrolled {
  background-color: rgba(255, 251, 235, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) 0;
  gap: var(--spacing-lg);
}

.logo {
  display: flex;
  align-items: center;
  transition: transform var(--transition-base);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-img {
  height: 50px;
  width: auto;
}

@media (max-width: 768px) {
  .logo-img {
    height: 40px;
  }
}

.mobile-menu-btn {
  padding: var(--spacing-sm);
  cursor: pointer;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 25px;
}

.hamburger span {
  display: block;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.line-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: #06C755;
  color: white;
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);
}

.line-btn:hover {
  background-color: #05b04b;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.line-btn .line-icon {
  width: 32px;
  height: 32px;
  display: block;
  flex-shrink: 0;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

@media (max-width: 768px) {
  .line-btn {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-sm);
  }
  
  .line-btn span {
    display: none;
  }
}
</style>

