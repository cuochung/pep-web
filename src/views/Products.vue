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
            v-for="product in productsWithLocalImages" 
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
import { ref } from 'vue'
import ProductCard from '../components/products/ProductCard.vue'
import { PRODUCTS } from '../utils/constants'

const BASE = import.meta.env.BASE_URL

const IMAGES_OTHER = [
  `${BASE}images/products/other/S__49758227.jpg`,
  `${BASE}images/products/other/S__49758228.jpg`,
  `${BASE}images/products/other/S__49758229.jpg`,
  `${BASE}images/products/other/S__49758230.jpg`,
  `${BASE}images/products/other/S__49758231.jpg`,
  `${BASE}images/products/other/S__49758232.jpg`
]

const IMAGES_NW = [
  `${BASE}images/products/nw/nw1.png`,
  `${BASE}images/products/nw/nw2.png`,
  `${BASE}images/products/nw/nw3.png`,
  `${BASE}images/products/nw/nw4.png`,
  `${BASE}images/products/nw/nw5.png`
]

function shuffleArray (arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickRandom (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// 前三張用 other 且不重複，第四張用 nw 亂數
const shuffledOther = shuffleArray(IMAGES_OTHER)
const productsWithLocalImages = ref(
  PRODUCTS.map((p, index) => {
    const image = p.id === 'product-waterproof'
      ? pickRandom(IMAGES_NW)
      : shuffledOther[index % shuffledOther.length]
    return { ...p, image }
  })
)
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

