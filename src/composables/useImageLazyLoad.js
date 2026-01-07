import { onMounted, onUnmounted, ref } from 'vue'

/**
 * 圖片懶加載 Composable
 */
export function useImageLazyLoad() {
  const loadedImages = ref(new Set())
  let observer = null

  const observeImages = () => {
    // 如果已經有觀察器，先斷開連接
    if (observer) {
      observer.disconnect()
    }

    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          const src = img.dataset.src

          if (src && !loadedImages.value.has(src)) {
            // 載入圖片
            const tempImg = new Image()
            tempImg.onload = () => {
              img.src = src
              img.classList.add('loaded')
              loadedImages.value.add(src)
            }
            tempImg.src = src
          }

          observer.unobserve(img)
        }
      })
    }, options)

    // 觀察所有帶有 data-src 的圖片
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => {
      observer.observe(img)
    })
  }

  onMounted(() => {
    setTimeout(observeImages, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    loadedImages,
    observeImages // 導出以便手動觸發
  }
}

/**
 * 圖片預載入
 */
export function useImagePreload(imageUrls) {
  const loadedCount = ref(0)
  const totalCount = ref(imageUrls.length)
  const isLoading = ref(true)

  const preloadImages = () => {
    const promises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          loadedCount.value++
          resolve()
        }
        img.onerror = reject
        img.src = url
      })
    })

    Promise.all(promises)
      .then(() => {
        isLoading.value = false
      })
      .catch(error => {
        console.error('圖片預載入失敗:', error)
        isLoading.value = false
      })
  }

  onMounted(() => {
    if (imageUrls.length > 0) {
      preloadImages()
    } else {
      isLoading.value = false
    }
  })

  return {
    loadedCount,
    totalCount,
    isLoading
  }
}

