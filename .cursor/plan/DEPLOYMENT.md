# PEP 網站部署指南

本文件說明如何部署 PEP 網站到生產環境。

## 構建專案

### 1. 安裝依賴
```bash
npm install
```

### 2. 構建生產版本
```bash
npm run build
```

構建完成後，所有檔案會輸出到 `dist/` 目錄。

### 3. 預覽構建結果
```bash
npm run preview
```

## 部署選項

### 選項 1: Netlify

1. 註冊 [Netlify](https://www.netlify.com/) 帳號
2. 連接 Git 倉庫或直接拖放 `dist/` 資料夾
3. 設定構建命令：
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 配置重定向規則（`netlify.toml`）：

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 選項 2: Vercel

1. 註冊 [Vercel](https://vercel.com/) 帳號
2. 導入 Git 倉庫
3. Vercel 會自動偵測 Vite 專案
4. 部署完成

### 選項 3: GitHub Pages

1. 在 `vite.config.js` 中設定 base：
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. 建立 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 選項 4: 傳統主機（FTP/SFTP）

1. 構建專案：`npm run build`
2. 將 `dist/` 目錄內的所有檔案上傳到主機
3. 確保伺服器配置正確的路由規則

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 環境變數

如果需要使用環境變數，建立 `.env.production`：

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=info@super-pep.com.tw
```

## 效能優化檢查清單

- [ ] 圖片已優化壓縮
- [ ] 使用 WebP 格式（如可能）
- [ ] 啟用 Gzip/Brotli 壓縮
- [ ] 設定適當的 Cache-Control headers
- [ ] 使用 CDN 加速靜態資源
- [ ] 檢查 Lighthouse 分數
- [ ] 測試不同裝置與瀏覽器

## SEO 優化

### 1. 更新 meta tags
在 `index.html` 中更新：
- Title
- Description
- Keywords
- Open Graph tags

### 2. 建立 sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://super-pep.com.tw/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://super-pep.com.tw/products</loc>
    <priority>0.8</priority>
  </url>
  <!-- 其他頁面 -->
</urlset>
```

### 3. 建立 robots.txt
```
User-agent: *
Allow: /
Sitemap: https://super-pep.com.tw/sitemap.xml
```

## 監控與分析

建議整合以下工具：
- Google Analytics
- Google Search Console
- Facebook Pixel（如需要）

## 安全性

- [ ] 啟用 HTTPS
- [ ] 設定 Content Security Policy
- [ ] 定期更新依賴套件
- [ ] 檢查安全漏洞：`npm audit`

## 備份

定期備份：
- 原始碼（Git）
- 圖片資源
- 構建檔案

## 故障排除

### 路由 404 錯誤
確保伺服器配置了正確的重定向規則（見上方）。

### 圖片無法顯示
檢查圖片路徑是否正確，確保圖片已上傳到正確位置。

### CSS/JS 無法載入
檢查 `vite.config.js` 中的 `base` 設定是否正確。

## 聯絡資訊

如有部署問題，請聯繫：
- 電話：06-2519898
- 傳真：06-2519797

