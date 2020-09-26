---
id: yarn-global-path
title: 设置yarn全局目录
author: 刘进行
authorTitle: 程序员
authorURL: https://github.com/liujinxing
authorImageURL: https://avatars0.githubusercontent.com/u/1055306?s=400&u=3b86b7fb114b05a0b12a8a8092f5f6c69972ae23&v=4
tags: ["yarn", "工具"]
---

本篇文章介绍如何在 windows 操作系统中，将 yarn 缓存文件从 C 盘迁移到 D 盘。

默认情况下，yarn 的缓存文件和全局安装的 node 包放在家目录的 `AppData\Local\Yarn` 中。

分三个步骤完成迁移动作：

- 第一步：配置
- 第二步：迁移文件
- 第三步：设置 `Path` 环境变量

## 第一步：配置

我们需要配置 yarn 的相关全局文件夹：

```bash
yarn config prefix "D:\dev\yarn"
yarn config global-folder "D:\dev\yarn\Data\global"
yarn config cache-folder "D:\dev\yarn\cache"
```

然后检查文件夹设置是否正确：

```shell
$ yarn global bin
D:\dev\yarn\bin
$ yarn global dir
D:\dev\yarn\Data\global
```

## 第二步：迁移文件

将相关文件迁移到新的目录中：（假定家目录为 `C:\\Users\\test`）

```shell
mv C:\\Users\\test\\AppData\\Local\\Yarn\\bin D:\\dev\\yarn\\bin
mv C:\\Users\\test\\AppData\\Local\\Yarn\\Data D:\\dev\\yarn\\Data
mv C:\\Users\\test\\AppData\\Local\\Yarn\\Cache D:\\dev\\yarn\\cache
```

:::note

没有 `mv` 命令的，请手动完成文件迁移工作。

:::

## 第三步：设置 `Path` 环境变量

因为 Yarn 安全的全局 node 包以及对应的可执行命令行存放在新的目录 `D:\\dev\\yarn\\bin` 中，所以需要将环境变量 `Path` 中移除 `C:\\Users\\test\\AppData\\Local\\Yarn\\bin`，而添加上 `D:\\dev\\yarn\\bin`。

## 参考资料

- [yarn config](https://classic.yarnpkg.com/zh-Hans/docs/cli/config)
- [yarn global](https://classic.yarnpkg.com/zh-Hans/docs/cli/global)
- [yarn cache](https://classic.yarnpkg.com/en/docs/cli/cache/)
- [How to change global folder](https://github.com/yarnpkg/yarn/issues/5637)
