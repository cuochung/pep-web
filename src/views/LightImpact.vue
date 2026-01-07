<template>
  <div class="light-impact-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">光的影響</h1>
        <p class="page-subtitle scroll-reveal">
          光照對作物生長的重要性
        </p>
      </div>
    </section>

    <section class="content-section section">
      <div class="container">
        <div class="content-wrapper">
          <div class="main-content scroll-reveal">
            <h2>光照與作物生長</h2>
            <p>
              光照是植物進行光合作用的必要條件，直接影響作物的生長速度、產量和品質。適當的光照條件能夠促進植物的健康生長，提高作物的經濟價值。
            </p>

            <div class="content-card">
              <h3>光合作用</h3>
              <p>
                植物通過光合作用將光能轉化為化學能，製造生長所需的養分。充足的光照能夠提高光合作用效率，促進植物生長。
              </p>
            </div>

            <div class="content-card">
              <h3>光質的影響</h3>
              <p>
                不同波長的光線對植物生長有不同的影響：
              </p>
              <ul>
                <li><strong>紅光（600-700nm）</strong>：促進開花結果，增加產量</li>
                <li><strong>藍光（400-500nm）</strong>：促進葉綠素形成，增強光合作用</li>
                <li><strong>紫外線（UV）</strong>：適量可增強抗病性，過量會造成傷害</li>
                <li><strong>紅外線（IR）</strong>：影響溫度調節，適量有助於生長</li>
              </ul>
            </div>

            <div class="content-card">
              <h3>光照強度</h3>
              <p>
                光照強度直接影響光合作用的速率。不同作物對光照強度的需求不同：
              </p>
              <ul>
                <li><strong>陽性作物</strong>：需要強光照，如番茄、辣椒、瓜類</li>
                <li><strong>陰性作物</strong>：適合弱光環境，如萵苣、菠菜</li>
                <li><strong>中性作物</strong>：對光照要求適中，如黃瓜、茄子</li>
              </ul>
            </div>

            <div class="content-card">
              <h3>日照時間</h3>
              <p>
                日照時間長短影響植物的生長週期和開花結果：
              </p>
              <ul>
                <li><strong>長日照植物</strong>：需要較長的日照時間才能開花</li>
                <li><strong>短日照植物</strong>：需要較短的日照時間才能開花</li>
                <li><strong>中日照植物</strong>：對日照長短不敏感</li>
              </ul>
            </div>

            <div class="highlight-box">
              <h3>PEP利得膜的光學特性</h3>
              <p>
                PEP利得膜®採用特殊配方，具有優異的透光性能：
              </p>
              <ul>
                <li>高透光率：確保充足的光照進入溫室</li>
                <li>光線擴散：均勻分布光照，避免局部過強或過弱</li>
                <li>UV穩定劑：保護農膜不受紫外線破壞，延長使用壽命</li>
                <li>紅外線保溫：減少熱量散失，保持溫室溫度</li>
              </ul>
            </div>
          </div>

          <aside class="sidebar scroll-reveal">
            <div class="sidebar-card">
              <h3>相關主題</h3>
              <ul class="related-links">
                <li>
                  <router-link to="/agricultural-film">認識農膜</router-link>
                </li>
                <li>
                  <router-link to="/agricultural-film/types">農膜種類</router-link>
                </li>
                <li>
                  <router-link to="/agricultural-film/precautions">注意事項</router-link>
                </li>
              </ul>
            </div>

            <div class="sidebar-card">
              <h3>需要協助？</h3>
              <p>如有任何問題，歡迎與我們聯繫</p>
              <router-link to="/contact" class="btn btn-primary">
                聯絡我們
              </router-link>
            </div>
          </aside>
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

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: var(--spacing-3xl);
}

@media (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}

.main-content h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.main-content > p {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2xl);
}

.content-card {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-xl);
}

.content-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.content-card p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.content-card ul {
  padding-left: var(--spacing-xl);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.content-card li {
  margin-bottom: var(--spacing-sm);
}

.highlight-box {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  margin-top: var(--spacing-2xl);
}

.highlight-box h3 {
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
}

.highlight-box p {
  color: var(--color-white);
  opacity: 0.95;
  margin-bottom: var(--spacing-md);
}

.highlight-box ul {
  padding-left: var(--spacing-xl);
  color: var(--color-white);
  line-height: var(--line-height-relaxed);
}

.highlight-box li {
  margin-bottom: var(--spacing-sm);
}

.sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

@media (max-width: 1024px) {
  .sidebar {
    position: static;
  }
}

.sidebar-card {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
}

.sidebar-card h3 {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.sidebar-card p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.related-links {
  list-style: none;
}

.related-links li {
  margin-bottom: var(--spacing-sm);
}

.related-links a {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.related-links a:hover {
  background-color: var(--color-gray-50);
  color: var(--color-primary);
}

.btn {
  display: block;
  width: 100%;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  transition: all var(--transition-base);
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}
</style>

