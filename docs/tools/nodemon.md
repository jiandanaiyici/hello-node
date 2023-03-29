---
title: nodemon
toc: null
order: 2
---

### 简介

[nodemon](https://github.com/remy/nodemon) 是一种监控节点 `NodeJS` 通过在检测到目录中的文件更改时自动重新启动节点应用程序来帮助开发基于 `Node.js` 的应用程序

`nodemon` 不需要对任何源代码或开发方法进行任何其他更改, 可以直接替换 `Node` 指令 如 `node index.js` --> `nodemon index.js`

### [特性](https://nodemon.io/#:~:text=install%20%2Dg%20nodemon-,Features,-Automatic%20restarting%20of)

- 自动重启应用程序
- 检测要监视的默认文件扩展名
- 默认支持 `Node` 但易于运行任何可执行文件 如 `Python`、`Ruby`、`make` 等
- 可配置特定忽略文件或目录 使用[fast-glob](https://github.com/mrmlnc/fast-glob)
- 配置监视特定目录
- 适用于服务器应用程序或一次性运行的实用程序和 `REPL`
- 可通过 `require` 语句引入应用使用

### 安装

```bash
# 全局安装
npm install -g nodemon # yarn global add nodemon

# 开发依赖
npm install --save-dev nodemon # yarn add nodemon -D
```

**`注：`** 本地安装时，无法通过命令行直接使用, 但可以通过配置 `package.json scripts`启动 `npm start` 或 `npx nodemon`

### 用法

`nodemon` 包装应用程序,因此可以将传递给

#### 命令行使用

CLI 命令行中通过 `nodemon -h | nodemon --help` 查看支持的选项配置及参数, 如下输出

```bash
Usage: nodemon [options 选项] [script.js] [args 参数]
  Options:
  --config file    # 指定配置文件执行
  -e, --ext        # 查找的扩展文件
  -x, --exec app   # 使用 `app` 执行脚本 如 nodemon --exec ts-node src/index.ts
  -w, --watch path # 监视指定的目录 / 文件组合
  -i, --ignore     # 忽略监视指定目录 / 文件组合
  -V, --verbose    # 是否显示导致重新启动的详细信息, true 详细模式
  -- <your args>   # 执行命令的参数

  Examples:
  $ nodemon server.js
  $ nodemon -w ../foo server.js apparg1 apparg2
  $ nodemon --exec python app.py
  $ nodemon --exec "make build" -e "styl hbs"
  # 指定配置文件覆盖默认配置
  $ nodemon app.js -- --config
  # 添加 nodejs 命令行参数
  $ nodemon --inspect ./server.js 80
  # 忽略src/所有.js 文件 以及 node_modules
  # nodemon --ignore 'src/*.js' --ingore node_modules/
```

**`注意`**: 如果执行脚本时没有指定文件,那么以 `package.json` 中 `main` 字段指定文件作为默认文件, 如未指定文件后缀将指定 `.js`,`.mjs`,`.coffee` 以及 `.json` 作为默认后缀, [参考示例](https://github.com/remy/nodemon/wiki/Sample-nodemon.json)

另: 也可以使用 `Node` 的命令选项如 `nodemon --inspect ./server.js 80`

### 配置文件

`nodemon`支持本地配置,全局配置文件,还可以通过命令行直接输入配置选项, 其覆盖顺序为 `命令行参数 > 本地配置 > 全局配置`, 两种方式 `nodemon.json` 和 `package.json nodemonConfig`

**`nodemon.json`**

```json
{
	"verbose": true,
	"ignore": ["*.test.js", "**/fixtrues/**"],
	"execMap": {
		"rb": "ruby",
		"pde": "processing --sketch={{pwd}} --run"
	}
}
```

**`package.json nodemonConfig`**: 如果配置了 `nodemonConfig` 优先级高于 `nodemon.json`,若需要覆盖则可使用 `--config` 指定

```json {2-5}
{
	"nodemonConfig": {
		"delay": 2000,
		"ignore": ["**/test/**", "**/docs/**"]
	}
}
```

#### 其他参数

**`--delay`**: 设置重启程序的延时时间 如 `"delay: 2000"` 则表示 `2000ms` 后重启
**`colours`**: 输出信息颜色标识, 默认为 `true`
**`restartable`**: 设置重启模式 / 命令 默认为 `rs`,可自定义如下 `aaa`

```json
{
	"restartable": "aaa"
}
```

```json
// nodemon.json
{
	"restartable": "aaa",
	// 延时 1000ms
	"delay": 1000,
	// 关闭颜色输出
	"colours": false,
	// 输出详细信息
	"verbose": true,
	// src 下所有文件会被忽略
	"ignore": ["./src"],
	// 监视 app.js 和 src 下文件
	"watch": ["app.js", "src"],
	"events": {
		"restart": "osascript -e 'display notification \"app restarted\" with title \"nodemon\"'"
	},
	"execMap": {
		"js": "npm -v"
	},
	// 监视后缀为 js,json文件
	"ext": "js, json",
	// 设置运行环境
	"env": {
		"NODE_ENV": "development",
		"PORT": "3000"
	}
}
```

### 配置 TypeScript

默认支持 `.ts` 后缀扩展,需要安装 `ts-node`, 可查看 [default.js execMap](https://github.com/remy/nodemon/blob/master/lib/config/defaults.js#L10)配置

### [作为模块](https://github.com/remy/nodemon/blob/master/doc/requireable.md)

作为第三方依赖包使用参考以下示例

```typescript
const nodemon = require('nodemon');

/**
 * 两种方式
 * 1. 对象方式 {@link https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/nodemon}
 * 2. 直接以字符串作为参数调用函数执行 同命令行类似
 */

function run() {
	// 配置参考 {@link https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/
	nodemon({
		script: 'a.ts',
		execMap: {
			ts: 'ts-node',
		},
		// 只有在变化时才会触发重启
		runOnChangeOnly: true,
	});

	// 字符串参数
	nodemon('b.ts');
}

run();
```

### [方法 / 事件](https://github.com/remy/nodemon/blob/main/doc/events.md#Using_nodemon_as_child_process)

```typescript
const nodemon = require('nodemon');

nodemon({ script: 'a.ts', runOnChangeOnly: false })
	.on('start', function () {
		console.log('start');
	})
	.on('config:update', () => {
		console.log('config:update');
	})
	.on('log', () => {
		console.log('log');
	})
	.on('restart', () => {
		console.log('restart');
	})
	.addListener('crash', () => {
		console.log('crash');
		// 退出
		nodemon.emit('quit');
		// 重启
		// nodemon.restart();
		// nodemon.reset(() => {
		// 	console.log('reset');
		// });
	});

process.on('uncaughtException', () => {
	nodemon.emit('quit');
});
```

可通过 `on`, `addEventListener`, `once`进行监听, `emit` 触发事件, 包含的事件有 `restart`,`quit`, `exit`, `crash`, `config:update`, `stdout | stderr`, `log` 等, 同时还包括一个重启函数 `restart`

如果 `nodemon` 作为 `spawn` 子进程运行时, 在触发 `message` 事件时 则事件名称作为 `event` 的 `type`使用, `**以下代码未通过**`

```typescript
const { spawn } = require('child_process');

/** {@link https://nodejs.org/api/child_process.html} */
function spawnNodemon() {
	const cp = spawn('nodemon', ['a.js'], {
		/** {@link https://nodejs.org/api/child_process.html#child_process_options_stdio} */
		stdio: ['pipe', 'ipc'],
	});

	return cp;
}

const app = spawnNodemon();

app.on('message', function (event) {
	if (event.type === 'start') {
		console.log('nodemon started');
	} else if (event.type === 'crash') {
		console.log('script crashed for some reason');
	}
});

// 强制触发重启
app.send('restart');

// 强制退出
app.send('quit');
```

### 客户端开发

```json
{
	"start": "nodemon --watch src/**/*.ts --exec electron ."
}
```

### 参考

- [nodemon](https://openbase.com/js/nodemon)
- [NodeJS nodemon module](https://www.geeksforgeeks.org/node-js-nodemon-module/)
- [TypeScript & Nodemon — The Ultimate Setup!](https://levelup.gitconnected.com/typescript-nodemon-the-ultimate-setup-7200aa60cc8b)
  <!-- - [Configuring nodemon with TypeScript](https://blog.logrocket.com/configuring-nodemon-with-typescript/) -->
  <!-- - [Nodemon + Babel + VSCode](https://michele.io/nodemon-babel-vscode/) -->
