---
title: 常见问题
toc: null
---

### 检查未使用的包

```bash
# 全局安装
npm i -g depcheck

# 若不想安装
npx depcheck
```

### 查看依赖包

```bash
# 注册信息(通常是远程)
npm view <package>
npm info <package>

# 查看安装信息
npm ls <package> --depth 0
```

### 快速删除

部分场景下删除 `node_modules` 贼慢

```bash
npm install -g rimraf
rimraf node_modules
```

### node-gyp

- [node-gyp](https://github.com/nodejs/node-gyp)

```bash
# 设置python 环境变量
npm install --global --production windows-build-tools
```
