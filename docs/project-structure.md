以下是可参考的项目结构，创建新的文件或文件夹时参考以下结构，放置在合适的位置。

/nextjs-ai-2025-template
├── app/ # Next.js App Router 根目录
│ ├── layout.tsx # 全局布局（根 Layout，作用于所有页面）
│ ├── page.tsx # 主页（`/` 路由）
│ ├── loading.tsx # 全局 Loading 组件
│ ├── error.tsx # 全局错误处理
│ ├── not-found.tsx # 全局 404 处理
│ ├── api/ # API 路由
│ │ ├── auth/route.ts # `/api/auth` 认证 API
│ │ ├── users/route.ts # `/api/users` 用户 API
│ │ ├── posts/route.ts # `/api/posts` 帖子 API
│ ├── dashboard/ # `/dashboard` 仪表盘
│ │ ├── layout.tsx # 仪表盘子布局（作用于 /dashboard/\*）
│ │ ├── page.tsx # `/dashboard` 主页
│ │ ├── loading.tsx # `/dashboard` 加载状态
│ │ ├── error.tsx # `/dashboard` 错误处理
│ │ ├── analytics/ # `/dashboard/analytics`
│ │ │ ├── page.tsx
│ │ │ ├── loading.tsx
│ │ │ ├── error.tsx
│ ├── settings/ # `/settings` 设置页面
│ │ ├── page.tsx
│ │ ├── layout.tsx
│ │ ├── profile/ # `/settings/profile` 用户信息设置
│ │ │ ├── page.tsx
│ │ │ ├── loading.tsx
│ ├── auth/ # `/auth` 认证页面
│ │ ├── login/ # `/auth/login`
│ │ │ ├── page.tsx
│ │ ├── register/ # `/auth/register`
│ │ │ ├── page.tsx
│ ├── components/ # 复用组件
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── Sidebar.tsx
│ │ ├── Button.tsx
│ ├── hooks/ # 自定义 Hooks
│ │ ├── useAuth.ts
│ │ ├── useTheme.ts
│ ├── utils/ # 工具函数
│ │ ├── fetcher.ts
│ │ ├── formatDate.ts
│ ├── styles/ # 全局样式
│ │ ├── globals.css
│ │ ├── theme.css
│ ├── middleware.ts # 全局中间件（如身份验证）
│ ├── favicon.ico
│ ├── robots.txt
│ ├── sitemap.xml
│ ├── next.config.mjs
│ ├── tsconfig.json
│ ├── package.json
│ ├── .env.local # 环境变量
│ ├── public/ # 静态资源
│ │ ├── images/
│ │ ├── icons/
│ │ ├── fonts/
│ ├── lib/ # 服务器端库
│ │ ├── auth.ts # 认证逻辑（如 JWT、Session）
│ │ ├── db.ts # 数据库连接
│ │ ├── logger.ts # 日志工具
│ ├── prisma/ # 数据库 schema（如果使用 Prisma）
│ │ ├── schema.prisma
│ │ ├── migrations/
