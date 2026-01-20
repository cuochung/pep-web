<template>
  <div class="light-impact-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">光的影響</h1>
        <p class="page-subtitle scroll-reveal">
          認識太陽光譜對植物的影響
        </p>
      </div>
    </section>

    <section class="content-section section">
      <div class="container">
        <div class="content-wrapper">
          <div class="main-content scroll-reveal">
            <!-- 太陽光譜的組成 -->
            <div class="spectrum-card primary-card">
              <h2>太陽光譜的組成</h2>
              <p class="intro-text">
                自然的太陽光包括紫外線、可見光及紅外線三種，太陽光的照射經過大氣層而後到地球，會產生過濾的作用，因此到達地球的表面其光線的組合變成：
              </p>
              <div class="spectrum-grid">
                <div class="spectrum-item uv">
                  <div class="spectrum-value">7%</div>
                  <div class="spectrum-label">紫外線</div>
                  <div class="spectrum-desc">會改變物質的結構<br>具有破壞性</div>
                </div>
                <div class="spectrum-item visible">
                  <div class="spectrum-value">71%</div>
                  <div class="spectrum-label">可見光</div>
                  <div class="spectrum-desc">可提供照明<br>產生光合作用</div>
                </div>
                <div class="spectrum-item infrared">
                  <div class="spectrum-value">22%</div>
                  <div class="spectrum-label">紅外線</div>
                  <div class="spectrum-desc">會產生熱能<br>具有殺菌作用</div>
                </div>
              </div>
            </div>

            <!-- A.B.C.級紫外線 -->
            <div class="content-card">
              <h2>A.B.C.級紫外線</h2>
              <p>
                在7%的紫外線中又可分為三級不同之波長（均對植物有不同的影響）
              </p>
              <div class="uv-levels">
                <div class="uv-level harmful">
                  <div class="uv-header">
                    <span class="uv-grade">C級紫外線</span>
                    <span class="uv-range">200~280nm</span>
                  </div>
                  <div class="uv-percentage">佔 3%</div>
                  <div class="uv-effect">對大多數植物都有害</div>
                </div>
                <div class="uv-level harmful">
                  <div class="uv-header">
                    <span class="uv-grade">B級紫外線</span>
                    <span class="uv-range">280~320nm</span>
                  </div>
                  <div class="uv-percentage">佔 9%</div>
                  <div class="uv-effect">對大多數植物都有害</div>
                </div>
                <div class="uv-level beneficial">
                  <div class="uv-header">
                    <span class="uv-grade">A級紫外線</span>
                    <span class="uv-range">320~380nm</span>
                  </div>
                  <div class="uv-percentage">佔 88%</div>
                  <div class="uv-effect">對植物有益，可使植物的葉片加厚且具有殺菌作用</div>
                </div>
              </div>
              <div class="key-point">
                農膜的作用，就是阻隔C.B級有害的紫外線進入，而讓有利於植物成長的A級紫外線能夠進入溫室。
              </div>
            </div>

            <!-- 第一波段的輻射線 -->
            <div class="content-card">
              <h2>第一波段的輻射線</h2>
              <p>
                是含有大量能量的紫外線，但部份的紫外線都被臭氧層所吸收。所以我們較關心的是與農膜有密切相關的部份：
              </p>
              <ul>
                <li>
                  <strong>紫外線-B波長（280~320nm）及紫外線-A（波長320~380nm）</strong>
                  <p>這二種波段的紫外線有其不同的作用，如：對花卉產生著色的作用，但對農膜會產生破壞及分解的作用</p>
                </li>
                <li>
                  <strong>UV劑的重要性</strong>
                  <p>這也就是為什麼農膜需要添加UV劑的原因，可用來延長農膜的使用壽命</p>
                </li>
              </ul>
            </div>

            <!-- 第二波段的輻射線 -->
            <div class="content-card">
              <h2>第二波段的輻射線</h2>
              <p>
                是<strong>可見光（波長400~700nm）</strong>，相當於藍光、綠光、黃光及紅光，又稱為<strong>PAR</strong>，即<strong>光合作用活躍區</strong>。是植物用來進行光合作用最重要的可見光部份。
              </p>
              <ul>
                <li><strong>藍光與紅光</strong>是在PAR光譜帶中最重要的部份，因為植物中的核黃素能有效的吸收此一部份的光線</li>
                <li><strong>綠光</strong>則不容易被吸收</li>
              </ul>
            </div>

            <!-- 第三波段的輻射線 -->
            <div class="content-card">
              <h2>第三波段的輻射線</h2>
              <p>是紅外線又可分為近紅外線與遠紅外線</p>
              <div class="infrared-types">
                <div class="infrared-type">
                  <h4>近紅外線（波長780~3,000nm）</h4>
                  <p>的光，對植物是沒有用的，它只會產生熱能。</p>
                </div>
                <div class="infrared-type highlight">
                  <h4>遠紅外線（波長3,000~50,000nm）</h4>
                  <p>
                    這一部份的輻射線並不是直接從太陽光而來的。它是一種帶有熱能分子所產生的輻射線，一到晚上就很容易散失掉，所以當我們談到保溫效果時，就是因為溫室能夠減緩這一部份輻射線的散失而達到保溫的效果。
                  </p>
                  <p class="note">
                    一般的PE並沒有此種效果，而<strong>EVA或礦物類的填充物（如CaCO₃）</strong>，藉由以上的物質可增加對遠紅外線的吸收來提高溫室的保溫效果。
                  </p>
                </div>
              </div>
            </div>

            <!-- 最適合植物生長的波長範圍 -->
            <div class="highlight-box">
              <h3>最適合植物生長的波長範圍</h3>
              <div class="optimal-range">
                <div class="range-value">400~700nm</div>
                <p>這個範圍涵蓋了可見光光譜，是植物進行光合作用的最佳波段</p>
              </div>
              <div class="spectrum-chart">
                <img 
                  src="/images/knowlange/a.jpg" 
                  alt="太陽光譜與植物之成長關係" 
                  class="chart-image"
                />
              </div>
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
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-bold);
}

