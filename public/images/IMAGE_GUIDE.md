# PEP 網站圖片資源指南

本文件說明網站所需的圖片資源及其規格。

## 圖片目錄結構

```
public/images/
├── logo/              # Logo 圖片
├── icons/             # 圖示
├── factory/           # 工廠圖片
├── products/          # 產品圖片
└── process/           # 製作流程圖片
```

## 需要的圖片清單

### Logo (logo/)
- `pep-logo.png` - 主要 Logo (建議尺寸: 200x60px)

### 圖示 (icons/)
- `line-icon.png` - LINE 圖示 (24x24px)
- `facebook-icon.png` - Facebook 圖示 (24x24px)

### 工廠圖片 (factory/)
- `factory-aerial.jpg` - 工廠空拍圖 (建議尺寸: 1920x1080px)
- `plastika-kritis.jpg` - Plastika Kritis 工廠圖片 (建議尺寸: 800x600px)

### 製作流程圖片 (process/)
- `step-1.jpg` - 工廠 (建議尺寸: 400x400px)
- `step-2.jpg` - 吹膜 (建議尺寸: 400x400px)
- `step-3.jpg` - 多層共擠壓 (建議尺寸: 400x400px)
- `step-4.jpg` - 完成品 (建議尺寸: 400x400px)
- `step-5.jpg` - 使用實景 (建議尺寸: 400x400px)

### 產品圖片 (products/)

每個產品需要以下圖片：

#### 超韌性透明膜 0.10mm (product-010)
- `product-010.jpg` - 主圖 (建議尺寸: 800x800px)
- `product-010-2.jpg` - 輪播圖 2 (建議尺寸: 800x600px)
- `product-010-3.jpg` - 輪播圖 3 (建議尺寸: 800x600px)
- `product-010-gallery-1.jpg` - 畫廊圖 1 (建議尺寸: 600x600px)
- `product-010-gallery-2.jpg` - 畫廊圖 2 (建議尺寸: 600x600px)
- `product-010-gallery-3.jpg` - 畫廊圖 3 (建議尺寸: 600x600px)
- `product-010-gallery-4.jpg` - 畫廊圖 4 (建議尺寸: 600x600px)

#### 超韌性透明膜 0.15mm (product-015)
- `product-015.jpg` - 主圖
- `product-015-2.jpg` - 輪播圖 2
- `product-015-3.jpg` - 輪播圖 3
- `product-015-gallery-1.jpg` - 畫廊圖 1
- `product-015-gallery-2.jpg` - 畫廊圖 2
- `product-015-gallery-3.jpg` - 畫廊圖 3
- `product-015-gallery-4.jpg` - 畫廊圖 4

#### 超韌性透明膜 0.20mm (product-020)
- `product-020.jpg` - 主圖
- `product-020-2.jpg` - 輪播圖 2
- `product-020-3.jpg` - 輪播圖 3
- `product-020-gallery-1.jpg` - 畫廊圖 1
- `product-020-gallery-2.jpg` - 畫廊圖 2
- `product-020-gallery-3.jpg` - 畫廊圖 3
- `product-020-gallery-4.jpg` - 畫廊圖 4

#### 軟質不透水布 (product-waterproof)
- `product-waterproof.jpg` - 主圖
- `product-waterproof-2.jpg` - 輪播圖 2
- `product-waterproof-3.jpg` - 輪播圖 3
- `product-waterproof-gallery-1.jpg` - 畫廊圖 1
- `product-waterproof-gallery-2.jpg` - 畫廊圖 2
- `product-waterproof-gallery-3.jpg` - 畫廊圖 3
- `product-waterproof-gallery-4.jpg` - 畫廊圖 4

### 佔位圖片
- `placeholder.jpg` - 通用佔位圖 (目前使用 SVG)

## 圖片規格建議

### 格式
- Logo/圖示：PNG (支援透明背景)
- 照片：JPG (適當壓縮)

### 尺寸建議
- Logo：200x60px
- 圖示：24x24px
- 產品主圖：800x800px (正方形)
- 產品輪播圖：800x600px (4:3)
- 產品畫廊圖：600x600px (正方形)
- 工廠圖片：1920x1080px (16:9) 或 800x600px (4:3)
- 流程圖片：400x400px (正方形)

### 優化建議
- 使用適當的壓縮率（JPG 品質 80-85%）
- 使用 WebP 格式以獲得更好的壓縮率
- 提供不同尺寸的響應式圖片
- 使用圖片 CDN 加速載入

## 替換圖片

要替換圖片，只需：
1. 準備符合規格的圖片
2. 使用相同的檔案名稱
3. 放置到對應的目錄
4. 重新構建專案（`npm run build`）

## 注意事項

- 目前所有圖片都是佔位檔案，需要替換為實際圖片
- 確保圖片版權清晰，避免使用未授權的圖片
- 建議使用專業攝影或高品質的產品照片
- 保持圖片風格一致，符合企業形象

