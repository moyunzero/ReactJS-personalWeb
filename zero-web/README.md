# 个人网站项目

基于 React 18 和 Vite 构建的现代化个人网站，展示作品集、博客和个人技能。

## 技术栈

- React 18
- Vite
- React Router
- TailwindCSS
- GSAP (动画)
- Lenis (平滑滚动)

## 项目结构

```
zero-web/
├── src/
│   ├── assets/            # 静态资源
│   ├── components/        # 组件目录
│   │   ├── common/       # 公共组件
│   │   └── home/         # 页面组件
│   ├── constants/        # 常量配置
│   │   └── styles.js     # 样式常量
│   ├── hooks/            # 自定义 Hooks
│   │   ├── useScrollToTop.js
│   │   └── useMediaQuery.js
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面组件
│   ├── routes/           # 路由配置
│   ├── utils/            # 工具函数
│   ├── App.jsx          # 应用入口
│   └── main.jsx         # 主入口文件
```

## 特性

- 🚀 基于 Vite 的快速开发体验
- 📱 响应式设计，适配多端
- 🎨 现代化的 UI 设计
- ⚡️ 优化的性能表现
- 🔍 SEO 友好
- 🛠 完善的开发工具链

## 开始使用

1. 克隆项目
```bash
git clone [repository-url]
cd zero-web
```

2. 安装依赖
```bash
yarn install
```

3. 开发环境运行
```bash
yarn dev
```

4. 生产环境构建
```bash
yarn build
```

## 环境变量配置

在项目根目录创建 `.env` 文件：

```env
VITE_API_URL=http://localhost:3000
VITE_ENV=development
VITE_APP_TITLE=个人网站
VITE_APP_DESCRIPTION=展示作品、博客和技能的个人网站
```

## 开发指南

### 组件开发
- 使用函数组件和 Hooks
- 遵循 React 最佳实践
- 使用 PropTypes 进行类型检查
- 组件文件使用 JSX 扩展名

### 样式开发
- 使用 TailwindCSS 进行样式开发
- 遵循 BEM 命名规范
- 使用 constants/styles.js 中的预定义样式

### 工具函数
- 使用 utils 目录中的防抖和节流函数
- 遵循函数式编程原则
- 使用 JSDoc 注释

## 部署

1. 构建项目
```bash
yarn build
```

2. 将 `dist` 目录部署到服务器

## 许可证

MIT
