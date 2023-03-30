const glob = require('fast-glob');
const babel = require('@babel/core');

// 声明 libraries 数组
let libraries = ['react', 'react-dom'];

// 使用 fast-glob 匹配文件列表
const files = glob.sync(['src/**/*.js']);

// 遍历文件列表，分析使用的第三方组件库
let components = new Set();
for (let i = 0; i < files.length; i++) {
	const file = files[i];
	const code = babel.transformFileSync(file, {
		presets: ['@babel/preset-env', '@babel/preset-react'],
	}).code;
	const regex = /import\s+(?:(?:\*\s+as\s+\w+)|(?:{[^}]+}))(?:\s+from\s+)?'([^']+)'/gm;
	let match;
	while ((match = regex.exec(code)) !== null) {
		const library = match[1];
		if (libraries.includes(library)) {
			const importStatement = match[0].trim();
			const componentName = importStatement
				.slice(importStatement.indexOf('{') + 1, importStatement.indexOf('}'))
				.trim();
			components.add(componentName);
		}
	}
}

// 输出结果
console.log(`React 应用中使用到的第三方组件库：${libraries.join(', ')}`);
console.log(`使用到的组件：${Array.from(components).join(', ')}`);