.main-content > p {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2xl);
}

/* 太陽光譜組成卡片 */
.spectrum-card {
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-2xl);
}

.primary-card {
  border-top: 5px solid var(--color-primary);
}

.intro-text {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-xl);
}

.spectrum-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .spectrum-grid {
    grid-template-columns: 1fr;
  }
}

.spectrum-item {
  text-align: center;
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.spectrum-item.uv {
  background: linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%);
  border: 3px solid #9c27b0;
}

.spectrum-item.visible {
  background: linear-gradient(135deg, #fff9c4 0%, #fff59d 100%);
  border: 3px solid #fbc02d;
}

.spectrum-item.infrared {
  background: linear-gradient(135deg, #ffccbc 0%, #ff8a65 100%);
  border: 3px solid #e64a19;
}

.spectrum-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.spectrum-value {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.spectrum-label {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.spectrum-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* 內容卡片 */
.content-card {
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-2xl);
}

.content-card h2 {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-bold);
}

.content-card h3 {
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.content-card h4 {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.content-card p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.content-card ul {
  list-style: none;
  padding: 0;
  margin: var(--spacing-lg) 0;
}

.content-card li {
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-xl);
  position: relative;
}

.content-card li::before {
  content: '▪';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-size: var(--font-size-xl);
}

.content-card li p {
  margin-top: var(--spacing-xs);
  margin-bottom: 0;
  font-size: var(--font-size-sm);
}

/* UV等級 */
.uv-levels {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
}

.uv-level {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border-left: 5px solid;
  transition: all var(--transition-base);
}

.uv-level.harmful {
  background-color: #ffebee;
  border-color: #d32f2f;
}

.uv-level.beneficial {
  background-color: #e8f5e9;
  border-color: #2e7d32;
}

.uv-level:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-md);
}

.uv-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.uv-grade {
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  font-size: var(--font-size-lg);
}

.uv-range {
  font-family: monospace;
  background-color: rgba(0, 0, 0, 0.05);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.uv-percentage {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xs);
}

.uv-effect {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* 重點強調 */
.key-point {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border-left: 5px solid var(--color-primary);
  margin-top: var(--spacing-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
}

/* 紅外線類型 */
.infrared-types {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.infrared-type {
  padding: var(--spacing-lg);
  background-color: #f5f5f5;
  border-radius: var(--radius-lg);
  border-left: 4px solid #ff9800;
}

.infrared-type.highlight {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-left: 4px solid #f57c00;
}

.infrared-type h4 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.infrared-type p {
  margin-bottom: var(--spacing-sm);
}

.infrared-type .note {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.highlight-box {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  padding: var(--spacing-3xl);
  border-radius: var(--radius-xl);
  margin-top: var(--spacing-2xl);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.highlight-box h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-xl);
  font-weight: var(--font-weight-bold);
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

/* 最適波長範圍 */
.optimal-range {
  background-color: rgba(255, 255, 255, 0.15);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.range-value {
  font-size: var(--font-size-5xl);
  font-weight: 900;
  color: #ffeb3b;
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.05em;
}

.optimal-range p {
  font-size: var(--font-size-lg);
  color: var(--color-white);
  margin: 0;
  line-height: var(--line-height-relaxed);
}

/* 光譜圖表 */
.spectrum-chart {
  margin-top: var(--spacing-2xl);
  background-color: rgba(255, 255, 255, 0.95);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.chart-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
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

/* 響應式設計 */
@media (max-width: 768px) {
  .spectrum-card,
  .content-card {
    padding: var(--spacing-lg);
  }

  .spectrum-value {
    font-size: var(--font-size-3xl);
  }

  .spectrum-label {
    font-size: var(--font-size-lg);
  }

  .uv-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .range-value {
    font-size: var(--font-size-4xl);
  }

  .highlight-box {
    padding: var(--spacing-2xl);
  }

  .optimal-range {
    padding: var(--spacing-lg);
  }
}
</style>

