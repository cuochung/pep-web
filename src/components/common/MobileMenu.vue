<template>
  <transition name="slide">
    <div v-if="isOpen" class="mobile-menu">
      <div class="mobile-menu-overlay" @click="$emit('close')"></div>
      <div class="mobile-menu-content">
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li 
              v-for="item in NAVIGATION" 
              :key="item.path"
              class="mobile-nav-item"
            >
              <router-link 
                :to="item.path" 
                class="mobile-nav-link"
                @click="handleLinkClick"
              >
                {{ item.name }}
              </router-link>

              <!-- 子選單 -->
              <ul v-if="item.children.length > 0" class="mobile-submenu">
                <li v-for="child in item.children" :key="child.path">
                  <router-link 
                    :to="child.path" 
                    class="mobile-submenu-link"
                    @click="handleLinkClick"
                  >
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { NAVIGATION } from '../../utils/constants'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const handleLinkClick = () => {
  emit('close')
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-modal);
}

.mobile-menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.mobile-menu-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background-color: var(--color-white);
  box-shadow: var(--shadow-xl);
  overflow-y: auto;
  padding: var(--spacing-2xl) var(--spacing-lg);
}

.mobile-nav-list {
  list-style: none;
}

.mobile-nav-item {
  margin-bottom: var(--spacing-md);
}

.mobile-nav-link {
  display: block;
  padding: var(--spacing-md);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--color-primary);
  background-color: var(--color-gray-50);
}

.mobile-submenu {
  list-style: none;
  padding-left: var(--spacing-lg);
  margin-top: var(--spacing-sm);
}

.mobile-submenu-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.mobile-submenu-link:hover,
.mobile-submenu-link.router-link-active {
  color: var(--color-primary);
  background-color: var(--color-gray-50);
}

/* 過渡動畫 */
.slide-enter-active,
.slide-leave-active {
  transition: opacity var(--transition-base);
}

.slide-enter-active .mobile-menu-content,
.slide-leave-active .mobile-menu-content {
  transition: transform var(--transition-base);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-from .mobile-menu-content {
  transform: translateX(100%);
}

.slide-leave-to .mobile-menu-content {
  transform: translateX(100%);
}
</style>

