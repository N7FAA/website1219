#!/bin/bash

# Vercel 快速部署脚本

echo "🚀 开始部署到 Vercel..."

# 检查是否安装了 vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 正在安装 Vercel CLI..."
    npm install -g vercel
fi

# 构建项目
echo "🔨 正在构建项目..."
npm run build

# 部署
echo "🌐 正在部署..."
vercel --prod

echo "✅ 部署完成！"

