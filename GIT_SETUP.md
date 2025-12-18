# 📦 Git 仓库设置指南

本指南将帮助你将本地项目导入到 Git 仓库（GitHub/GitLab/Bitbucket）。

## 🚀 快速开始

### 方法一：使用提供的脚本（推荐）

运行以下命令，脚本会自动完成所有步骤：

```bash
bash scripts/setup-git.sh
```

### 方法二：手动操作

按照下面的步骤手动操作。

---

## 📝 步骤详解

### 步骤 1：初始化 Git 仓库

```bash
git init
```

### 步骤 2：添加文件到 Git

```bash
# 添加所有文件（.gitignore 会自动排除不需要的文件）
git add .

# 查看将要提交的文件
git status
```

### 步骤 3：创建初始提交

```bash
git commit -m "Initial commit: Portfolio website"
```

### 步骤 4：在 GitHub/GitLab 创建远程仓库

#### GitHub：
1. 访问 [github.com](https://github.com)
2. 点击右上角 "+" > "New repository"
3. 输入仓库名称（如：`portfolio-website`）
4. 选择 Public 或 Private
5. **不要**勾选 "Initialize with README"（因为本地已有文件）
6. 点击 "Create repository"

#### GitLab：
1. 访问 [gitlab.com](https://gitlab.com)
2. 点击 "New project" > "Create blank project"
3. 输入项目名称
4. 选择可见性
5. 点击 "Create project"

### 步骤 5：连接远程仓库

复制远程仓库的 URL（HTTPS 或 SSH），然后运行：

```bash
# 使用 HTTPS（推荐新手）
git remote add origin https://github.com/你的用户名/仓库名.git

# 或使用 SSH（如果已配置 SSH 密钥）
git remote add origin git@github.com:你的用户名/仓库名.git
```

### 步骤 6：推送代码

```bash
# 设置主分支名称
git branch -M main

# 推送代码到远程仓库
git push -u origin main
```

---

## 🔐 身份配置（首次使用 Git）

如果是第一次使用 Git，需要先配置身份信息：

```bash
# 设置用户名
git config --global user.name "你的名字"

# 设置邮箱
git config --global user.email "your.email@example.com"
```

---

## 📋 常用 Git 命令

### 查看状态
```bash
git status
```

### 查看更改
```bash
git diff
```

### 添加文件
```bash
# 添加所有更改
git add .

# 添加特定文件
git add src/components/Hero.tsx
```

### 提交更改
```bash
git commit -m "描述你的更改"
```

### 推送更改
```bash
git push
```

### 拉取最新代码
```bash
git pull
```

### 查看提交历史
```bash
git log
```

---

## 🔄 后续更新流程

每次修改代码后，使用以下流程：

```bash
# 1. 查看更改
git status

# 2. 添加更改
git add .

# 3. 提交更改
git commit -m "更新项目数据"

# 4. 推送到远程
git push
```

---

## 🆘 常见问题

### 问题：推送时要求输入用户名密码

**解决**：
- 使用 Personal Access Token（GitHub）或 Access Token（GitLab）
- 或配置 SSH 密钥（推荐）

### 问题：远程仓库已存在文件

**解决**：
```bash
# 先拉取远程文件
git pull origin main --allow-unrelated-histories

# 解决冲突后推送
git push -u origin main
```

### 问题：忘记添加 .gitignore

**解决**：
```bash
# 如果已经提交了 node_modules，需要先移除
git rm -r --cached node_modules
git commit -m "Remove node_modules from git"
```

---

## 🔗 连接到部署平台

代码推送到 Git 后，可以：

1. **Vercel/Netlify**：直接导入 Git 仓库，自动部署
2. **GitHub Pages**：在仓库设置中启用 Pages

---

## 📚 下一步

代码推送成功后，查看：
- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - 快速部署指南
- [DEPLOY.md](./DEPLOY.md) - 详细部署文档

祝你使用愉快！🎉

