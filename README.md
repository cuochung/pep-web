# PEP利得膜 官方網站

專業農膜製造商的現代化網站，採用 Vue 3 + Vite 架構開發。

## 專案特色

- ✨ 現代化設計，企業專業風格
- 📱 完整響應式設計（RWD）
- 🎨 豐富的動畫效果與互動功能
- ⚡ Vite 快速開發與構建
- 🎯 Vue 3 Composition API
- 🧩 組件化架構，易於維護
- 🚀 效能優化（程式碼分割、懶加載）

## 技術棧

- **前端框架**: Vue 3
- **構建工具**: Vite
- **路由管理**: Vue Router 4
- **樣式**: CSS3 (CSS Variables, Flexbox, Grid)
- **JavaScript**: ES6+

## 專案結構

```
pep/
├── public/              # 靜態資源
│   └── images/         # 圖片資源
├── src/
│   ├── assets/         # 資源檔案
│   │   └── styles/    # 樣式檔案
│   ├── components/     # Vue 組件
│   │   ├── common/    # 共通組件
│   │   ├── home/      # 首頁組件
│   │   ├── products/  # 產品組件
│   │   └── forms/     # 表單組件
│   ├── views/          # 頁面視圖
│   ├── router/         # 路由配置
│   ├── composables/    # 可重用邏輯
│   ├── utils/          # 工具函數
│   ├── App.vue         # 根組件
│   └── main.js         # 入口檔案
├── index.html
├── vite.config.js      # Vite 配置
└── package.json
```

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開發伺服器將在 http://localhost:3000 啟動

### 生產構建

```bash
npm run build
```

構建檔案將輸出到 `dist/` 目錄

### 預覽構建結果

```bash
npm run preview
```

## 頁面結構

- **首頁** (`/`) - 公司介紹、進化歷程、製作流程
- **產品系列** (`/products`) - 產品列表與詳情
  - 超韌性透明膜 0.10mm
  - 超韌性透明膜 0.15mm
  - 超韌性透明膜 0.20mm
  - 軟質不透水布
- **產品保固** (`/warranty`) - 保固政策與條款
- **認識農膜** (`/agricultural-film`) - 農膜知識
  - 光的影響
  - 農膜種類
  - 注意事項
- **聯絡我們** (`/contact`) - 聯絡資訊與表單

## 功能特色

### 響應式設計
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 動畫效果
- 頁面載入動畫
- 滾動觸發動畫（Scroll Reveal）
- Vue Transition 過渡效果
- 懸停動畫效果

### 互動功能
- 響應式導航選單
- 產品圖片輪播
- 燈箱效果
- 表單驗證
- 平滑滾動
- 返回頂部按鈕

### 效能優化
- 程式碼分割
- 路由懶加載
- 圖片懶加載
- Tree-shaking
- 壓縮與最小化

## 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 開發規範

### CSS 變數
所有顏色、間距、字體等設計規範都定義在 `src/assets/styles/variables.css` 中。

### 組件命名
- 使用 PascalCase 命名組件檔案
- 組件名稱應具描述性

### 程式碼風格
- 使用 ES6+ 語法
- 使用 Composition API
- 保持組件單一職責

## 部署

### 靜態網站託管
構建後的 `dist/` 目錄可以部署到任何靜態網站託管服務：

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### 部署步驟
1. 執行 `npm run build`
2. 將 `dist/` 目錄內容上傳到託管服務
3. 配置路由重定向（SPA 模式）

## 維護與更新

### 內容更新
- 產品資訊：修改 `src/utils/constants.js`
- 圖片：替換 `public/images/` 中的檔案
- 樣式：修改 `src/assets/styles/` 中的 CSS 檔案

### 功能擴充
- 新增頁面：在 `src/views/` 建立組件並更新路由
- 新增組件：在 `src/components/` 建立可重用組件
- 新增功能：在 `src/composables/` 建立可重用邏輯

## 聯絡資訊

**蘇沛實業有限公司**
- 電話：06-2519898
- 傳真：06-2519797

## 授權

© 2024 蘇沛實業有限公司. All rights reserved.
