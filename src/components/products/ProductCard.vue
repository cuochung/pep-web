<template>
  <router-link :to="`/products/${product.slug}`" class="product-card">
    <div class="product-image">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="card-img"
      />
      <div class="product-badge">{{ product.thickness }}</div>
    </div>
    
    <div class="product-content">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      
      <ul class="product-features">
        <li v-for="(feature, index) in product.features" :key="index">
          <span class="feature-icon">✓</span>
          {{ feature }}
        </li>
      </ul>
      
      <div class="product-action">
        <span class="action-text">查看詳情</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all var(--transition-base);
  height: 100%;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.product-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: var(--color-gray-100);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .card-img {
  transform: scale(1.1);
}

.product-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  box-shadow: var(--shadow-md);
}

.product-content {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex: 1;
}

.product-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: 0;
}

.product-description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

.product-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin: 0;
  padding: 0;
}

.product-features li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.feature-icon {
  color: var(--color-success);
  font-weight: var(--font-weight-bold);
}

.product-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-gray-200);
  margin-top: auto;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.product-card:hover .product-action {
  color: var(--color-primary-dark);
}

.product-action svg {
  transition: transform var(--transition-base);
}

.product-card:hover .product-action svg {
  transform: translateX(5px);
}
</style>

