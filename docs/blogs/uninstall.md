---
title: 卸载
toc: null
nav:
  title: 实践
  order: 3
---

```bash
sudo npm uninstall npm -g

sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*

sudo rm -rf /usr/local/include/node /Users/$USER/.npm

sudo rm /usr/local/bin/node

sudo rm /usr/local/share/man/man1/node.1

sudo rm /usr/local/lib/dtrace/node.d
```
