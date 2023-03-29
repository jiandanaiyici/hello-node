---
title: 使用 NodeJS 操作 Git
toc: null
---

### 使用 git-clone

```typescript
var clone = require('git-clone');

clone(repo, targetPath, [options], cb);
```

### 使用 ShellJS

> 需要本地安装 git

```typescript
const shell = require('shelljs');
const path = 'absolute/path/to/folder';
shell.cd(path);
shell.exec('git clone https://github.com/atomicptr/dauntless-builder');
```

### nodegit

```typescript
var nodegit = require('nodegit'),
	path = require('path');

var url = 'https://github.com/atomicptr/dauntless-builder', //also tried https://github.com/atomicptr/dauntless-builder.git
	local = 'C:/data',
	cloneOpts = {};

nodegit
	.Clone(url, local, cloneOpts)
	.then(function (repo) {
		console.log('cloning succesful!');
		console.log('Cloned ' + path.basename(url) + ' to ' + repo.workdir());
	})
	.catch(function (err) {
		console.log(err);
	});
```

### child_process

```typescript
const path = require('path');
const { execSync } = require('child_process');

execSync('git clone repolink', {
	stdio: [0, 1, 2], // we need this so node will print the command output
	cwd: path.resolve(__dirname, ''), // path to where you want to save the file
});
```

### 参考

- [How to clone github repo using node.js](https://stackoverflow.com/questions/57669037/how-to-clone-github-repo-using-node-js)
- [How to Clone and Sync a Github Repo via Node.js](https://cheatcode.co/tutorials/how-to-clone-and-sync-a-github-repo-via-node-js)
- - [How to clone a GitHub repo without Git installed?](https://stackoverflow.com/questions/68593955/how-to-clone-a-github-repo-without-git-installed)
