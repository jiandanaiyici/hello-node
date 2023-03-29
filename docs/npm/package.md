---
title: package.json 解读
toc: content
nav:
  title: npm
  order: 0
---

:::info{title=简述}
需要了解 `package.json` 文件中所需内容的全部信息。它必须是实际的 JSON，而不仅仅是 JavaScript 对象文字。描述的很多行为都受到描述的配置文件设置影响 [config](./config.md),学习如何管理初始化 `package.json` 文件中的元数据 例如: 名称(`name`)、版本(`version`) 和 关键字(`keywords`) 以及依赖项 和 `devDependencies` 了解如何运行(`scripts`)、开发 和 指定文件发布到 `NPM`

[**package.json**](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#description) 是一个位于项目根目录下的 [JSON 文件](https://www.json.org/json-zh.html) 包含人类可读的元数据(如项目名称和描述) 以及功能元数据(如程序包版本号和程序所需的依赖列表)
:::

### 如何创建 ?

可通过命令行 `CLI` 创建默认(基本) `package.json` 文件

```bash
npm init # -y
```

执行 `init` 命令后可以发现初始化 [config](https://docs.npmjs.com/misc/config)中带有`init`前缀的属性 以及必填属性 如:

- 名称: [init-author-name](https://docs.npmjs.com/cli/v9/using-npm/config#init-author-name)
- 版本: [init-version](https://docs.npmjs.com/cli/v9/using-npm/config#init-version)
- 入口文件(`main`)
- 运行脚本(`scripts`)
- 作者(`author`)
- 协议(`license`)

通过 `npm config ls -l` 查看 本地全局配置文件(`npmrc`) 得到默认初始化属性值， 执行 `npm init -y` 快速创建带有默认配置的文件(只包含必填配置), 其中一些值只是空的字符串, 不过可以通过 [npm config](https://docs.npmjs.com/cli/v9/commands/npm-config) 设置全局配置，之后在初始化时直接读取默认配置就行了 如下

```bash
npm config set init-author-name "jiandanaiyici"
```

:::info{title=提示}
如果记不住或者怕修改时某个属性的拼写会错误时, 也可通过 `npm config edit -g` 直接编辑全局配置文件(根目录下 `npmrc`), 另外可参考 [init package.json](https://github.com/npm/init-package-json) 开发属于自己的 初始化配置(`npm config get init-module` 或直接在根目录(home)下创建 `.npm-init.js`)
:::

```ts
module.exports = prompt("what's your favorite flavor of ice cream, buddy?", 'I LIKE THEM ALL');

// 或 自定义常用符合自己的属性
module.exports = {
	author: 'jiandanaiyici',
	license: 'MIT',
	customField: 'Example custom field',
	otherCustomField: 'This example field is really cool',
};
```

### 参考

- <Badge>官方</Badge> [creating a package json file](https://docs.npmjs.com/creating-a-package-json-file)
- [what package.json](https://heynode.com/tutorial/what-packagejson/): 中文 --> 掘金[package.json 详解](https://juejin.cn/post/6844904006746112007)
- <Badge type="error">推荐</Badge> [Understanding the package.json file](https://www.codementor.io/@ekunolaeasybuoy/understanding-the-package-json-file-13xfqsnohq)
- [Setting Global NPM Defaults for Quick-starting New Projects](https://codeburst.io/setting-global-npm-defaults-for-quick-starting-new-projects-ed06ed22edb3)
- [Understanding package.json](https://javascript.plainenglish.io/understanding-package-json-33c810ea8acb)
