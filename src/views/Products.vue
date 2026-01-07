<template>
  <div class="products-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title scroll-reveal">產品系列</h1>
        <p class="page-subtitle scroll-reveal">
          提供多種規格的農膜產品，滿足不同需求
        </p>
      </div>
    </section>

    <section class="products-section section">
      <div class="container">
        <div class="products-grid">
          <div 
            v-for="product in PRODUCTS" 
            :key="product.id"
            class="scroll-reveal"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductCard from '../components/products/ProductCard.vue'
import { PRODUCTS } from '../utils/constants'
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

@media (max-width: 768px) {
  .page-title {
    font-size: var(--font-size-3xl);
  }
  
  .page-subtitle {
    font-size: var(--font-size-lg);
  }
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
</style>

