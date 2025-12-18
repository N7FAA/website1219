# 🚀 推送到 GitHub 快速指南

你的本地 Git 仓库已经准备好了！现在只需要连接到远程仓库并推送代码。

## ✅ 已完成

- ✅ Git 仓库已初始化
- ✅ 所有文件已添加
- ✅ 初始提交已创建
- ✅ 主分支已设置为 `main`

## 📝 下一步：连接到 GitHub

### 步骤 1：在 GitHub 创建仓库

1. 访问 [github.com](https://github.com) 并登录
2. 点击右上角 **"+"** > **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `portfolio-website`（或你喜欢的名字）
   - **Description**: 可选，如 "My design portfolio"
   - **Visibility**: 选择 Public 或 Private
   - ⚠️ **不要**勾选 "Add a README file"（本地已有）
   - ⚠️ **不要**添加 .gitignore 或 license（本地已有）
4. 点击 **"Create repository"**

### 步骤 2：复制仓库 URL

创建后，GitHub 会显示仓库 URL，类似：
- HTTPS: `https://github.com/你的用户名/portfolio-website.git`
- SSH: `git@github.com:你的用户名/portfolio-website.git`

### 步骤 3：连接并推送

在终端运行以下命令（替换为你的实际 URL）：

```bash
# 连接远程仓库（使用 HTTPS）
git remote add origin https://github.com/你的用户名/仓库名.git

# 或使用 SSH（如果已配置 SSH 密钥）
git remote add origin git@github.com:你的用户名/仓库名.git

# 推送到 GitHub
git push -u origin main
```

### 步骤 4：验证

推送成功后，刷新 GitHub 页面，你应该能看到所有文件！

---

## 🔐 首次推送需要身份验证

### 使用 HTTPS（推荐新手）

GitHub 已不再支持密码，需要使用 **Personal Access Token**：

1. **创建 Token**：
   - GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 生成并复制 token

2. **推送时使用**：
   - Username: 你的 GitHub 用户名
   - Password: 粘贴刚才复制的 token

### 使用 SSH（推荐，更安全）

1. **检查是否已有 SSH 密钥**：
   ```bash
   ls -al ~/.ssh
   ```

2. **如果没有，生成新密钥**：
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```

3. **添加到 SSH agent**：
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

4. **复制公钥**：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

5. **添加到 GitHub**：
   - GitHub > Settings > SSH and GPG keys > New SSH key
   - 粘贴公钥内容

6. **使用 SSH URL 连接**：
   ```bash
   git remote set-url origin git@github.com:你的用户名/仓库名.git
   git push -u origin main
   ```

---

## 🎯 一键命令（复制粘贴）

如果你已经创建了 GitHub 仓库，直接运行：

```bash
# 替换 YOUR_USERNAME 和 REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

---

## 📋 后续更新流程

每次修改代码后：

```bash
git add .
git commit -m "描述你的更改"
git push
```

---

## 🔗 部署到 Vercel/Netlify

代码推送到 GitHub 后：

1. **Vercel**：
   - 访问 [vercel.com](https://vercel.com)
   - 导入你的 GitHub 仓库
   - 自动部署完成！

2. **Netlify**：
   - 访问 [netlify.com](https://netlify.com)
   - 连接 GitHub 仓库
   - 设置构建命令：`npm run build`
   - 设置发布目录：`dist`
   - 部署完成！

---

## 🆘 遇到问题？

### 问题：remote origin already exists

**解决**：
```bash
# 查看现有远程仓库
git remote -v

# 删除后重新添加
git remote remove origin
git remote add origin https://github.com/你的用户名/仓库名.git
```

### 问题：推送被拒绝

**解决**：
```bash
# 如果远程仓库有文件，先拉取
git pull origin main --allow-unrelated-histories

# 解决冲突后推送
git push -u origin main
```

### 问题：需要配置 Git 身份

**解决**：
```bash
git config --global user.name "你的名字"
git config --global user.email "your.email@example.com"
```

---

## 📚 更多帮助

- 查看 [GIT_SETUP.md](./GIT_SETUP.md) 获取详细说明
- 查看 [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) 了解部署步骤

祝你使用愉快！🎉

