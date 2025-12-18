#!/bin/bash

# Netlify 快速部署脚本

echo "🚀 开始部署到 Netlify..."

# 检查是否安装了 netlify CLI
if ! command -v netlify &> /dev/null; then
    echo "📦 正在安装 Netlify CLI..."
    npm install -g netlify-cli
fi

# 构建项目
echo "🔨 正在构建项目..."
npm run build

# 部署
echo "🌐 正在部署..."
netlify deploy --prod --dir=dist

echo "✅ 部署完成！"

