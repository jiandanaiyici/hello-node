---
title: 统计指定组件库的使用情况
toc: null
order: 1
---

### 大致思路

1. 设置指定需要分析的依赖包
2. 遍历读取指定目录下的文件信息 并解析为 ast
3. 遍历统计使用情况

```typescript
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
// const fg = require("fast-glob");
const glob = require('glob');

// React应用目录
const appDir = './src';

// 指定依赖库
const libraries = ['antd'];

// 组件库及其使用情况
const libraryUsage = {};

// 解析文件，提取组件库信息
function analyzeFile(filePath) {
	const code = fs.readFileSync(filePath, 'utf-8');
	const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] });

	traverse(ast, {
		ImportDeclaration({ node }) {
			const libName = node.source.value;

			if (libraries.includes(libName)) {
				// 将引用的组件添加到组件库列表中
				node.specifiers.forEach((specifier) => {
					if (specifier.type === 'ImportSpecifier') {
						const componentName = specifier.imported.name;
						if (!libraryUsage[libName]) {
							libraryUsage[libName] = new Map();
						}

						const componentNameCount = libraryUsage[libName].get(componentName);
						if (!componentNameCount) {
							libraryUsage[libName].set(componentName, 1);
						} else {
							libraryUsage[libName].set(componentName, componentNameCount + 1);
						}
					} else if (specifier.type === 'ImportDefaultSpecifier') {
						// 不统计
						const componentName = 'default';
						if (!libraryUsage[libName]) {
							libraryUsage[libName] = [];
						}
						if (!libraryUsage[libName].includes(componentName)) {
							libraryUsage[libName].push(componentName);
						}
					}
				});
			}
		},
		JSXElement({ node }) {
			const libName = node.openingElement.name.name;

			if (libraries.includes(libName)) {
				const componentName = node.openingElement.name.name;
				if (!libraryUsage[libName]) {
					libraryUsage[libName] = new Map();
				}
				const count = libraryUsage[libName].get(componentName);
				if (!count) {
					libraryUsage[libName].set(componentName, 1);
				} else {
					libraryUsage[libName].set(componentName, ++count);
				}
			}
		},
	});
}

// 遍历React应用目录，并分析所有JS和TS文件
async function traverseDirectory() {
	const files = await glob('**/*.jsx', {
		ignore: 'node_modules/**',
		absolute: false,
		cwd: appDir,
	});

	for (let file of files) {
		const filePath = path.join(appDir, file);
		analyzeFile(filePath);
	}
}

// 遍历React应用目录，并分析所有JS和TS文件
traverseDirectory().then(() => {
	// 输出组件库列表和使用的组件
	console.log(`使用了 ${libraries.length} 个指定依赖包：`);
	console.log(libraries.join(', '));
	console.log('\n');

	console.log('具体使用情况如下：', libraryUsage);
	for (let libName in libraryUsage) {
		console.log(`Library: ${libName}`);

		console.log(`Components: ${JSON.stringify(Object.fromEntries(libraryUsage[libName]))}`);
		// console.log("---");
	}
});
```
