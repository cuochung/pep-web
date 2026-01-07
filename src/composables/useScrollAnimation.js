import { onMounted, onUnmounted, ref } from 'vue'

/**
 * 滾動動畫 Composable
 * 用於偵測元素進入視窗並觸發動畫
 */
export function useScrollAnimation() {
  const elements = ref([])
  let observer = null

  const observeElements = () => {
    // 如果已經有觀察器，先斷開連接
    if (observer) {
      observer.disconnect()
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01 // 降低閾值，更容易觸發
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          // 可選：觀察一次後就停止
          // observer.unobserve(entry.target)
        }
      })
    }, options)

    // 觀察所有帶有 scroll-reveal 類別的元素
    const scrollElements = document.querySelectorAll('.scroll-reveal')
    elements.value = []
    
    scrollElements.forEach(el => {
      // 如果元素已經被觀察過，先移除 revealed 類別以便重新觸發
      if (el.classList.contains('revealed')) {
        el.classList.remove('revealed')
      }
      
      // 先觀察元素
      observer.observe(el)
      elements.value.push(el)
      
      // 立即檢查元素是否在視窗內（getBoundingClientRect 返回相對於視窗的位置）
      const rect = el.getBoundingClientRect()
      const isInViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
      
      // 或者元素部分在視窗內
      const isPartiallyVisible = (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
      )
      
      // 如果元素在視窗內（完全或部分），立即標記為 revealed
      if (isInViewport || isPartiallyVisible) {
        // 使用 requestAnimationFrame 確保在下一幀執行
        requestAnimationFrame(() => {
          el.classList.add('revealed')
        })
      }
    })
  }

  onMounted(() => {
    // 延遲一點執行，確保 DOM 已渲染
    setTimeout(observeElements, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    elements,
    observeElements // 導出以便手動觸發
  }
}

/**
 * 平滑滾動到指定元素
 */
export function useScrollTo() {
  const scrollTo = (elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return {
    scrollTo,
    scrollToTop
  }
}

/**
 * 偵測滾動位置
 */
export function useScrollPosition() {
  const scrollY = ref(0)
  const isScrolled = ref(false)

  const handleScroll = () => {
    scrollY.value = window.scrollY
    isScrolled.value = window.scrollY > 100
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    isScrolled
  }
}

