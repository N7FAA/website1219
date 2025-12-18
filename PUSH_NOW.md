# 🚀 立即推送代码到 GitHub

你的远程仓库已连接：`https://github.com/N7FAA/website1219.git`

现在需要身份验证才能推送。有两种方法：

---

## 方法一：使用 Personal Access Token（推荐，最简单）

### 步骤 1：创建 Personal Access Token

1. 访问 GitHub：https://github.com/settings/tokens
2. 点击 **"Generate new token"** > **"Generate new token (classic)"**
3. 填写信息：
   - **Note**: `Portfolio Website Push`（任意描述）
   - **Expiration**: 选择有效期（建议 90 天或 No expiration）
   - **Select scopes**: 勾选 **`repo`**（完整仓库权限）
4. 点击 **"Generate token"**
5. **重要**：立即复制 token（只显示一次！）
   - 类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 步骤 2：使用 Token 推送

在终端运行：

```bash
git push -u origin main
```

当提示时：
- **Username**: 输入你的 GitHub 用户名（`N7FAA`）
- **Password**: 粘贴刚才复制的 token（不是你的 GitHub 密码！）

---

## 方法二：配置 SSH 密钥（更安全，一劳永逸）

### 步骤 1：生成 SSH 密钥

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

按提示操作：
- 直接回车使用默认路径：`~/.ssh/id_ed25519`
- 设置密码（可选，建议设置）

### 步骤 2：启动 SSH agent 并添加密钥

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### 步骤 3：复制公钥

```bash
cat ~/.ssh/id_ed25519.pub
```

复制输出的内容（以 `ssh-ed25519` 开头）

### 步骤 4：添加到 GitHub

1. 访问：https://github.com/settings/keys
2. 点击 **"New SSH key"**
3. 填写：
   - **Title**: `My Portfolio Website`（任意名称）
   - **Key**: 粘贴刚才复制的公钥
4. 点击 **"Add SSH key"**

### 步骤 5：改用 SSH URL 并推送

```bash
# 更改远程 URL 为 SSH
git remote set-url origin git@github.com:N7FAA/website1219.git

# 推送代码
git push -u origin main
```

---

## 🎯 快速命令（推荐使用方法一）

如果你选择方法一（Personal Access Token），直接运行：

```bash
git push -u origin main
```

然后输入：
- Username: `N7FAA`
- Password: 你的 Personal Access Token

---

## ✅ 推送成功后

推送成功后，访问 https://github.com/N7FAA/website1219 查看你的代码！

然后可以：
1. **部署到 Vercel**：导入 GitHub 仓库，自动部署
2. **部署到 Netlify**：连接 GitHub 仓库，自动部署
3. **启用 GitHub Pages**：在仓库设置中启用 Pages

---

## 🆘 遇到问题？

### 问题：仍然要求输入密码

**解决**：确保使用的是 Personal Access Token，不是 GitHub 密码

### 问题：权限被拒绝

**解决**：
- 检查 token 是否有 `repo` 权限
- 检查 SSH 密钥是否正确添加到 GitHub

### 问题：想要保存凭据（避免每次输入）

**解决**：使用 Git Credential Manager 或配置 SSH

---

需要我帮你执行哪个方法？告诉我你的选择！

