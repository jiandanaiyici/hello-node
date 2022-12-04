---
title: npm config
toc: null
group:
  title: CLI
---

[npm config](): 管理 `npm` 配置文件, 通过从 命令行、环境变量 或 [npmrc](https://docs.npmjs.com/cli/v9/configuring-npm/npmrc) 文件以及某些情况下从 `package.json`文件中获取配置信息

```bash
# 获取
npm config get <key>
# 设置
npm config set <key>=<value>
# 删除
npm config delete <key>
# 查看所有配置
npm config list
# 编辑
npm config edit
# 修复
npm config fix
```

### 子命令

- [set](https://docs.npmjs.com/cli/v9/commands/npm-config#set): 设置指定键的值, 若未提供值(`value`) 则是字符串, 设置成功后将在 `.npmrc` 中出现

```bash
npm config set key value

npm config set key=value

npm config set registry https://registry.npm.taobao.org/
```

- [get](https://docs.npmjs.com/cli/v9/commands/npm-config#get): 获取指定 `key` 的值(`value`), 若不提供 `key` 则和 `npm config list` 输出相同

```bash
npm config get registry
```

- [list](https://docs.npmjs.com/cli/v9/commands/npm-config#list): 展示所有配置信息, 通过 `-l` 可查看包含默认(`defaults`) 在内的所有配置, `--json` 输出 `JSON` 格式

```bash
npm config list -l --json
```

- [delete](https://docs.npmjs.com/cli/v9/commands/npm-config#delete): 从所有配置文件中删除指定 `key`

```bash
npm config delete key [...keys]
```

- [edit](https://docs.npmjs.com/cli/v9/commands/npm-config#edit): 通过 `vim` 打开配置文件进行修改, 若修改全局配置 可添加 `--global` 标识

```bash
npm config edit --global
```

- [fix](https://docs.npmjs.com/cli/v9/commands/npm-config#fix): 尝试修复无效的配置信息

### 标识配置

- [json](https://docs.npmjs.com/cli/v9/commands/npm-config#json): 是否以`JSON`格式输出
- [global](https://docs.npmjs.com/cli/v9/commands/npm-config#global): 全局

### 关联

- [配置源镜像](../../blogs/registry)
