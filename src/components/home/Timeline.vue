<template>
  <section class="timeline-section section">
    <div class="container">
      <h2 class="section-title text-center scroll-reveal">
        PEP利得膜進化歷程
      </h2>
      <p class="section-subtitle text-center scroll-reveal">
        30年進化農膜 · 膜膜守護
      </p>

      <div class="timeline">
        <div 
          v-for="(item, index) in TIMELINE" 
          :key="index"
          class="timeline-item scroll-reveal"
          :class="{ 'timeline-item-left': index % 2 === 0, 'timeline-item-right': index % 2 !== 0 }"
        >
          <div class="timeline-content">
            <div class="timeline-year">{{ item.year }}</div>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-description">{{ item.description }}</p>
          </div>
          <div class="timeline-marker"></div>

          <div 
            v-if="item.image" 
            class="timeline-image scroll-reveal"
            :class="[
              index % 2 === 0 ? 'timeline-image-right' : 'timeline-image-left',
              item.imageContain ? 'timeline-image-contain' : ''
            ]"
          >
            <img :src="`${baseUrl}${item.image}`" :alt="item.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TIMELINE } from '../../utils/constants'

const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
.timeline-section {
  background: linear-gradient(135deg, rgba(74, 124, 89, 0.8), rgba(59, 111, 168, 0.7));
}

.timeline-section .section-title {
  color: var(--color-white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.section-subtitle {
  color: var(--color-white);
  opacity: 0.95;
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-3xl);
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--spacing-2xl) 0;
}

/* 中央線 */
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-3xl);
   padding-bottom: 180px;
  display: flex;
  align-items: center;
}

.timeline-item-left {
  justify-content: flex-end;
  padding-right: calc(50% + 40px);
}

.timeline-item-right {
  justify-content: flex-start;
  padding-left: calc(50% + 40px);
}

@media (max-width: 768px) {
  .timeline-item-left,
  .timeline-item-right {
    justify-content: flex-start;
    padding-left: 70px;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .timeline {
    max-width: 100%;
    padding: var(--spacing-xl) 0;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0;
  }

  .timeline-content {
    max-width: 100%;
  }
}

.timeline-content {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: 24px;
  box-shadow: var(--shadow-md);
  max-width: 400px;
  transition: all var(--transition-base);
}

.timeline-content:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.timeline-year {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.timeline-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.timeline-description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  margin: 0;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: var(--color-primary);
  border: 4px solid var(--color-white);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: var(--shadow-md);
  z-index: 1;
}

@media (max-width: 768px) {
  .timeline-marker {
    left: 30px;
  }
}

.timeline-image {
  position: absolute;
  top: 0;
  transform: none;
  width: min(360px, 32vw);
  max-width: 360px;
  height: 260px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.timeline-image-right {
  right: 8%;
}

.timeline-image-left {
  left: 8%;
}

.timeline-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timeline-image-contain {
  height: auto;
  overflow: hidden;
}

.timeline-image-contain img {
  object-fit: contain;
}

.timeline-image.scroll-reveal {
  opacity: 0;
  transform: translateX(30px);
}

.timeline-image-left.scroll-reveal {
  transform: translateX(-30px);
}

.timeline-image.revealed {
  opacity: 1;
  transform: translateX(0);
  transition: all var(--transition-base);
}

@media (max-width: 768px) {
  .timeline-image {
    position: static;
    transform: none;
    margin-top: var(--spacing-lg);
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 220px;
  }

  .timeline-image img {
    height: auto;
  }

  .timeline-image:not(.timeline-image-contain) img {
    max-height: 220px;
  }

  .timeline-image-contain {
    max-height: none;
  }

  .timeline-image-contain img {
    max-height: none;
  }

  .timeline-image.scroll-reveal {
    transform: translateX(-30px);
  }

  .timeline-image.revealed {
    transform: translateX(0);
  }
}

/* 動畫效果 */
.timeline-item.scroll-reveal {
  opacity: 0;
  transform: translateX(-30px);
}

.timeline-item-right.scroll-reveal {
  transform: translateX(30px);
}

@media (max-width: 768px) {
  .timeline-item.scroll-reveal,
  .timeline-item-right.scroll-reveal {
    transform: translateX(-30px);
  }
}

.timeline-item.revealed {
  opacity: 1;
  transform: translateX(0);
}
</style>

