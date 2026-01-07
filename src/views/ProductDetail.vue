<template>
  <div v-if="product" class="product-detail-page">
    <section class="product-header section">
      <div class="container">
        <div class="product-layout">
          <!-- 產品圖片 -->
          <div class="product-images scroll-reveal">
            <ProductCarousel :images="productImages" />
          </div>

          <!-- 產品資訊 -->
          <div class="product-info scroll-reveal">
            <div class="product-badge">{{ product.thickness }}</div>
            <h1 class="product-title">{{ product.name }}</h1>
            <p class="product-description">{{ product.description }}</p>

            <div class="product-features">
              <h3>產品特色</h3>
              <ul>
                <li v-for="(feature, index) in product.features" :key="index">
                  <span class="feature-icon">✓</span>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="product-actions">
              <router-link to="/contact" class="btn btn-primary">
                立即詢問
              </router-link>
              <router-link to="/products" class="btn btn-secondary">
                返回產品列表
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 產品畫廊 -->
    <section class="product-gallery-section section">
      <div class="container">
        <h2 class="section-title text-center scroll-reveal">產品圖片</h2>
        <ProductGallery :images="galleryImages" />
      </div>
    </section>

    <!-- 相關產品 -->
    <section class="related-products section">
      <div class="container">
        <h2 class="section-title text-center scroll-reveal">其他產品</h2>
        <div class="products-grid">
          <div 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id"
            class="scroll-reveal"
          >
            <ProductCard :product="relatedProduct" />
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>產品不存在</h1>
      <p>找不到您要查看的產品</p>
      <router-link to="/products" class="btn btn-primary">
        返回產品列表
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCarousel from '../components/products/ProductCarousel.vue'
import ProductGallery from '../components/products/ProductGallery.vue'
import ProductCard from '../components/products/ProductCard.vue'
import { PRODUCTS } from '../utils/constants'

const route = useRoute()

const product = computed(() => {
  return PRODUCTS.find(p => p.slug === route.params.slug)
})

const productImages = computed(() => {
  if (!product.value) return []
  return [
    product.value.image,
    `/images/products/${product.value.id}-2.jpg`,
    `/images/products/${product.value.id}-3.jpg`
  ]
})

const galleryImages = computed(() => {
  if (!product.value) return []
  return [
    `/images/products/${product.value.id}-gallery-1.jpg`,
    `/images/products/${product.value.id}-gallery-2.jpg`,
    `/images/products/${product.value.id}-gallery-3.jpg`,
    `/images/products/${product.value.id}-gallery-4.jpg`
  ]
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return PRODUCTS.filter(p => p.id !== product.value.id).slice(0, 3)
})
</script>

<style scoped>
.product-header {
  background-color: var(--color-bg-secondary);
}

.product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

@media (max-width: 1024px) {
  .product-layout {
    grid-template-columns: 1fr;
  }
}

.product-info {
  position: sticky;
  top: 100px;
}

@media (max-width: 1024px) {
  .product-info {
    position: static;
  }
}

.product-badge {
  display: inline-block;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-lg);
}

.product-title {
  font-size: var(--font-size-3xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.product-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2xl);
}

.product-features {
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-2xl);
}

.product-features h3 {
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.product-features ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.product-features li {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}

.feature-icon {
  color: var(--color-success);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
}

.product-actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn {
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  transition: all var(--transition-base);
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
}

.product-gallery-section {
  background-color: var(--color-white);
}

.related-products {
  background-color: var(--color-bg-secondary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}

.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found h1 {
  font-size: var(--font-size-4xl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
}

.not-found p {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl);
}
</style>

