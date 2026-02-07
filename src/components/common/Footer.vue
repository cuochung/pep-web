<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- 公司資訊 -->
        <div class="footer-section">
          <h3 class="footer-title">{{ COMPANY_INFO.name }}</h3>
          <ul class="footer-info">
            <li>
              <span class="icon">📞</span>
              <span>TEL: {{ COMPANY_INFO.phone }}</span>
            </li>
            <li>
              <span class="icon">📠</span>
              <span>FAX: {{ COMPANY_INFO.fax }}</span>
            </li>
            <li v-if="COMPANY_INFO.email">
              <span class="icon">✉️</span>
              <a :href="`mailto:${COMPANY_INFO.email}`">{{ COMPANY_INFO.email }}</a>
            </li>
          </ul>
        </div>

        <!-- 快速連結 -->
        <div class="footer-section">
          <h3 class="footer-title">快速連結</h3>
          <ul class="footer-links">
            <li v-for="item in quickLinks" :key="item.path">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <!-- 產品系列 -->
        <div class="footer-section">
          <h3 class="footer-title">產品系列</h3>
          <ul class="footer-links">
            <li v-for="product in PRODUCTS" :key="product.id">
              <router-link :to="`/products/${product.slug}`">
                {{ product.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 社交媒體 -->
        <div class="footer-section">
          <h3 class="footer-title">關注我們</h3>
          
          <div class="social-links">
            <a 
              :href="SOCIAL_LINKS.line" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              aria-label="LINE"
            >
              <img :src="`${baseUrl}images/icons/line-icon.png`" alt="LINE" />
            </a>
            <a 
              :href="SOCIAL_LINKS.facebook" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Facebook"
            >
              <img :src="`${baseUrl}images/icons/facebook-icon.png`" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} {{ COMPANY_INFO.name }}. All rights reserved.
        </p>
        <p class="powered-by">
          Powered by PEP利得膜
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { COMPANY_INFO, PRODUCTS, SOCIAL_LINKS } from '../../utils/constants'

const baseUrl = import.meta.env.BASE_URL

const currentYear = computed(() => new Date().getFullYear())

const quickLinks = [
  { name: '首頁', path: '/' },
  { name: '產品系列', path: '/products' },
  { name: '產品保固', path: '/warranty' },
  { name: '認識農膜', path: '/agricultural-film' },
  { name: '聯絡我們', path: '/contact' }
]
</script>

<style scoped>
.footer {
  background-color: var(--color-gray-900);
  color: var(--color-gray-300);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  margin-top: var(--spacing-4xl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-title {
  color: var(--color-white);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-sm);
}

.footer-info,
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-info li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.footer-info .icon {
  font-size: var(--font-size-lg);
}

.footer-links a {
  color: var(--color-gray-300);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-primary-light);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-gray-800);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.social-link:hover {
  background-color: var(--color-primary);
  transform: translateY(-3px);
}

.social-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all var(--transition-base);
}

.footer-bottom {
  border-top: 1px solid var(--color-gray-800);
  padding-top: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

.copyright,
.powered-by {
  color: var(--color-gray-400);
  font-size: var(--font-size-sm);
  margin: 0;
}
</style>

