# crmForeEnd
## ES6
### let声明的变量是可变的，const声明的变量是不可变的。如果const声明的变量指向一个对象，那么该对象的属性是可变的
### 解构赋值
  ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
  如：let [a, b, c] = [1, 2, 3];
### 对象的简洁表示法
 ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
 const foo = 'bar';
 const baz = { foo };
 baz // {foo: "bar"}
 除了属性简写，方法也可以简写。
 const o = {
   method() {
     return "Hello!";
   }
 };
 // 等同于
 const o = {
   method: function() {
     return "Hello!";
   }
 }
### 箭头函数
 var f = v => v;
  // 等同于
 var f = function (v) {
   return v;
 };

 var f = () => 5;
 // 等同于
 var f = function () { return 5 };

 var sum = (num1, num2) => num1 + num2;
 // 等同于
 var sum = function(num1, num2) {
   return num1 + num2;
 };
### rest参数
  ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了
### 扩展运算符
 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列
    console.log(...[1, 2, 3])
    // 1 2 3
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    x // 1
    y // 2
    z // { a: 3, b: 4 }
## ES6 允许新建“类”（class）
### Promise 是 ES6 引入的封装异步操作的统一接口。它返回一个对象，包含了异步操作的信息
  Promise 本身是一个构造函数，提供了resolve和reject两个方法。
  一旦异步操作成功结束，就调用resolve方法，将 Promise 实例对象的状态改为resolved，一旦异步操作失败，就调用reject方法，将 Promise 实例的状态改成rejected
## ES6 意义最重大的语法变化，就是引入了模块（module）。
  一个模块内部，使用export命令输出对外的接口
  // lib/math.js
  export function sum(x, y) {
    return x + y;
  }
  export var pi = 3.141593;
  上面的模块输出了sum和pi两个接口。

  import命令用于引入该模块。
  // app.js
  import * as math from "lib/math";
  alert("2π = " + math.sum(math.pi, math.pi));
  上面代码中，*表示引入所有接口，也可以只引入指定的接口。

  // otherApp.js
  import {sum, pi} from "lib/math";
  alert("2π = " + sum(pi, pi));
