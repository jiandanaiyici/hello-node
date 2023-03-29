---
title: Commander
toc: null
order: 1
nav:
  order: 3
  title: 工具包
---

[Commander(中文文档)](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md) 是 [TJ](https://github.com/tj) 所写的一个工具包 完整的 node.js 命令行解析方案, 有两个优势

1. Commander 负责将参数解析为选项和命令参数，为问题显示使用错误
2. 自动生成一个有帮助(内置， 哪怕无任何代码也会有)的文本信息。

```typescript
const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
	console.log(`${index}: ${val}`);
});
```

以上示例为原始 NodeJS 解析，可能比较麻烦 那么接下来就借助于 commander 命令进行解析

```bash
npm init -y
npm install commander
```

```typescript
const program = require('commander');

program.option('--frist').option('-s, --separator <char>');

// 解析命令行参数，默认值 process.args
program.parse();

const options = program.opts();

// 如果带有 first 参数 那么仅输出第一个参数，否则 全部输出
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
```

以上代码实现简单的解析命令行参数并输出第一个参数功能 执行 `node index.js --first a b c` 如果执行错误的参数将会报错并适当给出提示(匹配参数和 `option` 中所有参数匹配最高) 如 `node index.js --fit a b c`

## API

#### version

![version](./image/version.png 'Magic Gardens')

```typescript
program.version(require('./package.json').version);
```

#### 选项参数 option

![version](./image/option.png 'Magic Gardens')

通过 .option 定义选项 同时可以添加简介 、默认值 等，每一个选项都可以通过短选项名称(- x) 和长选项名称(-- xxx) 长选项 和 短选项之间可以通过逗号(,)、空格、以及 | 进行区分 , parse 必须最后调用

1. 解析后的参数通过 .opts() 获取 同时传递给命令处理函数
2. 长选项选项可以是多个单词通过中划线(-)拼接组成，在解析时自动转换为驼峰获取

```typescript | pure
const { program } = require('commander');

/**
 * @description: 动态设置版本, 默认通过 -V | --version 获取
 */
program.version(require('./package.json').version, '-v|--version');

/**
 * @description: 选项 可选 | 必选
 * 必选: option('-p | --param <value>')
 * 可选: option('-p | --param [value]')
 */

// 必选
program.option('-p | --param <value>', 'This is Required Param').helpOption();
// 可选
program.option('-op | --optional-param [value]', 'This is optional Param');

// 函数定义
program.option('-l|--letter [items]', '测试函数', (value, previous) => {
	return value.split('');
});

// program.option('-a, --action', 'This is an action').action((o, command) => {
//   console.log(JSON.stringify(command.opts()), command.args);
// });

/**
 * @description: 设置默认值 不能直接执行 -d 或 --default 否则会报错, 执行 node index.js 可看到 options 及默认值
 */
program.option('-d,--default [value]', 'this is the default value example', '这是设置的默认值');
program.option('-nd | --no-default', '默认值取反');

/** @description: 通常情况下必须放最后调用，否则可能会不生效 */
program.parse();

/** @description 通过 opts 获取解析后的参数 */
const options = program.opts();
// console.log(`-d Default Value is: ${options.default}`);

console.table(options);

/**
 * node option.js -p 必选参数
 * node option.js -op 可选参数
 *
 * node option.js -a
 * node option.js -l=abcd
 * node option.js -l a b c d -p param -op optional-param
 */
```

#### Help 帮助信息

![version](./image/help.png 'Magic Gardens')

```typescript
const { program } = require('commander');

program.version(require('./package.json').version);

program.addHelpText('before', '主命令 Usage 之前');
program.addHelpText('after', '主命令 Usage 之后');
program.usage(`\n内置帮助信息修改`).name('name');

/** 子命令添加帮助信息 */
program
	.command('child')
	.alias('c')
	// 设置子命令帮助指令
	.helpOption('-ch|--child-help', '子命令帮助')
	.addHelpText('after', '\n当前子命令 Usage 之后')
	.addHelpText('before', '\n当前子命令 Usage 之前');

/** 设置全局帮助信息 包括子命令 */
program
	.addHelpText('beforeAll', '\n包含子命令在内所有命令输出 Help 信息之前')
	.addHelpText('afterAll', '\n包含子命令在内所有命令输出 Help 信息之后');

program.parse();

/**
 * node help.js -h
 * node help.js child -ch
 */
```

```typescript
// 修改内置帮助信息
program.name('my-command').usage('[Global Command] command');
```

#### 子命令

```typescript
/**
command(nameAndArgs: string, opts?: CommandOptions): ReturnType<this['createCommand']>;
*/
const { program } = require('commander');

program
	.command('first')
	// 指定别名
	.alias('f')
	.description('第一个子命令')
	.summary('summary')
	.option('-f, --first', '子命令第一个 Option')
	.action((options, command) => {
		console.log(`Options: ${JSON.stringify(options)}`);
		console.log(`Name: ${command.name()}`);
		console.log(`Args: ${command.args}`);
		console.log(`Command Option: ${JSON.stringify(command.opts())}`);
	})
	.addHelpText('before', '这是第一个子命令');

program
	.command('second', {
		hidden: false,
		isDefault: true,
		alias: 's',
		usage: '第二个子命令',
		description: '第二个子命令',
	})
	.usage('第二个子命令')
	// 修改 help 命令
	.helpOption('-sh, --second-help', '第二个子命令帮助信息');

program.parse();

/**
 * node child.js -h | node child.js --help
 *
 * node child.js f -h
 * node child.js f -f a b c
 * node child.js s -sh
 */
```
