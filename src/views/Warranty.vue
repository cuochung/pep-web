<template>
  <div class="warranty-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">產品保固書</h1>
        <p class="page-subtitle scroll-reveal">
          依據「PEP利得膜®老化破損保固書」，說明各型號農膜的保固期限與適用條款
        </p>
      </div>
    </section>

    <!-- 保固書圖片展示 -->
    <section class="warranty-document section">
      <div class="container">
        <div class="document-wrapper scroll-reveal">
          <img 
            :src="`${baseUrl}images/warranty.jpg`" 
            alt="老化破損保固書" 
            class="warranty-image"
          />
        </div>
      </div>
    </section>

    <!-- 保固期表格 -->
    <section class="warranty-periods section">
      <div class="container">
        <h2 class="section-title text-center scroll-reveal">保固期限</h2>
        <div class="periods-table scroll-reveal">
          <table>
            <thead>
              <tr>
                <th>農膜種類</th>
                <th>保固期</th>
                <th>農膜種類</th>
                <th>保固期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UV2892 AD-S / 0.10mm</td>
                <td class="period-highlight">24 個月</td>
                <td>UV2992 AD-S / 0.20mm</td>
                <td class="period-highlight">48 個月</td>
              </tr>
              <tr>
                <td>UV2892 AD-S / 0.15mm</td>
                <td class="period-highlight">36 個月</td>
                <td>POP 相變膜 / 0.18mm</td>
                <td class="period-highlight">48 個月</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 保固條款 -->
    <section class="warranty-terms section">
      <div class="container">
        <div class="terms-grid">
          <!-- 保固說明 -->
          <div class="terms-card scroll-reveal">
            <div class="card-icon">📋</div>
            <h3>保固說明</h3>
            <ul class="terms-list">
              <li>
                <span class="bullet">◆</span>
                限台灣地區，依據上述的保固年限，自購買日起，膠布由於紫外線作用而導致提前老化，我方將以先前提供膠布的同等條件，將替換的膠布提供折扣如下：
              </li>
              <li>
                <span class="bullet highlight">◆</span>
                <strong>一年內即發生老化，折扣為 100%</strong>
              </li>
              <li>
                <span class="bullet">◆</span>
                其後，則折扣根據以下公式計算：
              </li>
            </ul>
            <div class="formula-box">
              <div class="formula">
                折扣百分比% = 
                <span class="formula-fraction">
                  <span class="formula-numerator">保固的月份 - 實際使用的月份</span>
                  <span class="formula-denominator">保固的月份</span>
                </span>
                × 100%
              </div>
            </div>
          </div>

          <!-- 責任範圍 -->
          <div class="terms-card scroll-reveal">
            <div class="card-icon">⚠️</div>
            <h3>責任範圍</h3>
            <div class="note-box">
              <p>※ 根據以上所列的折扣方式，我方的責任僅及於膠布價值的範圍內。對於人工費用、可能的作物損害、利潤的損失等，明確的宣告免除任何的責任。</p>
              <p>※ 請配合提供 <strong>50cm×50cm</strong> 之老化樣品（破損處）</p>
            </div>
          </div>

          <!-- 重要聲明 -->
          <div class="terms-card scroll-reveal declaration-card">
            <div class="card-icon">🔴</div>
            <h3>重要聲明</h3>
            <div class="declaration-box">
              <p class="declaration-text">
                零破損是個理想、目標，但是它並不存在<br>
                唯有 <strong class="brand-highlight">PEP利得膜®</strong> 的保固最實在
              </p>
            </div>
          </div>

          <!-- 使用限制 -->
          <div class="terms-card scroll-reveal">
            <div class="card-icon">⚙️</div>
            <h3>使用的限制</h3>
            <ul class="terms-list">
              <li>
                <span class="warning-icon">⚠️</span>
                農用化學品化合物中使用的物質會與紫外線穩定劑產生作用，而導致農膜提前老化。
              </li>
              <li>
                <span class="warning-icon">⚠️</span>
                避免過度的使用殺蟲劑與除草劑，特別是少用那些會硫磺或氯化物的農藥。並禁止直接在農膜上噴灑農藥化學品（爬藤類作物更需特別注意）。
              </li>
              <li>
                <span class="warning-icon">⚠️</span>
                如果發生提早老化問題，而膠布上存在高濃度的硫磺或者其它的化學藥品，則使用壽命的年限保證將喪失效力。
              </li>
            </ul>
          </div>
        </div>

        <div class="bottom-note scroll-reveal">
          <p class="note-emphasis">
            不管氣氛好與壞 <strong class="brand-highlight">PEP利得膜®</strong> 的保固最實在
          </p>
        </div>

        <div class="contact-cta scroll-reveal">
          <h2>需要協助嗎？</h2>
          <p>如有任何保固相關問題，歡迎隨時與我們聯繫</p>
          <router-link to="/contact" class="btn btn-primary">
            聯絡我們
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL
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

