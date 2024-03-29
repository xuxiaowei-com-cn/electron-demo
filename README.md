# electron-demo

## Node

- version
    - Node.js v14.17.0

## Project Init

```
npm init
```

```
Microsoft Windows [版本 10.0.19042.964]
(c) Microsoft Corporation。保留所有权利。

D:\WebstormProjects\electron-demo>npm init
This utility will walk you through creating a package.json file.
此实用工具将指导您创建package.json文件。
It only covers the most common items, and tries to guess sensible defaults.
它只涵盖最常见的项目，并试图猜测合理的默认值。

See `npm help init` for definitive documentation on these fields and exactly what they do.
请参阅“npm help init”以获取有关这些字段的最终文档以及它们的确切用途。

Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file.
然后使用“npm install<pkg>`安装包并将其另存为package.json文件中的依赖项。

Press ^C at any time to quit.
随时按^C退出。
package name: (electron-demo)
程序包名称：
version: (1.0.0)
版本：
description:
描述：
entry point: (index.js)
入口点：
test command:
测试命令：
git repository: https://github.com/xuxiaowei-com-cn/electron-demo.git
git存储库：
keywords: electron
关键词：
author: 徐晓伟
作者：
license: (ISC) MIT
许可证：
About to write to D:\WebstormProjects\electron-demo\package.json:

{
  "name": "electron-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/xuxiaowei-com-cn/electron-demo.git"
  },
  "keywords": [
    "electron"
  ],
  "author": "徐晓伟",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/xuxiaowei-com-cn/electron-demo/issues"
  },
  "homepage": "https://github.com/xuxiaowei-com-cn/electron-demo#readme"
}


Is this OK? (yes) yes

D:\WebstormProjects\electron-demo>
```

## Configuration

### electron

```
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
npm i -D electron
npm i -D @electron/remote
```

### @vue/cli

- 全局安装 vue 脚手架

```
npm i -g @vue/cli
```

- 创建一个 vue 3 项目

```
vue create hello-world-vue3
```

- 将上述创建的项目根据目录结构复制到本项目中

```
npm i vue@next
npm i core-js
npm i -D @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-service @vue/compiler-sfc babel-eslint eslint eslint-plugin-vue
npm i -D vue-template-compiler
```

### electron-builder

- 添加 Vue CLI Plugin Electron Builder

```
vue add electron-builder
```

### sass-loader

```
npm i -D sass-loader
```

### vue-router

- 使用 vue ui 添加 vue-router

### vuex

- 使用 vue ui 添加 vuex

### DLL

- 安装 windows-build-tools
    - 管理员身份运行
    - 自动安装 Python 2.7
        - ![Python 2.7](./img/img1.png)
    - 自动安装 Visual Studio 2017
        - ![Visual Studio 2017](./img/img2.png)
    - 自动安装 Windows Kits
        - ![Windows Kits](./img/img3.png)

```
npm i -g --production windows-build-tools
```

- 安装 ffi-napi
    - 日志输出如下内容，则说明 ffi-napi、windows-build-tools 安装没有问题
        ```
        > ffi-napi@4.0.3 install E:\WebstormProjects\electron-demo\node_modules\ffi-napi
        > node-gyp-build
        
        
        E:\WebstormProjects\electron-demo\node_modules\ffi-napi>if not defined npm_config_node_gyp (node "D:\Program Files\nodejs\node_modules\npm\node_modules\npm-lifecycle\node-gyp-bin\\..\..\nod
        e_modules\node-gyp\bin\node-gyp.js" rebuild )  else (node "D:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js" rebuild )
        在此解决方案中一次生成一个项目。若要启用并行生成，请添加“/m”开关。
        Preprocessing assembly file ..\..\..\deps\libffi\src\x86\win64_intel.preasm
        win64_intel.preasm
        Building assembly file Release\obj\ffi\\win64_intel.asm
        Assembling: Release\obj\ffi\win64_intel.asm
        prep_cif.c
        types.c
        raw_api.c
        java_raw_api.c
        closures.c
        ffiw64.c
        win_delay_load_hook.cc
        ffi.vcxproj -> E:\WebstormProjects\electron-demo\node_modules\ffi-napi\build\Release\\libffi.lib
        nothing.c
        win_delay_load_hook.cc
        nothing.vcxproj -> E:\WebstormProjects\electron-demo\node_modules\ffi-napi\build\Release\\nothing.lib
        ffi.cc
        callback_info.cc
        threaded_callback_invokation.cc
        win32-dlfcn.cc
        win_delay_load_hook.cc
        正在创建库 E:\WebstormProjects\electron-demo\node_modules\ffi-napi\build\Release\ffi_bindings.lib 和对象 E:\WebstormProjects\electron-demo\node_modules\ffi-napi\build\Release\ffi_bindin
        gs.exp
        ffi_bindings.vcxproj -> E:\WebstormProjects\electron-demo\node_modules\ffi-napi\build\Release\\ffi_bindings.node
        ```

```
ffi-napi
```

## Stargazers over time

[![Stargazers over time](https://starchart.cc/xuxiaowei-com-cn/electron-demo.svg)](https://starchart.cc/xuxiaowei-com-cn/electron-demo)
