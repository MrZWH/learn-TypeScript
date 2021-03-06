# learn TypeScript

## 为什么学习 typescript

- 是 JavaScript 的增强，添加了可选择类型标注，增强了代码的可读性和可维护性，提供不断发展 JavaScript 特性，能让我们建立更健壮的组件
- 未来签到开发趋势
- 技术转型的趋势
- 提升个人能力和竞争力

## 学习路径

- typescript 基础知识、常用语法
  - 基础类型、变量声明、接口、类、函数、泛型、类型推新、高级类型
- 使用 typescript 从零实现一个 axios 库
  - 项目脚手架、基础功能实现、异常情况处理、接口扩展、拦截器实现、配置化实现、取消功能实现、更多功能实现
- 项目的测试、构建与发布
  - Jest 做单元测试、Commitizen 做规范化的提交注释、RollupJS 打包项目、TSLint 保证代码风格一致性、Prettier 美化代码格式、Semantic release 管理版本和发布。

## 安装 typescript

```shell
npm i -g typescript
tsc -V # 查看版本
```

编译 ts 文件：

```shell
tsc greeter.ts
```

在 node 环境运行的便利工具 `ts-node`: `npm i -g ts-node`

`interface`接口类型，就是对象的一个描述。

### 基础类型

- 布尔值
- 数字
- 字符串
- 数组
- 元祖 Tuple
- 枚举
  - 从 0 开始，也可以反查
- any
- void
- null 和 undefined
- never
- object
- 类型断言

`tsc index.ts --strictNullChecks`严格检查
示例代码：`./examples/section1/index.ts`

### 变量声明

- var 声明
- let 声明
- const 声明
- let vs. const
- 解构
- 展开

示例代码：`./examples/section2/index.ts`

### 接口

示例代码：`./examples/section3/index.ts`

### 类

- 继承
- 公共，私有与受保护的修饰符
  - public
  - private
  - protected
- readonly 修饰符
- 存取器
- 静态属性
- 实现一个单例模式
- 抽象类
- 高级技巧

示例代码：`./examples/section4/index.ts`

### 函数

- 函数类型
- 可选参数和默认参数
- this
- 重载

示例代码：`./examples/section5/index.ts`

### 泛型

- 使用泛型变量
- 泛型类型
- 泛型类
- 泛型约束

- 在函数中使用泛型
- 在类中使用泛型

示例代码：`./examples/section6/index.ts`

### 类型推断

- 最佳通用类型
- 上下文类型

示例代码：`./examples/section7/index.ts`

### 高级类型

- 交叉类型
- 联合类型
  - 使用联合类型时只会允许共有的属性
- 类型保护
  - 使用 as
  - 使用 in
  - 使用 typeof
  - 使用 instanceof
- 可为 null 的类型
- 字符串字面量类型

示例代码：`./examples/section8/index.ts`

### namespace

- 在 namespace 中如何暴露变量
- 如何显式引用其它 namespace

## tsconfig 文件

如果使用 `tsc <指定文件名>`，则不会应用本地文件下的 tsconfig.json，当只执行 `tsc` 时才会（ts-node 执行加文件名也会应用配置文件规则）。

include、exclude、files 用来规定编译哪些文件。

### compilerOptions

- noImplicitAny any 类型是否也需要显示的设置
- removeComments 删除注释
- strictNullChecks 强制检查 null 类型
- rootDir 编译文件入口
- outDir 编译文件出口
- incremental 增量式编译配置项
- allowJs 是否对 js 文件同样进行编译
- checkJs 对 js 文件检测
- sourceMap
- noUnusedLocals 未被使用的局部变量
- noUnusedParameters 未被使用的函数参数变量
- baseUrl 项目根路径
- outFile 把所有输出文件放到一个文件里面

## 如何编写一个 .d.ts 的类型定义文件

使用 declare 声明。

- 定义全局变量 `declare var`
- 定义全局函数 `declare function`
- 声明一个对象 `declare namespace`, 以及对类进行类型定义, 以及命名空间的嵌套
- 函数重载
- 定义一个模块化的声明文件

当引入一个 cdn 的 jQuery 时:

```js
$(function () {
  $('body').html('<div>123</div>');
  new $.fn.init();
});
```

对应的声明文件:

```typescript
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}

declare function $(readyFunc: () => void): void;
declare function $(selector: string): JqueryInstance;

declare namespace $ {
  namespace fn {
    class init {}
  }
}
```

当使用 npm 的方式安装 jQuery, ts 的写法:

```typescript
declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }

  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;

  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $;
}
```

## 泛型中 keyof 语法的使用

