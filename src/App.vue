<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import BackToTop from './components/common/BackToTop.vue'
import { useScrollAnimation } from './composables/useScrollAnimation'
import { useImageLazyLoad } from './composables/useImageLazyLoad'

const route = useRoute()

// 啟用滾動動畫
const { observeElements: observeScrollElements } = useScrollAnimation()

// 啟用圖片懶加載
const { observeImages: observeLazyImages } = useImageLazyLoad()

// 當路由變化時，重新初始化觀察器
watch(
  () => route.path,
  async () => {
    // 等待路由切換和 DOM 更新完成
    await nextTick()
    // 等待過渡動畫完成（fade transition 是 250ms）
    // 使用雙重 requestAnimationFrame 確保 DOM 完全渲染
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          observeScrollElements()
          observeLazyImages()
        }, 300) // 等待過渡動畫完成（250ms）+ 額外緩衝（50ms）
      })
    })
  }
)

onMounted(() => {
  // 頁面載入完成後的初始化
  console.log('PEP 網站已載入')
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Header 高度 */
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }
}
</style>
