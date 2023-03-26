---
title: 常用命令
toc: content
group:
  order: 1
---

### 信息

```bash
# 登录
npm login

# 验证 输出注册时的用户名
npm whoami [--registry <registry>]

# 查看个人信息
npm profile get

# 更新个人资料
npm profile set key value

# 停用
npm profile disable-2fa

# 创建 token
npm token create

# 撤销 token
npm token revoke

# 发布包
npm publish

# 取消发布包
npm unpublish <package-name> -f # 一次性取消所有包
npm unpublish <package-name>@<version> # 撤销指定版本

# 弃用
npm deprecate

# 更改可见性
npm access public/restricted

# 更改用户和团队包访问
npm access grant/revoke

# 查看当前项目的 node_modules/下是否存在未包含在 package.json 中的包, 如果存在打印在命令行中
npm prune

```

### 开发

```bash
# 初始化项目
npm init

# 初始化默认项目
npm init [-f|--force|-y|--yes]
```

### 安装

```bash
# 安装包
npm install package-name # 以下简写 npm i package-name

    # 参数指令
    npm i -P / npm i --save-prod     # 安装在 dependencies 可用于生产
    npm i -D / npm i --save-dev      # 安装在 devDependencies 用于开发, 打包前
    npm i -O / npm i --save-optional # 安装在 optionalDependencies
    npm i --no-save                  # 防止保存在 dependencies
    npm i -E / npm i --save-exact    # 安装精准版本配置
    npm i -B / npm i --save-bundle   # 安装在 bundleDependencies

# 安装指定版本及指定标记
npm i sax@latest
npm i @myorg/mypackge@latest

# 指定版本范围
npm i [@scope/]packageName@<version range>
npm i @myorg/privatepackage@">=0.0.1 <0.2.0"

# 其他参数
npm i packageName --force           # 强制远程获取
npm i packageName -g / --global     # 全局安装
```

### 卸载

`同安装命令类似`

```bash
npm uninstall <package>
```

### 更新

```bash
npm update [-g] [pkg]

aliases: up, upgrade
```

### 重建

```bash
npm rebuild [@scope/name]
alias: npm rb
```

### 查看

```bash
# 查看包信息
npm view npm

# 查看全局安装
npm ls -g

# 查看包被引用, npm 没有提供机制可以查看, 可以尝试安装 npm-why
npm-why <packageName>

# 如果是使用 yarn 安装 可以直接使用
yarn why <packageName>

# 检查项目中是否有需要更新的包
npm outdated

# 查看包的主页
npm home @ant-design/pro-layout # 查看 pro-layout的主页并打开 https://github.com/ant-design/ant-design-pro-layout#readme
```

### 查找

```bash
# 查看 .npm 在文件夹中的位置
npm config get cache

# 搜索包
npm search name
```

### 缓存

```bash
npm cache clean -f
```

### 审核

```bash
npm audit [--json|--parseable]
npm audit fix [--force|--package-lock-only|-dry-run|--production|--only=dev]
```

### 说明

```bash
name             # 名称
version          # 版本
description      # 描述
homepage         # 包主页
bugs             # 管理bug
license          # 协议
main             # 入口文件
browser          # 指定允许运行的浏览器
bin              # 启动命令文件
repository       # 存储库
scripts          # 启动脚本命令
config           # 配置
dependencies     # 生产依赖
devDependencies  # 开发依赖
```

- [npm cheatsheet](https://devhints.io/npm)
- [NPM Cheat Sheet](https://dev.to/ganeshtyjo/npm-cheat-sheet-2om5)
- [npm-cheatsheet](https://github.com/devrafalko/npm-cheatsheet)
