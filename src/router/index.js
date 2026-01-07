import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'PEP利得膜 - 專業農膜製造商'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    meta: {
      title: '產品系列 - PEP利得膜'
    }
  },
  {
    path: '/products/:slug',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue'),
    meta: {
      title: '產品詳情 - PEP利得膜'
    }
  },
  {
    path: '/warranty',
    name: 'Warranty',
    component: () => import('../views/Warranty.vue'),
    meta: {
      title: '產品保固 - PEP利得膜'
    }
  },
  {
    path: '/agricultural-film',
    name: 'AgriculturalFilm',
    component: () => import('../views/AgriculturalFilm.vue'),
    meta: {
      title: '認識農膜 - PEP利得膜'
    }
  },
  {
    path: '/agricultural-film/light-impact',
    name: 'LightImpact',
    component: () => import('../views/LightImpact.vue'),
    meta: {
      title: '光的影響 - PEP利得膜'
    }
  },
  {
    path: '/agricultural-film/types',
    name: 'FilmTypes',
    component: () => import('../views/FilmTypes.vue'),
    meta: {
      title: '農膜種類 - PEP利得膜'
    }
  },
  {
    path: '/agricultural-film/precautions',
    name: 'Precautions',
    component: () => import('../views/Precautions.vue'),
    meta: {
      title: '注意事項 - PEP利得膜'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: '聯絡我們 - PEP利得膜'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// 路由守衛 - 更新頁面標題
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'PEP利得膜'
  next()
})

export default router