/* 保固書圖片展示 */
.warranty-document {
  background: linear-gradient(180deg, #fffef0 0%, #fff9e6 100%);
  padding: var(--spacing-4xl) 0;
}

.document-wrapper {
  max-width: 900px;
  margin: 0 auto;
  background-color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.warranty-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
  object-fit: contain;
  vertical-align: top;
}

/* 保固期表格 */
.warranty-periods {
  background-color: var(--color-bg-secondary);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2xl);
}

.periods-table {
  max-width: 900px;
  margin: 0 auto;
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  overflow-x: auto;
}

.periods-table table {
  width: 100%;
  border-collapse: collapse;
}

.periods-table thead {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
}

.periods-table th {
  padding: var(--spacing-lg);
  text-align: center;
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.periods-table td {
  padding: var(--spacing-lg);
  text-align: center;
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
}

.periods-table tbody tr:hover {
  background-color: #f5f5f5;
}

.period-highlight {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  font-size: var(--font-size-lg);
}

/* 保固條款 */
.warranty-terms {
  background: linear-gradient(180deg, #fffef0 0%, #fff9e6 100%);
  padding: var(--spacing-4xl) 0;
}

.terms-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.terms-card {
  background-color: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all var(--transition-base);
  border-left: 5px solid var(--color-primary);
}

.terms-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
}

.terms-card h3 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.terms-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.terms-list li {
  margin-bottom: var(--spacing-md);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  display: flex;
  gap: var(--spacing-sm);
}

.bullet {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.bullet.highlight {
  color: #d32f2f;
}

.warning-icon {
  flex-shrink: 0;
  font-size: var(--font-size-lg);
}

/* 公式框 */
.formula-box {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-lg);
  border: 2px solid var(--color-primary);
}

.formula {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.formula-fraction {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 var(--spacing-sm);
}

.formula-numerator {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-bottom: 2px solid var(--color-text-primary);
}

.formula-denominator {
  padding: var(--spacing-xs) var(--spacing-sm);
}

/* 備註框 */
.note-box {
  background-color: #fff3cd;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border-left: 4px solid #ff9800;
}

.note-box p {
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.note-box p:last-child {
  margin-bottom: 0;
}

/* 聲明卡片 */
.declaration-card {
  grid-column: 1 / -1;
  border-left: 5px solid #d32f2f;
}

.declaration-box {
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 2px solid #d32f2f;
}

.declaration-text {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

.brand-highlight {
  color: #ffeb3b;
  font-weight: 900;
  font-size: var(--font-size-2xl);
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.7),
    0 0 10px rgba(255, 235, 59, 0.5);
}

/* 底部備註 */
.bottom-note {
  text-align: center;
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
  color: #ffffff;
  padding: var(--spacing-2xl) var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-3xl);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.25);
  border: 4px solid #ffeb3b;
}

.note-emphasis {
  font-size: var(--font-size-2xl);
  font-weight: 900;
  margin: 0;
  color: #ffffff;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 255, 255, 0.3);
  letter-spacing: 0.08em;
}

/* 聯絡區塊 */
.contact-cta {
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  padding: var(--spacing-3xl);
  border-radius: var(--radius-xl);
}

.contact-cta h2 {
  font-size: var(--font-size-3xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
}

.contact-cta p {
  font-size: var(--font-size-lg);
  color: var(--color-white);
  opacity: 0.9;
  margin-bottom: var(--spacing-xl);
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
  background-color: var(--color-white);
  color: var(--color-primary);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .page-title {
    font-size: var(--font-size-3xl);
  }

  .document-wrapper {
    padding: var(--spacing-md);
  }

  .periods-table {
    padding: var(--spacing-lg);
  }

  .periods-table th,
  .periods-table td {
    padding: var(--spacing-sm);
    font-size: var(--font-size-sm);
  }

  .terms-card {
    padding: var(--spacing-lg);
  }

  .formula {
    font-size: var(--font-size-base);
  }

  .declaration-text {
    font-size: var(--font-size-base);
  }

  .note-emphasis {
    font-size: var(--font-size-xl);
  }

  .bottom-note {
    padding: var(--spacing-xl);
    border-width: 3px;
  }

  .brand-highlight {
    font-size: var(--font-size-xl);
  }
}
</style>

