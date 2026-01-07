// PEP 網站常數定義

// 公司資訊
export const COMPANY_INFO = {
  name: '蘇沛實業有限公司',
  phone: '06-2519898',
  fax: '06-2519797',
  email: 'info@super-pep.com.tw',
  address: '台南市'
}

// 產品資訊
export const PRODUCTS = [
  {
    id: 'product-010',
    name: '超韌性透明膜0.10mm',
    thickness: '0.10mm',
    description: '適用於各種農業溫室，提供優異的透光性與耐用性',
    features: [
      '高透光率',
      '超強韌性',
      '抗UV',
      '長效使用'
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-0.10mm'
  },
  {
    id: 'product-015',
    name: '超韌性透明膜0.15mm',
    thickness: '0.15mm',
    description: '加厚設計，提供更強的保護與更長的使用壽命',
    features: [
      '加厚設計',
      '超強韌性',
      '抗UV',
      '耐候性佳'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-0.15mm'
  },
  {
    id: 'product-020',
    name: '超韌性透明膜0.20mm',
    thickness: '0.20mm',
    description: '最厚規格，適合需要最高強度保護的應用',
    features: [
      '最高強度',
      '超強韌性',
      '抗UV',
      '超長壽命'
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-0.20mm'
  },
  {
    id: 'product-waterproof',
    name: '軟質不透水布',
    thickness: '多種規格',
    description: '防水性能優異，適用於各種防水需求',
    features: [
      '完全防水',
      '柔軟耐用',
      '多種規格',
      '應用廣泛'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-waterproof'
  }
]

// 進化歷程
export const TIMELINE = [
  {
    year: '1996-1999',
    title: '扯出TUV3750AF',
    description: '開始生產高品質農膜'
  },
  {
    year: '2000-2003',
    title: '扯出TUV3755AF',
    description: '技術升級，品質提升'
  },
  {
    year: '2004-2007',
    title: '扯出UV2794AD',
    description: '新一代產品問世'
  },
  {
    year: '2008-2011',
    title: '扯出UV2794ADAS',
    description: '持續創新研發'
  },
  {
    year: '2012-2015',
    title: '扯出UV2798AD 降溫膜',
    description: '推出降溫功能膜'
  },
  {
    year: '2016-2019',
    title: '扯出UV2892AD 超韌性膜布',
    description: '超韌性材質突破'
  },
  {
    year: '2020~',
    title: '扯出UV2992AD-S 0.2mm 超透膜',
    description: '最新超透明技術'
  }
]

// 製作流程
export const PROCESS_STEPS = [
  {
    step: 1,
    title: '工廠',
    description: '先進的生產設備',
    icon: 'factory'
  },
  {
    step: 2,
    title: '吹膜',
    description: '精密的吹膜技術',
    icon: 'manufacturing'
  },
  {
    step: 3,
    title: '多層共擠壓',
    description: '三層共擠技術',
    icon: 'layers'
  },
  {
    step: 4,
    title: '完成品',
    description: '品質檢驗完成',
    icon: 'check'
  },
  {
    step: 5,
    title: '使用實景',
    description: '實際應用場景',
    icon: 'greenhouse'
  }
]

// 導航選單
export const NAVIGATION = [
  {
    name: 'pep',
    path: '/',
    children: []
  },
  {
    name: '產品系列',
    path: '/products',
    children: [
      { name: '超韌性透明膜0.10mm', path: '/products/product-0.10mm' },
      { name: '超韌性透明膜0.15mm', path: '/products/product-0.15mm' },
      { name: '超韌性透明膜0.20mm', path: '/products/product-0.20mm' },
      { name: '軟質不透水布', path: '/products/product-waterproof' }
    ]
  },
  {
    name: '產品保固',
    path: '/warranty',
    children: []
  },
  {
    name: '認識農膜',
    path: '/agricultural-film',
    children: [
      { name: '光的影響', path: '/agricultural-film/light-impact' },
      { name: '農膜種類', path: '/agricultural-film/types' },
      { name: '注意事項', path: '/agricultural-film/precautions' }
    ]
  },
  {
    name: '聯絡我們',
    path: '/contact',
    children: []
  }
]

// 社交媒體
export const SOCIAL_LINKS = {
  line: 'https://line.me/ti/p/@super-pep',
  facebook: 'https://www.facebook.com/superpep'
}

// SEO Meta
export const SEO_DEFAULT = {
  title: 'PEP利得膜 - 專業農膜製造商',
  description: '上海普拉斯克塑料有限公司是由希臘Plastika Kritis S.A.集團所投資的農膜專業生產工廠，擁有近50年的經驗，產品外銷全世界45個國家。',
  keywords: 'PEP, 利得膜, 農膜, 溫室, 透明膜, 防水布, 農業, 塑膠膜'
}

