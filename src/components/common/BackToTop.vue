<template>
  <transition name="fade">
    <button 
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="回到頂部"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
import { useScrollPosition, useScrollTo } from '../../composables/useScrollAnimation'

const { scrollY } = useScrollPosition()
const { scrollToTop } = useScrollTo()

const isVisible = computed(() => scrollY.value > 300)
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  width: 50px;
  height: 50px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  z-index: var(--z-fixed);
}

.back-to-top:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.back-to-top:active {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 45px;
    height: 45px;
  }
}
</style>

