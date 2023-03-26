---
title: npm ls
toc: null
---

[npm ls](https://docs.npmjs.com/cli/v9/commands/npm-ls): 列出已安装的包

```bash
npm ls <package>
npm list <package>
```

### 配置参数

- [all](https://docs.npmjs.com/cli/v9/commands/npm-ls#all): 执行 `npm ls` 或 `npm outdated`时设置 `--all` 参数，将会列出所有已安装 或者已过时的包, 不仅仅针对当前项目

```bash
# 当前所有已安装
npm ls --all

# 当前所有已过时
npm outdated --all
```

- [depth](https://docs.npmjs.com/cli/v9/commands/npm-ls#depth): 列出递归时的深度(层级), 默认为 1 如果设置为 `--all` 那么为 `Infinity`

```bash
npm ls --depth 0
```

- [json](https://docs.npmjs.com/cli/v9/commands/npm-ls#json): 是否以 `JSON` 形式输出，而非普通列表 并非所有 `npm` 命令都支持 默认为 `false`

```bash
npm ls --json
```

- [global](https://docs.npmjs.com/cli/v9/commands/npm-ls#global): 列出全局已安装的包

```bash
npm ls -g

npm ls -g depth 0
```

- [long](https://docs.npmjs.com/cli/v9/commands/npm-ls#long): 默认为 `false` 表示是否显示扩展信息(列出所在目录)

```bash
npm ls --long
```

- [parseable](https://docs.npmjs.com/cli/v9/commands/npm-ls#parseable): 默认 `false` 表示 从写入标准输出的命令输出可解析的结果(像是输出所有安装的目录)

```bash
npm ls --parseable
```

- [omit](https://docs.npmjs.com/cli/v9/commands/npm-ls#omit): 若 `NODE_ENV` 设置为 `production` 默认为 `dev` 否则为空, 可选值: `dev` `|` `optional` `|` `peer` 允许设置多次

```bash
npm ls --omit
```

- [link](https://docs.npmjs.com/cli/v9/commands/npm-ls#link): 仅输出被链接的那些包

```bash
npm ls --link
```

- [package-lock-only](https://docs.npmjs.com/cli/v9/commands/npm-ls#package-lock-only): 默认为 `false` 表示仅使用 `package-lock.json` 忽略 `node_modules`

- [unicode](https://docs.npmjs.com/cli/v9/commands/npm-ls#unicode): 不同系统上默认值不同,`Windows` 中为 `false` `Mac/unix` 中为 `true` 由 `LC_ALL、LC_CTYPE、LANG` 环境变量定义，当为 `true` 时, npm 树输出中使用 `unicode` 字符, `false` 时 使用 `ascii`字符

```bash
npm ls --unicode
```

- [workspace](https://docs.npmjs.com/cli/v9/commands/npm-ls#workspace): 启用在当前项目已配置的工作区的上下文执行命令, 暂无用

- [include-workspace-root](https://docs.npmjs.com/cli/v9/commands/npm-ls#include-workspace-root): 默认 `false`

- [install-links](https://docs.npmjs.com/cli/v9/commands/npm-ls#install-links): 默认 `true`

备注: 以上所有命令若在执行时需要权限, 前缀添加 `sudo` 这是因为在安装 `npm` 时通过 `sudo` 安装. 比较常用的可能就是 `npm ls --depth`用来查看当前安装的包

### 关联

- [npm outdated](https://docs.npmjs.com/cli/v9/commands/npm-outdated): 查看已过时的包，在执行更新时比较有用
- [npm update](https://docs.npmjs.com/cli/v9/commands/npm-update): 更新包(可全量更新、全局更新、更新指定包)
- [view](https://docs.npmjs.com/cli/v9/commands/npm-view): 查看注册信息 `npm view <package>` 执行时 查看远程包, `aliases: info、show、v`
