<template>
  <section class="hero">
    <div class="hero-background">
      <img 
        v-for="(image, index) in heroImages" 
        :key="index"
        :src="image.src" 
        :alt="image.alt" 
        class="hero-image"
        :class="{ 'active': currentImageIndex === index }"
        @load="onImageLoad"
      />
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container">
      <div class="hero-content scroll-reveal">
        <h1 class="hero-title animate-fadeInUp">
          PEP利得膜
        </h1>
        <p class="hero-subtitle animate-fadeInUp delay-100">
          專業農膜製造商 · 近50年經驗 · 外銷全球45國
        </p>
        <div class="hero-badges animate-fadeInUp delay-200">
          <div class="badge">
            <span class="badge-number">50+</span>
            <span class="badge-label">年經驗</span>
          </div>
          <div class="badge">
            <span class="badge-number">45</span>
            <span class="badge-label">國家</span>
          </div>
          <div class="badge">
            <span class="badge-number">1970</span>
            <span class="badge-label">創立於</span>
          </div>
        </div>
        <div class="hero-actions animate-fadeInUp delay-300">
          <router-link to="/products" class="btn btn-primary">
            查看產品
          </router-link>
          <router-link to="/contact" class="btn btn-secondary">
            聯絡我們
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroImages = [
  {
    // 工廠空拍圖 - 現代化工廠建築群
    // 來源: Unsplash - Factory aerial view
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'PEP工廠空拍圖'
  },
  {
    // 工業生產線 - 現代化製造設備與生產線
    // 來源: Unsplash - Manufacturing production line
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'PEP工廠生產線'
  }
]

const currentImageIndex = ref(0)
let intervalId = null

const onImageLoad = () => {
  // 圖片載入完成後的處理
}

// 自動輪播功能（每 5 秒切換）
onMounted(() => {
  if (heroImages.length > 1) {
    intervalId = setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length
    }, 5000)
  }
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-image.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(74, 124, 89, 0.8), rgba(59, 111, 168, 0.7));
}

.hero-content {
  text-align: center;
  color: var(--color-white);
  padding: var(--spacing-3xl) 0;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
  color: var(--color-white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-2xl);
  color: var(--color-white);
  opacity: 0.95;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.badge-number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
}

.badge-label {
  font-size: var(--font-size-sm);
  color: var(--color-white);
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn {
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  transition: all var(--transition-base);
  display: inline-block;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}

.btn-secondary:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero {
    min-height: 500px;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .hero-badges {
    gap: var(--spacing-lg);
  }

  .badge-number {
    font-size: var(--font-size-2xl);
  }

  .btn {
    padding: var(--spacing-sm) var(--spacing-xl);
    font-size: var(--font-size-base);
  }
}
</style>

