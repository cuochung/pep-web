<template>
  <div class="warranty-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">產品保固</h1>
        <p class="page-subtitle scroll-reveal">
          我們提供完善的產品保固服務
        </p>
      </div>
    </section>

    <section class="warranty-content section">
      <div class="container">
        <div class="content-grid">
          <div class="warranty-info scroll-reveal">
            <h2>保固政策</h2>
            <p>
              PEP利得膜®提供完整的產品保固服務，確保您的權益。我們的產品經過嚴格的品質控管，並提供以下保固承諾：
            </p>

            <div class="warranty-card">
              <div class="warranty-icon">🛡️</div>
              <h3>品質保證</h3>
              <p>所有產品均通過國際品質認證，確保最高品質標準</p>
            </div>

            <div class="warranty-card">
              <div class="warranty-icon">⏰</div>
              <h3>保固期限</h3>
              <p>依產品規格提供不同年限的保固服務，詳情請洽詢業務人員</p>
            </div>

            <div class="warranty-card">
              <div class="warranty-icon">🔧</div>
              <h3>售後服務</h3>
              <p>提供完善的售後服務，包括技術諮詢與問題處理</p>
            </div>

            <div class="warranty-card">
              <div class="warranty-icon">📞</div>
              <h3>客戶支援</h3>
              <p>專業團隊隨時為您服務，解決您的任何疑問</p>
            </div>
          </div>

          <div class="warranty-details scroll-reveal">
            <h2>保固條款</h2>
            
            <div class="detail-section">
              <h3>保固範圍</h3>
              <ul>
                <li>產品材質缺陷</li>
                <li>製造過程瑕疵</li>
                <li>正常使用下的品質問題</li>
                <li>符合產品規格的性能保證</li>
              </ul>
            </div>

            <div class="detail-section">
              <h3>保固條件</h3>
              <ul>
                <li>依照產品使用說明正確安裝與使用</li>
                <li>保存完整的購買憑證</li>
                <li>在保固期限內提出申請</li>
                <li>產品未經非授權人員拆卸或修改</li>
              </ul>
            </div>

            <div class="detail-section">
              <h3>不在保固範圍</h3>
              <ul>
                <li>人為損壞或不當使用</li>
                <li>自然災害造成的損害</li>
                <li>未依照使用說明安裝</li>
                <li>超過保固期限</li>
              </ul>
            </div>

            <div class="detail-section">
              <h3>保固申請流程</h3>
              <ol>
                <li>聯繫我們的客服團隊</li>
                <li>提供產品資訊與購買憑證</li>
                <li>說明問題狀況</li>
                <li>等待專業人員評估</li>
                <li>依評估結果進行處理</li>
              </ol>
            </div>
          </div>
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

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-4xl);
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

.warranty-info h2,
.warranty-details h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.warranty-info > p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2xl);
}

.warranty-card {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
  transition: all var(--transition-base);
}

.warranty-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.warranty-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
}

.warranty-card h3 {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.warranty-card p {
  color: var(--color-text-secondary);
  margin: 0;
}

.detail-section {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
}

.detail-section h3 {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.detail-section ul,
.detail-section ol {
  padding-left: var(--spacing-xl);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.detail-section li {
  margin-bottom: var(--spacing-sm);
}

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
</style>

