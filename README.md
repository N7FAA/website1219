# N7 Design Portfolio

一个现代化的设计师作品集网站，使用 React + TypeScript + Framer Motion 构建。

## ✨ 特性

- 🎨 精美的动态背景效果
- 🎬 视频模态框播放
- 📱 完全响应式设计
- ♿ 可访问性优化（键盘导航、ARIA 标签）
- ⚡ 性能优化（图片懒加载、代码分割）
- 🎭 流畅的动画效果

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

浏览器会自动打开 `http://localhost:3000` 预览网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
├── src/
│   ├── components/      # React 组件
│   │   ├── AmbientBackground.tsx
│   │   ├── VideoModal.tsx
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── Footer.tsx
│   ├── data/           # 数据文件
│   │   └── projects.ts
│   ├── types.ts        # TypeScript 类型定义
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 入口文件
│   └── index.css       # 全局样式
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 🛠️ 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Framer Motion** - 动画库
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库

## 📝 自定义内容

### 修改项目数据

编辑 `src/data/projects.ts` 文件，更新你的项目信息：

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "你的项目标题",
    category: "项目分类",
    image: "项目图片 URL",
    type: "notion", // 或 "video"
    link: "https://your-notion-link.com",
    description: "项目描述"
  },
  // ...
];
```

### 修改个人信息

在 `src/components/Hero.tsx` 和 `src/components/Footer.tsx` 中修改你的个人信息和联系方式。

## 🎨 样式定制

项目使用 Tailwind CSS，你可以在 `tailwind.config.js` 中自定义主题颜色和样式。

## 🚀 部署上线

项目已准备好部署！查看 [DEPLOY.md](./DEPLOY.md) 获取详细的部署指南。

### 快速部署选项：

1. **Vercel**（推荐）- 最简单快速
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify** - 拖拽 dist 文件夹即可
   ```bash
   npm run build
   # 然后访问 netlify.com 上传 dist 文件夹
   ```

3. **GitHub Pages** - 使用 GitHub Actions 自动部署
   - 推送代码到 GitHub
   - 在仓库设置中启用 Pages
   - 自动部署完成

更多部署选项和详细步骤，请查看 [DEPLOY.md](./DEPLOY.md)

## 📄 许可证

MIT

