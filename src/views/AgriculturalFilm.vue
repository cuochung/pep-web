<template>
  <div class="agricultural-film-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">認識農膜</h1>
      </div>
    </section>

    <section class="intro-section section">
      <div class="container">
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

    <section class="features-showcase section">
      <div class="container">
        <h2 class="section-title text-center scroll-reveal">
          農膜原來可以這樣<span class="title-dots">......</span>
        </h2>
        
        <div class="features-grid">
          <!-- 保溫功能 -->
          <div class="feature-item scroll-reveal">
            <h3 class="feature-title">保溫功能</h3>
            <div class="feature-images">
              <div class="feature-image-placeholder">
                <div class="image-icon">☀️</div>
                <span class="image-label">日間</span>
              </div>
              <div class="feature-image-placeholder">
                <div class="image-icon">🌙</div>
                <span class="image-label">夜間</span>
              </div>
            </div>
            <p class="feature-description">有效阻隔遠紅外線，白天蓄熱，夜間保溫，減少溫差</p>
          </div>

          <!-- 防滴功能 -->
          <div class="feature-item scroll-reveal">
            <h3 class="feature-title">防滴功能</h3>
            <div class="feature-images">
              <div class="feature-image-placeholder">
                <div class="image-icon">💧</div>
                <span class="image-label">無防滴</span>
              </div>
              <div class="feature-image-placeholder">
                <div class="image-icon">✨</div>
                <span class="image-label">有防滴</span>
              </div>
            </div>
            <p class="feature-description">防止水滴凝結，使水分以薄膜流下，提升透光率</p>
          </div>

          <!-- 消霧功能 -->
          <div class="feature-item scroll-reveal">
            <h3 class="feature-title">消霧功能</h3>
            <div class="feature-images">
              <div class="feature-image-placeholder">
                <div class="image-icon">🌫️</div>
                <span class="image-label">起霧</span>
              </div>
              <div class="feature-image-placeholder">
                <div class="image-icon">☀️</div>
                <span class="image-label">清晰</span>
              </div>
            </div>
            <p class="feature-description">消除霧氣，保持膜面清晰，確保光線充分透過</p>
          </div>

          <!-- 高折射功能 -->
          <div class="feature-item scroll-reveal">
            <h3 class="feature-title">高折射功能</h3>
            <div class="feature-images">
              <div class="feature-image-placeholder">
                <div class="image-icon">🔆</div>
                <span class="image-label">直射光</span>
              </div>
              <div class="feature-image-placeholder">
                <div class="image-icon">✨</div>
                <span class="image-label">散射光</span>
              </div>
            </div>
            <p class="feature-description">將直射光轉為散射光，光線均勻分佈，防止灼傷</p>
          </div>

          <!-- 降溫功能（夏季） -->
          <div class="feature-item scroll-reveal">
            <h3 class="feature-title">降溫功能（夏季）</h3>
            <div class="feature-images">
              <div class="feature-image-placeholder">
                <div class="image-icon">🔥</div>
                <span class="image-label">高溫</span>
              </div>
              <div class="feature-image-placeholder">
                <div class="image-icon">❄️</div>
                <span class="image-label">降溫</span>
              </div>
            </div>
            <p class="feature-description">微氣泡層設計，反射部分熱能，降低溫室溫度</p>
          </div>

          <!-- 玫瑰專用膜 -->
          <div class="feature-item scroll-reveal">
            <h3 class="feature-title">玫瑰專用膜</h3>
            <div class="feature-images">
              <div class="feature-image-placeholder">
                <div class="image-icon">🥀</div>
                <span class="image-label">一般膜</span>
              </div>
              <div class="feature-image-placeholder">
                <div class="image-icon">🌹</div>
                <span class="image-label">專用膜</span>
              </div>
            </div>
            <p class="feature-description">特殊光譜設計，適合玫瑰生長，提升花色與品質</p>
          </div>

          <!-- 生物防治功能 -->
          <div class="feature-item scroll-reveal">
            <h3 class="feature-title">生物防治功能</h3>
            <div class="feature-images">
              <div class="feature-image-placeholder">
                <div class="image-icon">🐛</div>
                <span class="image-label">有害蟲</span>
              </div>
              <div class="feature-image-placeholder">
                <div class="image-icon">🦟</div>
                <span class="image-label">防治後</span>
              </div>
            </div>
            <p class="feature-description">阻隔特定波長，抑制害蟲活動，減少農藥使用</p>
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

.intro-section {
  padding: var(--spacing-4xl) 0;
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

/* 農膜功能展示區 */
.features-showcase {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(180deg, #fffef0 0%, #fff9e6 100%);
}

.features-showcase .section-title {
  font-size: var(--font-size-3xl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3xl);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.title-dots {
  color: var(--color-primary);
  letter-spacing: 0.2em;
}

/* 功能網格布局 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-3xl) var(--spacing-2xl);
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
}

/* 單個功能項 */
.feature-item {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.feature-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: var(--color-primary);
}

/* 功能標題 */
.feature-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 3px solid var(--color-primary);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 圖片容器 */
.feature-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

/* 圖片占位符 */
.feature-image-placeholder {
  aspect-ratio: 1;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  position: relative;
  overflow: hidden;
  transition: all var(--transition-base);
  border: 2px solid #90caf9;
}

.feature-item:hover .feature-image-placeholder {
  transform: scale(1.05);
  border-color: var(--color-primary);
}

.feature-image-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
}

.feature-item:hover .feature-image-placeholder::before {
  left: 100%;
}

/* 圖片圖示 */
.image-icon {
  font-size: var(--font-size-4xl);
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
}

/* 圖片標籤 */
.image-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background-color: rgba(255, 255, 255, 0.9);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  backdrop-filter: blur(4px);
}

/* 功能描述 */
.feature-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-align: center;
  line-height: 1.6;
  margin: 0;
  padding: 0 var(--spacing-sm);
}

/* 平板裝置 */
@media (max-width: 1024px) {
  .features-grid {
    max-width: 600px;
    gap: var(--spacing-2xl);
  }
  
  .feature-title {
    font-size: var(--font-size-lg);
  }
}

/* 手機裝置 */
@media (max-width: 768px) {
  .features-showcase .section-title {
    font-size: var(--font-size-2xl);
  }
  
  .feature-item {
    padding: var(--spacing-lg);
  }
  
  .image-icon {
    font-size: var(--font-size-3xl);
  }
}
</style>

