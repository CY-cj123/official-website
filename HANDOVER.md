# 网站项目交接文档

## 1. 项目概况
本项目为 **长垣市诚建市政建设工程有限公司** 的官方网站。
- **网站地址**: [https://cychengjian.com](https://cychengjian.com)
- **代码托管**: GitHub
- **部署平台**: Vercel
- **域名管理**: Cloudflare

## 2. 核心账号信息
为了方便管理，项目采用了统一的账号身份。请妥善保管以下信息。

### 2.1 基础账号 (Email & GitHub)
这是整个项目的核心账号，用于登录 GitHub 代码仓库。
- **注册邮箱**: `changyuanchengjian@163.com`
- **通用密码**: `Cycj123`
- **GitHub**: 使用上述邮箱和密码直接登录。
  - *作用*: 存放网站的所有源代码，控制网站的版本更新。

### 2.2 部署与域名 (Vercel & Cloudflare)
以下平台已配置为**通过 GitHub 授权登录**，无需单独记忆密码。

- **Vercel (服务器/部署)**
  - *网址*: [https://vercel.com](https://vercel.com)
  - *作用*: 网站的服务器端，负责将 GitHub 上的代码自动构建并发布到互联网。
  - *登录方式*: 在登录页面选择 **"Continue with GitHub"**。

- **Cloudflare (域名/DNS)**
  - *网址*: [https://dash.cloudflare.com](https://dash.cloudflare.com)
  - *作用*: 管理 `cychengjian.com` 域名解析，以及网站的全球加速和安全防护。
  - *登录方式*: 在登录页面选择 **"Log in with GitHub"**。

## 3. 企业邮箱设置
我们配置了专业的企业域名邮箱，用于提升品牌形象。

- **对外展示邮箱**: `contact@cychengjian.com`
- **管理方式**: Cloudflare Email Routing
- **当前状态**: **只收不发** (Receive Only)
- **工作原理**: 
  - 所有发送到 `contact@cychengjian.com` 的邮件，会自动转发到 `changyuanchengjian@163.com`。
  - 您可以直接登录 163 邮箱查看所有业务邮件。
  - *注意*: 目前无法直接使用 `contact@` 邮箱对外发送邮件。

## 4. 维护与更新指南
- **源代码位置**: 所有的网站代码都保存在 GitHub 仓库中。
- **自动更新机制**: 本项目配置了自动化部署（CI/CD）。只要向 GitHub 仓库的 `main` 分支提交代码修改，Vercel 会自动检测到变化，重新构建网站并发布更新，通常几分钟内即可生效。无需手动操作服务器。

## 5. 技术支持
如果在后续使用或维护过程中遇到任何技术问题，例如：
- 网站无法访问
- 需要修改文字或图片内容
- 需要新增功能或页面
- 域名或服务器续费问题

请随时联系技术团队进行处理。

---
*文档生成日期: 2025-12-22*
