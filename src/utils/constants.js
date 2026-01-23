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
    name: 'UV2892AD-S/0.10mm超透膜',
    thickness: '0.10mm',
    description: '升級版的UV2892AD-S，採用新世代的母料，能延緩透光率逐年衰退的速率，使農膜更透明；並增強UV穩定劑的一般保護能力，可進一步降低老化破損的失敗率，使農膜發揮最佳效能。',
    features: [
      '採用新世代母料',
      '延緩透光率逐年衰退',
      '增強UV穩定劑保護能力',
      '降低老化破損失敗率',
      '發揮最佳效能'
    ],
    specifications: [
      {
        category: '厚度規格',
        items: [
          { name: '厚度', nameEn: 'Thickness', value: '100', unit: 'mic', method: '' },
          { name: '平均厚度公差', nameEn: '', value: '±5%', unit: '', method: '' },
          { name: '任一點厚度公差', nameEn: '', value: '±10%', unit: '', method: '' }
        ]
      },
      {
        category: '機械性能',
        items: [
          { name: '抗拉力強度-縱向', nameEn: 'Tensile strength MD', value: '32', unit: 'N/mm²', method: 'ASTM D882' },
          { name: '抗拉力強度-橫向', nameEn: 'Tensile strength TD', value: '32', unit: 'N/mm²', method: 'ASTM D882' },
          { name: '伸長率-縱向', nameEn: 'Elongation MD', value: '600', unit: '%', method: 'ASTM D882' },
          { name: '伸長率-橫向', nameEn: 'Elongation TD', value: '650', unit: '%', method: 'ASTM D882' },
          { name: '抗撕裂強度', nameEn: 'Tear Resistance', value: '6', unit: 'gf/mic', method: 'ASTM D1922' },
          { name: '耐衝擊強度', nameEn: 'Dart Drop', value: '750', unit: 'gr', method: 'ASTM D1709' }
        ]
      },
      {
        category: '光學性能',
        items: [
          { name: '透光率', nameEn: 'Global Light Transmission', value: '≥90', unit: '%', method: 'ASTM D1003' },
          { name: '折射率', nameEn: 'Diffusion', value: '≤15', unit: '%', method: 'ASTM D1003' },
          { name: 'UV透過率(300~390nm)', nameEn: 'UV Transmission', value: '10~30', unit: '%', method: '' }
        ]
      },
      {
        category: '使用壽命',
        items: [
          { name: '耐用年限', nameEn: 'Lifetime', value: '2', unit: '年', method: '' }
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-0.10mm'
  },
  {
    id: 'product-015',
    name: 'UV2892AD-S/0.15mm超透膜',
    thickness: '0.15mm',
    description: '升級版的UV2892AD-S，採用新世代的母料，能延緩透光率逐年衰退的速率，使農膜更透明；並增強UV穩定劑的一般保護能力，可進一步降低老化破損的失敗率，使農膜發揮最佳效能。',
    features: [
      '採用新世代母料',
      '延緩透光率逐年衰退',
      '增強UV穩定劑保護能力',
      '降低老化破損失敗率',
      '市場主力規格',
      '發揮最佳效能'
    ],
    specialNote: '0.15mm的厚度是目前市場上的主力規格，更是業界抄襲、仿冒的目標。',
    specifications: [
      {
        category: '厚度規格',
        items: [
          { name: '厚度', nameEn: 'Thickness', value: '150', unit: 'mic', method: '' },
          { name: '平均厚度公差', nameEn: '', value: '±5%', unit: '', method: '' },
          { name: '任一點厚度公差', nameEn: '', value: '±10%', unit: '', method: '' }
        ]
      },
      {
        category: '機械性能',
        items: [
          { name: '抗拉力強度-縱向', nameEn: 'Tensile strength MD', value: '32', unit: 'N/mm²', method: 'ASTM D882' },
          { name: '抗拉力強度-橫向', nameEn: 'Tensile strength TD', value: '32', unit: 'N/mm²', method: 'ASTM D882' },
          { name: '伸長率-縱向', nameEn: 'Elongation MD', value: '600', unit: '%', method: 'ASTM D882' },
          { name: '伸長率-橫向', nameEn: 'Elongation TD', value: '650', unit: '%', method: 'ASTM D882' },
          { name: '抗撕裂強度', nameEn: 'Tear Resistance', value: '6', unit: 'gf/mic', method: 'ASTM D1922' },
          { name: '耐衝擊強度', nameEn: 'Dart Drop', value: '750', unit: 'gr', method: 'ASTM D1709' }
        ]
      },
      {
        category: '光學性能',
        items: [
          { name: '透光率', nameEn: 'Global Light Transmission', value: '≥90', unit: '%', method: 'ASTM D1003' },
          { name: '折射率', nameEn: 'Diffusion', value: '≤15', unit: '%', method: 'ASTM D1003' },
          { name: 'UV透過率(300~390nm)', nameEn: 'UV Transmission', value: '10~30', unit: '%', method: '' }
        ]
      },
      {
        category: '使用壽命',
        items: [
          { name: '耐用年限', nameEn: 'Lifetime', value: '2', unit: '年', method: '' }
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-0.15mm'
  },
  {
    id: 'product-020',
    name: 'UV2992AD-S/0.20mm超透膜',
    thickness: '0.20mm',
    description: 'UV2992AD-S 外層添加了比UV2892AD-S更多的紫外線吸收劑與紫外線安定劑，以控制並延長膠膜的使用壽命，可長時間使用減少更換的次數，相對減少農膜更換的勞力及成本，達到降低整體成本的目標。',
    features: [
      '添加更多紫外線吸收劑',
      '添加更多紫外線安定劑',
      '延長使用壽命',
      '減少更換次數',
      '降低勞力成本',
      '降低整體成本'
    ],
    specialNote: '0.2mm的厚度使用年限更可靠穩定，更能承受物理性的破壞，老化破損率低，值得推薦。',
    specifications: [
      {
        category: '厚度規格',
        items: [
          { name: '厚度', nameEn: 'Thickness', value: '200', unit: 'mic', method: '' },
          { name: '平均厚度公差', nameEn: '', value: '±5%', unit: '', method: '' },
          { name: '任一點厚度公差', nameEn: '', value: '±10%', unit: '', method: '' }
        ]
      },
      {
        category: '機械性能',
        items: [
          { name: '抗拉力強度-縱向', nameEn: 'Tensile strength MD', value: '32', unit: 'N/mm²', method: 'ASTM D882' },
          { name: '抗拉力強度-橫向', nameEn: 'Tensile strength TD', value: '32', unit: 'N/mm²', method: 'ASTM D882' },
          { name: '伸長率-縱向', nameEn: 'Elongation MD', value: '600', unit: '%', method: 'ASTM D882' },
          { name: '伸長率-橫向', nameEn: 'Elongation TD', value: '650', unit: '%', method: 'ASTM D882' },
          { name: '抗撕裂強度', nameEn: 'Tear Resistance', value: '6', unit: 'gf/mic', method: 'ASTM D1922' },
          { name: '耐衝擊強度', nameEn: 'Dart Drop', value: '750', unit: 'gr', method: 'ASTM D1709' }
        ]
      },
      {
        category: '光學性能',
        items: [
          { name: '透光率', nameEn: 'Global Light Transmission', value: '≥90', unit: '%', method: 'ASTM D1003' },
          { name: '折射率', nameEn: 'Diffusion', value: '≤15', unit: '%', method: 'ASTM D1003' },
          { name: 'UV透過率(300~390nm)', nameEn: 'UV Transmission', value: '10~30', unit: '%', method: '' }
        ]
      },
      {
        category: '使用壽命',
        items: [
          { name: '耐用年限', nameEn: 'Lifetime', value: '2', unit: '年', method: '' }
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-0.20mm'
  },
  {
    id: 'product-waterproof',
    name: 'BL6050 軟質不透水布',
    thickness: '多種規格',
    description: 'LDPE/EVA/LLDPE此配方所形成的物性，仍保有良好的機械強度，但比HDPE更有彈性及柔軟度，比較容易施工，適用於灌溉用之蓄水池、灌溉水道之裡襯、水產養殖之內襯等。',
    features: [
      '良好的機械強度',
      '比HDPE更有彈性',
      '柔軟度佳',
      '容易施工',
      '適用範圍廣泛'
    ],
    applications: [
      '灌溉用蓄水池',
      '灌溉水道裡襯',
      '水產養殖內襯'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'product-waterproof'
  }
]

// 進化歷程
export const TIMELINE = [
  {
    year: '1996-1999',
    title: '推出TUV3750AF',
    description: '開始生產高品質農膜'
  },
  {
    year: '2000-2003',
    title: '推出TUV3755AF',
    description: '技術升級，品質提升'
  },
  {
    year: '2004-2007',
    title: '推出UV2794AD',
    description: '新一代產品問世'
  },
  {
    year: '2008-2011',
    title: '推出UV2794ADAS',
    description: '持續創新研發'
  },
  {
    year: '2012-2015',
    title: '推出UV2798AD 降溫膜',
    description: '推出降溫功能膜'
  },
  {
    year: '2016-2019',
    title: '推出UV2892AD 超韌性膜布',
    description: '超韌性材質突破'
  },
  {
    year: '2020~',
    title: '推出UV2992AD-S 0.2mm 超透膜',
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
      { name: 'UV2892AD-S/0.10mm超透膜', path: '/products/product-0.10mm' },
      { name: 'UV2892AD-S/0.15mm超透膜', path: '/products/product-0.15mm' },
      { name: 'UV2992AD-S/0.20mm超透膜', path: '/products/product-0.20mm' },
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

