# 🚀 网站部署指南

本指南提供了多种将你的作品集网站部署到线上的方法。

## 📦 构建生产版本

在部署之前，先确保构建成功：

```bash
npm run build
```

构建完成后，`dist` 目录包含了所有需要部署的文件。

---

## 方法一：Vercel 部署（推荐 ⭐）

Vercel 是最简单快速的部署方式，特别适合 React 项目。

### 步骤：

1. **安装 Vercel CLI**（可选，也可以直接使用网页版）
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```
   或者直接访问 [vercel.com](https://vercel.com)，导入你的 Git 仓库。

4. **自动部署**
   - 连接 GitHub/GitLab/Bitbucket 仓库后
   - 每次推送到主分支会自动部署
   - 每个 Pull Request 会生成预览链接

### 优势：
- ✅ 零配置，自动识别 Vite 项目
- ✅ 全球 CDN，速度极快
- ✅ 自动 HTTPS
- ✅ 免费自定义域名
- ✅ 自动部署预览

---

## 方法二：Netlify 部署

Netlify 也是一个优秀的静态网站托管平台。

### 步骤：

1. **安装 Netlify CLI**（可选）
   ```bash
   npm i -g netlify-cli
   ```

2. **登录 Netlify**
   ```bash
   netlify login
   ```

3. **部署项目**
   ```bash
   netlify deploy --prod
   ```
   或者访问 [netlify.com](https://netlify.com)，拖拽 `dist` 文件夹到网页。

4. **连接 Git 仓库**
   - 在 Netlify 控制台连接你的仓库
   - 设置构建命令：`npm run build`
   - 设置发布目录：`dist`
   - 每次推送代码会自动部署

### 优势：
- ✅ 简单易用
- ✅ 免费 SSL 证书
- ✅ 表单处理功能
- ✅ 边缘函数支持

---

## 方法三：GitHub Pages 部署

适合想要使用 GitHub 免费托管的情况。

### 步骤：

1. **更新 vite.config.ts**
   
   如果你的仓库名不是 `username.github.io`，需要设置 base：
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```

2. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

3. **启用 GitHub Actions**
   - 项目已包含 `.github/workflows/deploy.yml`
   - 推送代码后会自动构建和部署
   - 在仓库 Settings > Pages 中启用 GitHub Pages

4. **手动部署**（如果不想用 Actions）
   ```bash
   npm run build
   cd dist
   git init
   git add .
   git commit -m "Deploy"
   git branch -M gh-pages
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin gh-pages
   ```

### 优势：
- ✅ 完全免费
- ✅ 与 GitHub 集成
- ✅ 版本控制

---

## 方法四：Cloudflare Pages

Cloudflare 提供全球 CDN 和快速部署。

### 步骤：

1. 访问 [pages.cloudflare.com](https://pages.cloudflare.com)
2. 连接你的 Git 仓库
3. 设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
4. 点击部署

### 优势：
- ✅ 全球 CDN
- ✅ 无限带宽
- ✅ 快速部署

---

## 方法五：传统服务器部署

如果你有自己的服务器（VPS、云服务器等）。

### 步骤：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传 dist 目录**
   使用 FTP、SCP 或 rsync 将 `dist` 目录上传到服务器：
   ```bash
   scp -r dist/* user@your-server.com:/var/www/html/
   ```

3. **配置 Nginx**（示例）
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **配置 SSL**（使用 Let's Encrypt）
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 🔧 部署前检查清单

- [ ] 更新 `src/data/projects.ts` 中的项目数据
- [ ] 修改 `src/components/Hero.tsx` 中的个人信息
- [ ] 更新 `src/components/Footer.tsx` 中的联系方式
- [ ] 检查所有链接是否有效
- [ ] 测试视频链接是否可播放
- [ ] 运行 `npm run build` 确保构建成功
- [ ] 使用 `npm run preview` 本地预览生产版本

---

## 🌐 自定义域名

### Vercel
1. 在项目设置中添加域名
2. 按照提示配置 DNS 记录
3. 自动配置 SSL 证书

### Netlify
1. 在 Domain settings 中添加自定义域名
2. 配置 DNS 记录
3. 自动获取 SSL 证书

### GitHub Pages
1. 在仓库 Settings > Pages 中添加自定义域名
2. 在域名提供商处配置 CNAME 记录
3. GitHub 会自动配置 SSL

---

## 📊 性能优化建议

部署后可以进一步优化：

1. **图片优化**
   - 使用 WebP 格式
   - 压缩图片大小
   - 考虑使用 CDN（如 Cloudinary）

2. **代码分割**
   - 已配置手动代码分割
   - 考虑使用 React.lazy() 进行路由级代码分割

3. **缓存策略**
   - 静态资源设置长期缓存
   - HTML 文件不缓存

4. **监控和分析**
   - 添加 Google Analytics
   - 使用 Vercel Analytics 或类似工具

---

## 🆘 常见问题

### 问题：页面刷新后 404
**解决**：确保配置了 SPA 路由重定向（所有路由指向 index.html）

### 问题：资源路径错误
**解决**：检查 `vite.config.ts` 中的 `base` 配置

### 问题：构建失败
**解决**：
- 检查 Node.js 版本（推荐 18+）
- 删除 `node_modules` 和 `package-lock.json`，重新安装
- 检查 TypeScript 错误

---

## 📞 需要帮助？

如果遇到部署问题，可以：
1. 查看对应平台的文档
2. 检查构建日志
3. 在本地运行 `npm run preview` 测试生产版本

祝你部署顺利！🎉

