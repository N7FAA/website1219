# ⚡ 快速部署指南

选择最适合你的部署方式，5 分钟内上线！

## 🎯 方法一：Vercel（最简单，推荐）

### 选项 A：使用网页版（无需安装任何工具）

1. **访问 [vercel.com](https://vercel.com)**
2. **使用 GitHub/GitLab/Bitbucket 账号登录**
3. **点击 "Add New Project"**
4. **导入你的仓库**（如果没有，先推送到 GitHub）
5. **点击 Deploy** - 完成！✨

Vercel 会自动：
- ✅ 检测到这是 Vite 项目
- ✅ 运行 `npm run build`
- ✅ 部署到全球 CDN
- ✅ 提供 HTTPS 和自定义域名

### 选项 B：使用命令行

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 部署（首次会询问配置，直接回车使用默认值）
vercel --prod
```

---

## 🎯 方法二：Netlify（同样简单）

### 选项 A：拖拽部署（最快）

1. **运行构建命令**
   ```bash
   npm run build
   ```

2. **访问 [netlify.com](https://netlify.com)**
3. **登录账号**
4. **将 `dist` 文件夹拖拽到页面**
5. **完成！** ✨

### 选项 B：连接 Git 仓库

1. **访问 [netlify.com](https://netlify.com)**
2. **点击 "Add new site" > "Import an existing project"**
3. **连接你的 Git 仓库**
4. **设置构建选项：**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **点击 Deploy**

---

## 🎯 方法三：GitHub Pages（免费）

### 步骤：

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

2. **在 GitHub 仓库中：**
   - 点击 Settings > Pages
   - Source 选择 "GitHub Actions"
   - 项目已包含自动部署配置，推送代码后会自动部署

3. **访问：** `https://你的用户名.github.io/仓库名`

---

## 📋 部署前必做清单

在部署之前，请确保：

- [ ] 更新 `src/data/projects.ts` - 替换为你的真实项目
- [ ] 修改 `src/components/Hero.tsx` - 更新个人信息
- [ ] 更新 `src/components/Footer.tsx` - 修改联系方式和社交链接
- [ ] 测试所有链接是否有效
- [ ] 运行 `npm run build` 确保构建成功
- [ ] 运行 `npm run preview` 本地预览生产版本

---

## 🔗 部署后

### 获取网站链接

- **Vercel**: 部署完成后会显示链接，格式如 `your-project.vercel.app`
- **Netlify**: 部署完成后会显示链接，格式如 `your-project.netlify.app`
- **GitHub Pages**: `https://你的用户名.github.io/仓库名`

### 自定义域名

所有平台都支持免费自定义域名：

- **Vercel**: 项目设置 > Domains > Add Domain
- **Netlify**: Site settings > Domain management > Add custom domain
- **GitHub Pages**: 仓库设置 > Pages > Custom domain

按照平台提示配置 DNS 记录即可，SSL 证书会自动配置。

---

## 🆘 遇到问题？

### 构建失败
```bash
# 清理并重新安装依赖
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 页面空白
- 检查浏览器控制台错误
- 确认所有资源路径正确
- 检查 `vite.config.ts` 中的 `base` 配置

### 路由 404
- 确保部署平台配置了 SPA 路由重定向
- Vercel 和 Netlify 已自动配置
- GitHub Pages 需要确保使用 GitHub Actions 部署

---

## 📚 详细文档

需要更多信息？查看 [DEPLOY.md](./DEPLOY.md) 获取完整的部署指南。

祝你部署顺利！🎉

