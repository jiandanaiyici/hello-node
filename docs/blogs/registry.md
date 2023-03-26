---
title: 源管理
toc: null
---

### 配置安装源

```bash
# 查看安装配置源
npm config get registry

# 临时: 指的是单个包安装时使用或指定目录下, 仅执行一次
npm --registry https://registry.npm.taobao.org install xxx

# 手动设置 长久
npm config set registry=https://registry.npm.taobao.org

# 使用 cnpm
npm install -g cnpm --regirstry=https://registry.npm.taobao.org

# 通过 .npmrc 配置项目级别安装源, 在项目根目录下创建 .npmrc 文件
registry=https://registry.npm.taobao.org/
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
electron_mirror=https://npm.taobao.org/mirrors/electron/
```

- <Badge>**方法一**</Badge> 通过安装源管理包 [nrm](https://github.com/Pana/nrm) 进行快速切换

```bash
npm install -g nrm

# 查看所有镜像配置
nrm ls
```

- <Badge>**方法二**</Badge> 通过配置 npmrc 文件

```bash
registry=https://registry.npm.taobao.org/
package-lock=false
```

为特定包指定源

```bash
npm config set '<package>:registry' xxxx
```

常用的几个源

```bash
npm install -g nrm

# 查看支持切换的源配置
nrm ls
* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

# 切换cnpm 源
nrm use cnpm
```

[更多命令查看](https://github.com/Pana/nrm#usage)

### yarn

```bash
registry "https://registry.npm.taobao.org/"
sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
electron_mirror "https://npm.taobao.org/mirrors/electron/"
```

### 参考

- [npm 中国镜像](https://npmmirror.com/)
- [working with npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [npm-registry](https://www.npmjs.com/package/npm-registry)
- [npm-config-china](https://www.npmjs.com/package/npm-config-china)
- [Verdaccio](https://verdaccio.org/zh-CN/): 一个基于 Node.js 的轻量级私有仓库
