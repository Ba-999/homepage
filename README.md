# Nexl 个人主页

> 基于 [ZYYO666/homepage](https://github.com/ZYYO666/homepage) 二次改造的个人引导页，已根据本人需求进行了大量定制与功能扩展。

**域名**：[nexl.top](https://nexl.top)

---

## ✨ 特色功能

### 🎨 视觉与交互
- **白天 / 黑夜模式**一键切换
- 多套主题色（基于 CSS 变量），背景模糊与卡片模糊可控
- 卡片化布局，桌面端一行 4 项，移动端自适应一行 2 项 / 一行 1 项
- 加载动画、点击气泡动画、贪吃蛇彩蛋
- 头像 logo + logo 框相对定位 + 渐变文字

### ⌨️ 主页体验增强（自定义新增）
- **打字机效果**：循环展示身份标签（Java Developer / Front-end Learner / Traveler / Dreamer / from Henan）
- **动态时段问候**：根据当前时间自动切换问候语和对应 emoji（凌晨 / 早 / 午 / 下午 / 晚 / 深夜）
- **页脚诗词**：保留本地诗词列表轮换
- **网站运行计时器**：左侧实时显示本站已运行天数 + 精确到秒的时钟（始于 2025.10）

### 🎵 悬浮音乐播放器（新增）
- 极简悬浮胶囊式播放器，基于 `static/music/music.js` 动态注入
- **5 首本地曲目**（兰亭序等），支持封面、标题、LRC 歌词同步滚动
- 鼠标悬浮展开 / 移动端可折叠 / 支持锁定常驻
- 玻璃拟态（backdrop-filter）+ 渐变高亮效果

### 🔗 联系方式卡片
- GitHub、Email、QQ 名片、WeChat 二维码弹窗

---

## 🧠 技术栈

| 类别 | 使用技术 |
|------|---------|
| 前端 | 原生 **HTML / CSS / JavaScript**（无框架、无构建工具） |
| 样式 | CSS 变量主题系统、Flex 布局、`backdrop-filter` 玻璃拟态、CSS 动画 |
| 图标 | SVG 内联图标 + [iconfont](https://www.iconfont.cn/) + [skill-icons](https://github.com/tandpfun/skill-icons) |
| 音频 | 原生 `<audio>` API + 自研 LRC 歌词解析 |
| 统计 | 51.LA 站点统计 SDK |
| 部署 | **Docker + Caddy**（`caddy:alpine` 镜像，自动 HTTPS） |
| 编排 | Docker Compose 一键部署 |

> 整站零后端、零依赖、纯静态，构建产物即源码。

---

## 📁 目录结构

```
homepage/
├── index.html # 主页面（含打字机 / 问候语脚本）
├── Dockerfile # 基于 caddy:alpine 构建
├── docker-compose.yaml # 一键部署编排
├── Caddyfile # Caddy 站点配置
└── static/
 ├── css/ # style.css / root.css 主题样式
 ├── js/script.js # 主交互脚本（贪吃蛇、主题切换、诗词等）
 ├── img/ # 头像 / 背景 / 二维码等
 ├── svg/ # 技能图标、贪吃蛇
 ├── fonts/ # 自定义字体
 └── music/ # 音乐播放器：music.js + 5 首 mp3 + 封面
```

---

## 🚀 快速部署（Docker）

```bash
# 1. 修改 Caddyfile，将 example.com 改成你自己的域名
# 2. 一键启动
docker compose up -d
```

Caddy 会自动申请 SSL 证书并启用 HTTPS、zstd / gzip 压缩。

如果只想本地预览，直接用任意静态服务器打开 `index.html` 即可：

```bash
python -m http.server 8080
# 然后访问 http://localhost:8080
```

---

## 🛠️ 自定义指南

| 想改什么 | 改哪里 |
|----------|--------|
| 主题色 | `static/css/root.css` |
| 全局字体 / 布局 | `static/css/style.css` |
| 网站图标 / 头像 | `static/img/favicon.ico`、`logo.png` |
| 打字机身份标签 | `index.html` 底部 `roles` 数组 |
| 时段问候语 | `index.html` 底部 `greeting` 脚本块 |
| 诗词列表 | `static/js/script.js` |
| 音乐曲目 / 歌词 | `static/music/music.js` 中的 `songs` 数组 |
| 项目卡片 / 链接 | `index.html` 中 `.projectList` 区块 |
| 左侧标签 / 计时器 | `index.html` 中 `.left-tag`、`#countup`，起始日期在 `script.js` 中改 `start` |

> SVG 图标如需替换：去除 `width / height / fill` 信息后再使用，可继承主题色。

---

## 🙏 致谢

- 原项目作者 **ZYYO**：[ZYYO666/homepage](https://github.com/ZYYO666/homepage)
- 灵感来源：**xhofe** 与 **ddiu** 的个人主页
- Docker 化贡献者：[starry / sky22333](https://github.com/sky22333)
- 技能图标：[tandpfun/skill-icons](https://github.com/tandpfun/skill-icons)
- 图标库：[iconfont](https://www.iconfont.cn/)

---

## 📝 更新日志

### 2025.05 — 本次改动

**1. 时间线 → 网站运行计时器**
- 左侧 `left-time` 区域由静态时间线替换为实时计时器
- 显示「本站已运行 X 天 HH:MM:SS」，每秒刷新
- HTML：[index.html](index.html) `.left-time #countup`
- CSS：[style.css](static/css/style.css) `#countup` 相关样式
- JS：[script.js](static/js/script.js) 计时器逻辑，起始日期 `new Date('2025-10-01')`

**2. 移动端头像闪动修复**
- `body` 的 `background-attachment: fixed` → `scroll`（iOS Safari 重绘导致闪动）
- `.logo` 和 `.index-logo` 添加 `transition: none`（全局 `transition` 干扰了头像渲染）

---

## 📌 备注

本仓库为个人学习与展示用途，在原项目基础上重构了主页文案、新增打字机 / 动态问候 / 悬浮音乐播放器等功能，并精简了若干付费版（PHP 后台）相关说明。