```typescript
interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'dell',
  age: 18,
  gender: 'male',
});

const test = teacher.getInfo('name');
```

## 装饰器

### 类的装饰器

```typescript
function testDecorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'lee';
      getName() {
        return this.name;
      }
    };
  };
}

const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new Test('zhang');
```

### 方法的装饰器

- 普通方法, target 对应的是类的 prototype
- 静态方法, target 对应的是类的构造函数

```typescript
function getNameDeorator(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = true;
  descriptor.value = function {
    return 'descriptor'
  }
}
```

### 访问器的装饰器

get 或 set 只能选一个使用装饰器

### 属性的装饰器

返回的 descriptor 会替换原始属性的 descriptor.

当你使用属性装饰器, 想要对属性的值做修改实际上是做不到的.

### 参数的装饰器

## TypeScript 重构 axios

### 需求分析

#### Features

- 在浏览器端使用 XMLHttpRequest 对象通讯
- 支持 Promise API
- 支持请求和响应的拦截器
- 支持请求数据和响应数据的转换
- 支持请求的取消
- JSON 数据的自动转换
- 客户端防止 XSRF

这次重构不包括 node 中的实现。

### TypeScript library starter

开源的脚手架工具。

```shell
git clone https://github.com/alexjoverm/typescript-library-starter.git ts-axios
```

### 配置项目

在脚手架已给的 npm 包基础上扩展依赖：

```json
{
  "devDependencies": {
    "webpack": "^4.28.4",
    "webpack-dev-middleware": "^3.5.0",
    "webpack-hot-middleware": "^2.24.3",
    "ts-loader": "^5.3.3",
    "tslint-loader": "^3.5.4",
    "express": "^4.16.4",
    "body-parse": "^1.18.3"
  }
}
```

#### 处理请求 body 数据

普通对象的判断：

```js
function isPlainObject (val: any): val is Object {
    return toString.call(val) === '[object Object]'
}
```

#### 处理请求 header

post 请求 send `new URLSearchParams(paramsString)` data，浏览器会添加合适的 Content-Type `application/x-www-form-urlencoded;charset=UTF-8`

#### 获取响应数据

#### 处理响应 header

#### 处理响应 data

#### 错误处理

- 网络错误
- 超时错误
- 处理非 200 状态码

#### 错误信息增强

希望对外提供的信息不仅仅包含错误文本信息，还包括了请求对象配置`config`, 错误代码`code`, `XMLHttpRequest` 对象实例 `request` 以及自定义响应对象 `response`。

### 混合对象实现

### 函数重载

### 拦截器的实现

### 拦截器的链式调用

### 合并配置的设计与实现

### 静态方法扩展

### 取消功能的设计与实现

### withCredentials

安装 `cookie-parser` 这个 npm 包才能在 service 端通过 `req.cookies` 拿到 cookie

### XSRF 防御

### 上传和下载的进度监控

`connect-multiparty` npm 包

### HTTP 授权

`btoa` 方法可以将字符串按 base64 编码，`atob` 可以将 base64 编码的解码，浏览器端有`atob`方法，nodejs 中没有，需引入同名库。

### 自定义合法状态码

### 自定义参数序列化

`qs.stringify`,`URLSearchParams`

### baseURL

### 静态方法扩展 2

## 单元测试

### Jest 安装和配置

- transform 转换器的配置
- testEnvironment 测试环境
- testRegex 要测试文件的正则表达式
- moduleFileExtensions 模块文件扩展名
- coverageThreshold 测试覆盖率的阈值设定
- collectCoverageFrom 收集指定文件的测试覆盖率
- setupFilesAfterEnv 测试框架安装后立即执行的代码文件列表

### 辅助模块单元测试

### 请求模块单元测试

### headers 单元测试

## ts-axios 编译与发布

### 自动化部署

12.1 3：33

## ts 写个爬虫

[ts 写个爬虫](./web-scraping)

通过 superagent 去获取网页内容.

通过 cheerio 分析网页内容, 通过类 jQuery 的语法操作.

nodemon 监听文件变化 重新执行命令

concurrently 并行执行两个命令

### 使用 express 升级项目

问题 1: express 库的类型定义文件 .d.ts 文件类型描述不准确

问题 2: 当我使用中间件的时候, 对 req 或者 res 做了修改之后呢, 实际上其类型并不能改变

使用 body-parser 才能在 req 中获取 body

使用 cookie-session 做登录持久化存储

类型 echarts.EChartOption 来自 @types/echart 类型定义文件

## 总结

学习 typescript 推荐网站:

- 官网: <https://www.typescriptlang.org/>
- 抽象语法树的提示: <https://ts-ast-viewer.com/#>
