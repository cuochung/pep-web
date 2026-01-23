<template>
  <div class="carousel">
    <div class="carousel-container">
      <div 
        class="carousel-track" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="carousel-slide"
        >
          <img :src="image" :alt="`產品圖片 ${index + 1}`" @click="openLightbox(index)" />
        </div>
      </div>
    </div>

    <!-- 導航按鈕 -->
    <button 
      v-if="images.length > 1"
      class="carousel-btn carousel-btn-prev" 
      @click="prev"
      aria-label="上一張"
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
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    
    <button 
      v-if="images.length > 1"
      class="carousel-btn carousel-btn-next" 
      @click="next"
      aria-label="下一張"
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
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>

    <!-- 指示器 -->
    <div v-if="images.length > 1" class="carousel-indicators">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="indicator"
        :class="{ 'active': index === currentIndex }"
        @click="goTo(index)"
        :aria-label="`跳到第 ${index + 1} 張`"
      ></button>
    </div>

    <!-- 燈箱 - 使用 Teleport 渲染到 body 確保全螢幕顯示 -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox" aria-label="關閉">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img 
            :src="images[lightboxIndex]" 
            :alt="`產品圖片 ${lightboxIndex + 1}`"
            class="lightbox-image"
            @click.stop
          />
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const goTo = (index) => {
  currentIndex.value = index
}

const openLightbox = (index) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background-color: var(--color-gray-100);
}

.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform var(--transition-slow);
}

.carousel-slide {
  min-width: 100%;
  height: 400px;
  cursor: pointer;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
  z-index: 10;
}

.carousel-btn:hover {
  background-color: var(--color-white);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn-prev {
  left: var(--spacing-md);
}

.carousel-btn-next {
  right: var(--spacing-md);
}

.carousel-indicators {
  position: absolute;
  bottom: var(--spacing-md);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-sm);
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
}

.indicator.active {
  background-color: var(--color-white);
  width: 30px;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .carousel-slide {
    height: 300px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
}
</style>

<style>
/* 燈箱樣式 - 非 scoped，因為使用 Teleport 渲染到 body */
.lightbox {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.95) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 9999 !important;
  padding: var(--spacing-xl) !important;
  margin: 0 !important;
}

.lightbox-close {
  position: absolute !important;
  top: var(--spacing-xl) !important;
  right: var(--spacing-xl) !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: none !important;
  color: var(--color-white) !important;
  width: 50px !important;
  height: 50px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  transition: all var(--transition-base) !important;
  z-index: 10000 !important;
}

.lightbox-close:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  transform: rotate(90deg) !important;
}

.lightbox-image {
  max-width: 95% !important;
  max-height: 95% !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  border-radius: var(--radius-lg) !important;
}
</style>

