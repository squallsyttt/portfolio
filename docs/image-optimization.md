# 图片优化指南

本项目使用 Next.js 自动图片优化，无需手动压缩即可节省 60-80% 流量成本。

## 🎯 **主要优化方案：Next.js 自动优化（推荐）**

Next.js 会自动为每个用户生成最优的图片版本，比手动压缩更智能。

## 🚀 快速开始

### 1. 使用优化后的图片组件

项目提供了三个优化的图片组件：

#### `OptimizedImage` - 通用图片组件
```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";

<OptimizedImage
  src="/images/example.jpg"
  alt="示例图片"
  width={800}
  height={600}
  quality={75}
/>
```

#### `BlogCoverImage` - 博客封面图专用
```tsx
import { BlogCoverImage } from "@/components/ui/optimized-image";

<BlogCoverImage
  src="/images/blog/cover.jpg"
  alt="博客封面"
/>
```

#### `AvatarImage` - 头像专用
```tsx
import { AvatarImage } from "@/components/ui/optimized-image";

<AvatarImage
  src="/images/avatar.jpg"
  alt="用户头像"
  size={128}
/>
```

### 2. 图片压缩脚本（可选）

> **注意**：Next.js 自动优化已经足够强大，通常不需要手动压缩。
> 压缩脚本仅在以下情况使用：
> - 需要在其他项目中使用图片
> - 想要预览压缩效果
> - 存储空间有限时减少原图大小

```bash
# 可选：手动压缩图片（Next.js 自动优化更好）
npm run optimize-images public/images
npm run optimize-blog-images
```

## ⚙️ 优化配置

### Next.js 配置 (next.config.ts)

项目已配置以下优化选项：

- **格式转换**: 自动转换为 WebP 和 AVIF 格式
- **质量设置**: 默认 75% 质量（平衡质量与大小）
- **响应式尺寸**: 支持多种设备尺寸
- **延迟加载**: 自动启用图片懒加载

### 压缩脚本配置

压缩脚本默认配置：
- **质量**: 80%
- **最大尺寸**: 1920x1080
- **输出格式**: WebP, AVIF, JPEG

## 📊 优化效果

使用本方案可以获得：

1. **文件大小减少 60-80%**
   - WebP 格式比 JPEG 小 25-35%
   - AVIF 格式比 JPEG 小 50-60%

2. **加载速度提升**
   - 响应式图片适配不同设备
   - 延迟加载减少初始页面加载时间
   - Next.js 自动生成多种尺寸

3. **Vercel 流量成本降低**
   - 显著减少图片传输流量
   - 智能缓存机制

## 🎯 最佳实践

### 1. 博客封面图
- 使用 `BlogCoverImage` 组件
- 推荐尺寸：1200x630 (Twitter Card 标准)
- 压缩后上传

### 2. 头像图片  
- 使用 `AvatarImage` 组件
- 推荐尺寸：256x256 或更高
- 质量设置 90%

### 3. 内容图片
- 使用 `OptimizedImage` 组件
- 根据使用场景设置合适的 `sizes` 属性
- 重要图片设置 `priority={true}`

### 4. 图片命名规范
```
public/images/
├── blog/           # 博客相关图片
│   ├── covers/     # 封面图
│   └── content/    # 内容图片
├── backgrounds/    # 背景图片
└── avatars/       # 头像图片
```

## 🔧 故障排除

### 常见问题

1. **图片不显示**
   - 检查图片路径是否正确
   - 确保图片在 `public` 目录下

2. **压缩失败**
   - 确保图片格式支持 (JPG, PNG, TIFF)
   - 检查图片文件是否损坏

3. **Vercel 部署后图片显示异常**
   - 检查 `next.config.ts` 中的 `images` 配置
   - 确保使用了 Next.js Image 组件

### 性能监控

在 Vercel Dashboard 中监控：
- 图片优化率
- 流量使用情况  
- Core Web Vitals 指标

## 📈 进阶优化

### 1. 条件加载
```tsx
import { useMediaQuery } from "@/hooks/use-media-query";

const isMobile = useMediaQuery("(max-width: 768px)");

<OptimizedImage
  src={isMobile ? "/images/mobile.jpg" : "/images/desktop.jpg"}
  alt="响应式图片"
  width={isMobile ? 400 : 800}
  height={isMobile ? 300 : 600}
/>
```

### 2. 占位符优化
```tsx
<OptimizedImage
  src="/images/example.jpg"
  alt="示例"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

这样配置后，你的图片将自动优化，显著降低 Vercel 流量成本！