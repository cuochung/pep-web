<template>
  <section class="process-section section">
    <div class="container">
      <h2 class="section-title text-center scroll-reveal">
        PEP利得膜製作簡易圖
      </h2>

      <div class="process-flow">
        <div 
          v-for="(step, index) in PROCESS_STEPS" 
          :key="step.step"
          class="process-step scroll-reveal"
          :class="`delay-${index * 100}`"
        >
          <div class="step-number">{{ step.step }}</div>
          <div class="step-icon">
            <img 
              :src="`${baseUrl}images/process/step-${step.step}.png`" 
              :alt="step.title"
              class="step-image"
            />
          </div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
          
          <!-- 箭頭 -->
          <div v-if="index < PROCESS_STEPS.length - 1" class="step-arrow">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PROCESS_STEPS } from '../../utils/constants'

const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
.process-section {
  background: linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-accent));
}

.process-flow {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  margin-top: var(--spacing-3xl);
}

.process-step {
  position: relative;
  flex: 1;
  min-width: 150px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-xl);
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.process-step:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

@media (max-width: 768px) {
  .process-step {
    max-width: 100%;
  }
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-md);
}

.step-icon {
  width: 150px;
  height: 150px;
  margin-bottom: var(--spacing-md);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.step-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.process-step:hover .step-image {
  transform: scale(1.1);
}

.step-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.step-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0;
}

.step-arrow {
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-primary);
  animation: bounce-horizontal 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .step-arrow {
    display: none;
  }
}

@keyframes bounce-horizontal {
  0%, 100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(5px);
  }
}
</style>

