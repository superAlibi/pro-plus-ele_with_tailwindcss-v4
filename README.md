# qhse-inte

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

# 项目说明

## 关于依赖
  - tailwindcss @4 最新基础预览版本
  - plus-pro-components @0.1.20 基于 element-plus 的高阶组件库
  - element-plus @2.9.3 
  - pinia 
  - vue-router
  - typescript
  - vue 3.5 最新版本
  - vite 最新版本

## 关于node环境

建议开启`node` `corepack`,在项目根目录下执行 `corepack enable`,本项目使用`corepack`管理最新的`pnpm`包管理器,有关`corepack`安装包管理器慢,可以设置`COREPACK_NPM_REGISTRY`环境变量,指定镜像源

  - node 版本 22 最新版本
  - pnpm 最新版本
   

## 项目初次打开

```sh
pnpm install
```

### 开发环境预览

```sh
pnpm dev
```

### 代码类型检查,并生成部署文件

```sh
pnpm build
```
