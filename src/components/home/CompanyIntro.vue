<template>
  <section class="company-intro section">
    <div class="container">
      <div class="intro-grid">
        <div class="intro-image scroll-reveal">
          <img 
            :src="`${baseUrl}images/factory/plastika-kritis.jpg`" 
            alt="Plastika Kritis工廠" 
            class="hover-lift"
          />
        </div>
        
        <div class="intro-content scroll-reveal">
          <h2 class="section-title">PEP利得膜產品介紹</h2>
          
          <div class="intro-text">
            <p>
              上海普拉斯克塑料有限公司是由希臘<strong>Plastika Kritis S.A.</strong>集團所投資的農膜專業生產工廠，以就近提供中國的高檔膜市場，及作為泛太平洋區域的出貨基地。
            </p>
            
            <p>
              希臘Plastika Kritis S.A.創立於<strong>1970年</strong>，也是全世界第一家率先開發、運用<strong>三層共擠技術</strong>的農膜生產廠家，擁有近50年的經驗，產品外銷全世界45個國家。
            </p>
            
            <p>
              設立於上海的工廠，採用了最先進的進口設備，希臘+台灣的優秀經營團隊，於2002年6月開始投資生產，至今<strong>PEP利得膜®品牌</strong>，已是市場公認的一流品牌。
            </p>
          </div>

          <div class="intro-features">
            <div class="feature-item" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">{{ feature.icon }}</div>
              <div class="feature-content">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL

const features = [
  {
    icon: '🏭',
    title: '先進設備',
    description: '採用最先進的進口生產設備'
  },
  {
    icon: '🔬',
    title: '多層共擠技術',
    description: '全球首創三層共擠技術'
  },
  {
    icon: '🌍',
    title: '全球市場',
    description: '產品外銷全世界45個國家'
  },
  {
    icon: '⭐',
    title: '一流品牌',
    description: '市場公認的一流品牌'
  }
]
</script>

<style scoped>
.company-intro {
  background-color: var(--color-bg-secondary);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
}

.intro-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.section-title {
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.intro-text {
  margin-bottom: var(--spacing-2xl);
}

.intro-text p {
  margin-bottom: var(--spacing-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

.intro-text strong {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.intro-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .intro-features {
    grid-template-columns: 1fr;
  }
}

.feature-item {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.feature-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.feature-icon {
  font-size: var(--font-size-3xl);
  flex-shrink: 0;
}

.feature-content h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.feature-content p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0;
}
</style>

