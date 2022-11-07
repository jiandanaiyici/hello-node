---
title: NPM 源管理
---

### 配置安装源

- **方法一**: [参考]()

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

- **方法一:** 通过安装源管理包 [nrm](https://github.com/Pana/nrm) 进行快速切换

- 方法二: 通过配置 npmrc 文件

```bash
registry=https://registry.npm.taobao.org/
package-lock=false
```
