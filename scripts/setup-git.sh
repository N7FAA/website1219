#!/bin/bash

# Git 仓库设置脚本

echo "🚀 开始设置 Git 仓库..."

# 检查是否已初始化
if [ -d ".git" ]; then
    echo "⚠️  Git 仓库已存在"
    read -p "是否继续？(y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    # 初始化 Git 仓库
    echo "📦 初始化 Git 仓库..."
    git init
fi

# 检查 Git 配置
echo "🔍 检查 Git 配置..."
if [ -z "$(git config user.name)" ]; then
    echo "⚠️  未配置 Git 用户名"
    read -p "请输入你的名字: " git_name
    git config --global user.name "$git_name"
fi

if [ -z "$(git config user.email)" ]; then
    echo "⚠️  未配置 Git 邮箱"
    read -p "请输入你的邮箱: " git_email
    git config --global user.email "$git_email"
fi

# 添加文件
echo "📝 添加文件到 Git..."
git add .

# 显示状态
echo ""
echo "📋 将要提交的文件："
git status --short

echo ""
read -p "是否创建初始提交？(y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git commit -m "Initial commit: Portfolio website"
    echo "✅ 初始提交已创建"
else
    echo "⏭️  跳过提交"
fi

# 设置主分支
git branch -M main

echo ""
echo "✅ Git 仓库设置完成！"
echo ""
echo "📝 下一步："
echo "1. 在 GitHub/GitLab 创建远程仓库"
echo "2. 运行以下命令连接远程仓库："
echo ""
echo "   git remote add origin https://github.com/你的用户名/仓库名.git"
echo "   git push -u origin main"
echo ""
echo "或查看 GIT_SETUP.md 获取详细说明"

