# type-dom-svgs-server

## Description

type-dom-svgs的common和element-plus的svg文件生成服务器。
可以直接在swagger中调用。

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## 引用 type-node-parser的说明
需要先build type-node-parser

且 type-node-parser 的package.json的main设置为 "./dist/src/index.js",
 "types": "./dist/src/index.ts"

type-dom-svgs-server 是node 环境。与其它的项目是不一样的。

注意: types对应的index是以 .d.ts结尾的。

## License

Nest is [MIT licensed](LICENSE).
