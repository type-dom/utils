
> 1、基于PDF.js中的xml-parser.js，使用typescript重写的一个xml字符串的解析库。

> 2、网上的xml解析库一般依赖DOM转换，会有一些问题，不够完善。改解析库，独立创建了TypeDomNode类；从而不再依赖dom。

> type-dom-svgs-server中用到，要符号 commonjs 规范
> 支持nodejs

> 因为是nodejs环境调用，不能直接引用其它的库，否则需要在package.json设置


``` 
"main": "dist/src/index.js",
"types": "dist/src/index.d.ts"

```
