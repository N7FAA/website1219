# 🚀 Vercel 部署完整指南

本指南将帮助你一步步将作品集网站部署到 Vercel。

## ✨ 为什么选择 Vercel？

- ✅ **零配置**：自动检测 Vite 项目
- ✅ **全球 CDN**：速度极快
- ✅ **自动 HTTPS**：免费 SSL 证书
- ✅ **自动部署**：每次推送代码自动更新
- ✅ **预览部署**：每个 Pull Request 都有预览链接
- ✅ **免费额度**：个人项目完全免费

---

## 📋 方法一：网页版部署（推荐，最简单）

### 步骤 1：访问 Vercel

1. 打开浏览器，访问：**https://vercel.com**
2. 点击右上角 **"Sign Up"** 或 **"Log In"**

### 步骤 2：使用 GitHub 登录

1. 选择 **"Continue with GitHub"**
2. 授权 Vercel 访问你的 GitHub 账号
3. 允许访问仓库权限（需要访问 `website1219` 仓库）

### 步骤 3：导入项目

1. 登录后，点击 **"Add New..."** > **"Project"**
2. 在仓库列表中找到 **`N7FAA/website1219`**
3. 点击 **"Import"**

### 步骤 4：配置项目（通常自动检测）

Vercel 会自动检测到这是 Vite 项目，配置如下：

- **Framework Preset**: Vite（自动）
- **Root Directory**: `./`（默认）
- **Build Command**: `npm run build`（自动）
- **Output Directory**: `dist`（自动）
- **Install Command**: `npm install`（自动）

**通常不需要修改任何设置，直接点击 "Deploy" 即可！**

### 步骤 5：等待部署

1. 点击 **"Deploy"** 按钮
2. 等待 1-2 分钟，Vercel 会：
   - 安装依赖
   - 构建项目
   - 部署到全球 CDN

### 步骤 6：完成！

部署成功后，你会看到：
- ✅ **生产环境 URL**：`https://website1219-xxx.vercel.app`
- ✅ **部署日志**：查看构建过程
- ✅ **项目仪表板**：管理你的项目

---

## 📋 方法二：使用 Vercel CLI（命令行）

如果你喜欢使用命令行：

### 步骤 1：安装 Vercel CLI

```bash
npm install -g vercel
```

### 步骤 2：登录

```bash
vercel login
```

会打开浏览器完成登录。

### 步骤 3：部署

```bash
# 在项目目录下运行
cd /Users/n7smac/Cursor
vercel
```

首次部署会询问：
- **Set up and deploy?** → 输入 `Y`
- **Which scope?** → 选择你的账号
- **Link to existing project?** → 输入 `N`（首次）
- **Project name?** → 输入 `website1219` 或直接回车
- **Directory?** → 直接回车（使用当前目录）
- **Override settings?** → 直接回车（使用默认）

### 步骤 4：生产环境部署

```bash
vercel --prod
```

---

## 🔧 项目配置说明

你的项目已经包含 `vercel.json` 配置文件：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

这个配置确保：
- ✅ 正确的构建命令
- ✅ 正确的输出目录
- ✅ SPA 路由正常工作（所有路由指向 index.html）

---

## 🌐 自定义域名

### 添加自定义域名

1. 在 Vercel 项目页面，点击 **"Settings"** > **"Domains"**
2. 输入你的域名（如：`yourname.com`）
3. 按照提示配置 DNS 记录：
   - 添加 CNAME 记录指向 Vercel
   - 或添加 A 记录指向 Vercel IP
4. Vercel 会自动配置 SSL 证书（通常几分钟内完成）

### DNS 配置示例

**使用 CNAME（推荐）**：
```
类型: CNAME
名称: @ 或 www
值: cname.vercel-dns.com
```

**使用 A 记录**：
```
类型: A
名称: @
值: 76.76.21.21
```

---

## 🔄 自动部署

### 已配置自动部署

一旦连接 GitHub 仓库，Vercel 会自动：

1. **主分支推送** → 自动部署到生产环境
2. **Pull Request** → 自动创建预览部署
3. **分支推送** → 自动创建预览部署

### 查看部署

- 在 Vercel 项目页面查看所有部署
- 每个部署都有独立的 URL
- 可以回滚到之前的版本

---

## 📊 部署后检查清单

部署成功后，检查以下内容：

- [ ] 网站可以正常访问
- [ ] 所有页面路由正常工作
- [ ] 图片正常加载
- [ ] 动画效果流畅
- [ ] 移动端显示正常
- [ ] 项目卡片点击功能正常
- [ ] 视频模态框正常工作

---

## 🎨 环境变量（如果需要）

如果你的项目需要环境变量：

1. 在 Vercel 项目页面，点击 **"Settings"** > **"Environment Variables"**
2. 添加变量：
   - **Name**: `VITE_API_URL`（示例）
   - **Value**: `https://api.example.com`
   - **Environment**: Production, Preview, Development
3. 重新部署以应用更改

---

## 🔍 查看部署日志

如果部署失败：

1. 在 Vercel 项目页面，点击失败的部署
2. 查看 **"Build Logs"** 了解错误原因
3. 常见问题：
   - 依赖安装失败 → 检查 `package.json`
   - 构建错误 → 检查代码错误
   - 路径问题 → 检查 `vite.config.ts`

---

## 🆘 常见问题

### 问题：部署后页面空白

**解决**：
- 检查浏览器控制台错误
- 确认所有资源路径正确
- 检查 `vite.config.ts` 中的 `base` 配置

### 问题：路由 404

**解决**：
- 确认 `vercel.json` 中的 `rewrites` 配置正确
- 所有路由应该指向 `/index.html`

### 问题：构建失败

**解决**：
```bash
# 本地测试构建
npm run build

# 检查错误
npm run build 2>&1 | tee build.log
```

### 问题：图片不显示

**解决**：
- 检查图片 URL 是否可访问
- 考虑使用 Vercel 的图片优化功能
- 或使用 CDN（如 Cloudinary）

---

## 📈 性能优化

### Vercel 自动优化

- ✅ 自动代码分割
- ✅ 自动压缩
- ✅ 全球 CDN 分发
- ✅ 自动 HTTPS
- ✅ 边缘缓存

### 进一步优化建议

1. **图片优化**：使用 WebP 格式
2. **代码分割**：已配置手动代码分割
3. **懒加载**：图片已使用懒加载
4. **缓存策略**：Vercel 自动处理

---

## 🔗 相关链接

- **Vercel 文档**：https://vercel.com/docs
- **Vite 部署指南**：https://vitejs.dev/guide/static-deploy.html
- **你的项目**：https://github.com/N7FAA/website1219

---

## ✅ 快速开始命令

如果你想使用 CLI：

```bash
# 安装 CLI
npm install -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

---

祝你部署顺利！🎉

部署完成后，你的网站就可以通过 Vercel 提供的 URL 访问了！

