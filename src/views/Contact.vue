<template>
  <div class="contact-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">聯絡我們</h1>
        <p class="page-subtitle scroll-reveal">
          歡迎與我們聯繫，我們將竭誠為您服務
        </p>
      </div>
    </section>

    <section class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <!-- 聯絡資訊 -->
          <div class="contact-info scroll-reveal">
            <h2>聯絡資訊</h2>
            
            <div class="info-card">
              <div class="info-icon">🏢</div>
              <div class="info-content">
                <h3>公司名稱</h3>
                <p>{{ COMPANY_INFO.name }}</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">📞</div>
              <div class="info-content">
                <h3>聯絡電話</h3>
                <p><a :href="`tel:${COMPANY_INFO.phone}`">{{ COMPANY_INFO.phone }}</a></p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">📠</div>
              <div class="info-content">
                <h3>傳真號碼</h3>
                <p>{{ COMPANY_INFO.fax }}</p>
              </div>
            </div>

            <div v-if="COMPANY_INFO.email" class="info-card">
              <div class="info-icon">✉️</div>
              <div class="info-content">
                <h3>電子郵件</h3>
                <p><a :href="`mailto:${COMPANY_INFO.email}`">{{ COMPANY_INFO.email }}</a></p>
              </div>
            </div>

            <div class="social-section">
              <h3>社交媒體</h3>
              <div class="social-links">
                <a 
                  :href="SOCIAL_LINKS.line" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <img src="/images/icons/line-icon.png" alt="LINE" />
                  <span>LINE</span>
                </a>
                <a 
                  :href="SOCIAL_LINKS.facebook" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <img src="/images/icons/facebook-icon.png" alt="Facebook" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants'
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-3xl);
  max-width: 800px;
  margin: 0 auto;
}

.contact-info h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.info-card {
  display: flex;
  gap: var(--spacing-lg);
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
  transition: all var(--transition-base);
}

.info-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.info-icon {
  font-size: var(--font-size-3xl);
  flex-shrink: 0;
}

.info-content h3 {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-xs);
}

.info-content p {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.info-content a {
  color: var(--color-primary);
  transition: color var(--transition-fast);
}

.info-content a:hover {
  color: var(--color-primary-dark);
}

.social-section {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.social-section h3 {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-gray-50);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.social-link:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
}

.social-link img {
  width: 72px;
  height: 72px;
  object-fit: contain;
}
</style>

