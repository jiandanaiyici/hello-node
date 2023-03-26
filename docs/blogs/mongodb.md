---
title: 数据库-mongodb
toc: null
nav:
  title: 实践
  order: 3
---

### 安装

```bash
# 安装 mongoose
npm install mongoose
```

### 修改命令

```json
"script": {
	"start": "node ./bin/www",
  "devstart": "nodemon ./bin/www"
}
```

**mongoose 实例**

```typescript
const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
	name: {
		type: String, // 定义类型
		min: 10, // 最小长度限制
		max: 100, // 最大长度限制
		default: 'default', // 设置默认值
		required: true, // 是否必须
	},
});

/** @desc: 第一个参数指定别名 */
const Author = mongoose.model('Author', AuthorSchema);

/** @desc: 测试使用 */
const authorList = Array(Math.floor(Math.random() * 100))
	.fill(1)
	.map((item, i) => ({ name: `测试-${i}` }));
authorList.forEach((item) => {
	const author_intsance = new Author({ name: item.name });
	author_intsance.save((err) => {
		if (err) {
			console.log(err, '添加错误处理机制');
		}
		console.log(author_intsance, '>>>>>>>成功保存!');
	});
});
```

**app.js**

```typescript
const express = require('express');
const Author = require('./models/author');
// ....

const app = express();

// ...
app.use('/', (req, res, next) => {
	// res.send('测试');
	Author.find({}).exec((err, data) => {
		if (err) {
			console.log(err);
		}
		res.send(data);
	});
});

// 导入 mongoose 模块
const mongoose = require('mongoose');

// 设置默认 mongoose 连接
const dbUrl = 'mongodb://127.0.0.1/my_database';

mongoose.connect(dbUrl);

// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;

// 取得默认连接
const db = mongoose.connection;

db.once('open', function () {
	console.log('连接成功!');
});

// 将连接与错误事件绑定（以获得连接错误的提示）
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));
```
