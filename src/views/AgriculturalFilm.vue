<template>
  <div class="agricultural-film-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">認識農膜</h1>
        <p class="page-subtitle scroll-reveal">
          了解農膜的特性與應用
        </p>
      </div>
    </section>

    <section class="intro-section section">
      <div class="container">
        <div class="intro-content scroll-reveal">
          <h2>什麼是農膜？</h2>
          <p>
            農膜（Agricultural Film）是一種專門用於農業生產的塑膠薄膜，主要應用於溫室、大棚等農業設施中。優質的農膜能夠有效調節光照、溫度、濕度等環境因素，為作物創造最適宜的生長環境。
          </p>
          <p>
            PEP利得膜®採用先進的三層共擠技術，結合多年的研發經驗，為農業生產提供高品質的農膜產品。
          </p>
        </div>

        <div class="topics-grid">
          <router-link 
            to="/agricultural-film/light-impact" 
            class="topic-card scroll-reveal"
          >
            <div class="topic-icon">☀️</div>
            <h3>光的影響</h3>
            <p>了解光照對作物生長的重要性</p>
            <span class="topic-arrow">→</span>
          </router-link>

          <router-link 
            to="/agricultural-film/types" 
            class="topic-card scroll-reveal"
          >
            <div class="topic-icon">📋</div>
            <h3>農膜種類</h3>
            <p>認識不同類型的農膜特性</p>
            <span class="topic-arrow">→</span>
          </router-link>

          <router-link 
            to="/agricultural-film/precautions" 
            class="topic-card scroll-reveal"
          >
            <div class="topic-icon">⚠️</div>
            <h3>注意事項</h3>
            <p>農膜使用與保養的重要提醒</p>
            <span class="topic-arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="benefits-section section">
      <div class="container">
        <h2 class="section-title text-center scroll-reveal">農膜的優勢</h2>
        
        <div class="benefits-grid">
          <div class="benefit-card scroll-reveal">
            <div class="benefit-icon">🌡️</div>
            <h3>溫度調節</h3>
            <p>有效保溫，減少溫差，創造穩定的生長環境</p>
          </div>

          <div class="benefit-card scroll-reveal">
            <div class="benefit-icon">💧</div>
            <h3>濕度控制</h3>
            <p>減少水分蒸發，保持適當濕度，節約用水</p>
          </div>

          <div class="benefit-card scroll-reveal">
            <div class="benefit-icon">🌱</div>
            <h3>促進生長</h3>
            <p>提供最佳光照條件，促進作物健康生長</p>
          </div>

          <div class="benefit-card scroll-reveal">
            <div class="benefit-icon">🛡️</div>
            <h3>保護作物</h3>
            <p>抵禦惡劣天氣，減少病蟲害侵襲</p>
          </div>

          <div class="benefit-card scroll-reveal">
            <div class="benefit-icon">📈</div>
            <h3>提高產量</h3>
            <p>延長生長季節，提高作物產量與品質</p>
          </div>

          <div class="benefit-card scroll-reveal">
            <div class="benefit-icon">💰</div>
            <h3>經濟效益</h3>
            <p>降低生產成本，提高經濟收益</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
  text-align: center;
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
}

.page-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-white);
  opacity: 0.9;
  margin: 0;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  text-align: center;
}

.intro-content h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.intro-content p {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

@media (max-width: 1024px) {
  .topics-grid {
    grid-template-columns: 1fr;
  }
}

.topic-card {
  position: relative;
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: all var(--transition-base);
  overflow: hidden;
}

.topic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.topic-card:hover::before {
  transform: scaleX(1);
}

.topic-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.topic-icon {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-lg);
}

.topic-card h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.topic-card p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
}

.topic-arrow {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  transition: transform var(--transition-base);
  display: inline-block;
}

.topic-card:hover .topic-arrow {
  transform: translateX(10px);
}

.benefits-section {
  background-color: var(--color-bg-secondary);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

@media (max-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

.benefit-card {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: all var(--transition-base);
}

.benefit-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-5px);
}

.benefit-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
}

.benefit-card h3 {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.benefit-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
}
</style>

