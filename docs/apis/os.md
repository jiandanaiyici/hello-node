---
title: OS
---

[NodeJS OS](https://nodejs.org/api/os.html) 模块提供了与操作系统相关的实用方法(包含有用户信息、操作系统信息 等)和属性, 可直接引入使用

```bash
const os = require('node:os');
// 或者
const os = require('os');
```

| **方法 / 属性**                                                                                | **说明**                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tmpdir()](https://nodejs.org/api/os.html#ostmpdir)                                            | 以 string 形式返回临时文件的操作系统默认目录                                                                                                                                                                   |
| [hostname()](https://nodejs.org/api/os.html#oshostname)                                        | 以 string 形式返回当前操作系统的主机名                                                                                                                                                                         |
| [type()](https://nodejs.org/api/os.html#ostype)                                                | 返回当前操作系统的名称, 包含 Linux、Darwin(MacOS)、 Windows_NT(Windows) [更多参考](https://en.wikipedia.org/wiki/Uname#Examples)                                                                               |
| [platform()](https://nodejs.org/api/os.html#osplatform)                                        | 返回 string 标识为其编译 Nodejs 二进制文件的操作系统平台 返回值包含: aix、darwin、freebsd、linux、openbsd、sunos 和 win32 返回值等价于 [process.platform](https://nodejs.org/api/process.html#processplatform) |
| [version()](https://nodejs.org/api/os.html#osversion)                                          | 以 string 返回标识内核版本的字符串, 包含 系统名称、版本、 类型 等                                                                                                                                              |
| [machine()](https://nodejs.org/api/os.html#osmachine)                                          | 以 string 返回机器类型 例如: arm、aarch64、mips、mips64、ppc64、ppc64le、s390、s390x、i386、i686 [更多参考 uname](https://en.wikipedia.org/wiki/Uname#Examples)                                                |
| [uptime()](https://nodejs.org/api/os.html#osuptime)                                            | 以 string 返回系统正常运行时间                                                                                                                                                                                 |
| [homedir()](https://nodejs.org/api/os.html#oshomedir)                                          | string 返回当前用户主目录的字符串路径, 通过 [用户 ID](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7ID)                                                                                                      |
| 进行查询 , 在 MacOS 平台使用 \$HOME 环境变量, 在 Windows 上使用 USERPROFILE 环境变量(如果定义) |
| [totalmem()](https://nodejs.org/dist/latest-v18.x/docs/api/os.html#ostotalmem)                 | 以整数 Number 形式返回系统内存总量（以字节为单位）                                                                                                                                                             |
| [freemem()](https://nodejs.org/dist/latest-v18.x/docs/api/os.html#osfreemem)                   | 以整数 Number 形式返回系统可用系统内存量(以[字节](https://en.wikipedia.org/wiki/Byte)                                                                                                                          |
| 为单位)                                                                                        |
| [userInfo(options)](https://nodejs.org/api/os.html#osuserinfooptions)                          | 返回有关当前有效用户的信息 包含 username、uid、gid、shell 和 homedir(和 os.homedir 返回不同), 取决于                                                                                                           |
| [release()](https://nodejs.org/api/os.html#osrelease)                                          | 以 string 形式返回操作系统                                                                                                                                                                                     |
| [networkInterfaces()](https://nodejs.org/api/os.html#osnetworkinterfaces)                      | 返回包含已分配网络地址的网络接口的对象组成的数组 Array                                                                                                                                                         |
| [constants](https://nodejs.org/api/os.html#os-constants)                                       | 操作系统常量, 也不是所有系统都可用                                                                                                                                                                             |

### networkInterface

- address: string 分配的 IPv4 或 IPv6 地址
- netmask: string IPv4 或 IPv6 网络掩码
- family: string 要么 IPv4 或 IPv6
- mac: string 网络接口的 MAC 地址
- internal: boolean true 如果网络接口是不可远程访问的环回或类似接口；否则 false
- scopeid: number 数字 IPv6 范围 ID（仅在 family is 时指定 IPv6）
- [从 os.cpus()来分析 nodejs 源码结构](https://cnodejs.org/topic/569dc6e8e6816bdc6dab52fb)
