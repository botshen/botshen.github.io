---
lang: zh-CN
title: 手写EventHub
description: 手写EventHub
---


## 什么是 EventHub

- 用来多个模块之间进行通信的，也叫做发布订阅模式
- 两个 JS 文件想要互相调用函数怎么实现呢？不能使用全局变量
- 相当于一个全局对象，一个 js 文件想要调用另一个文件的函数的时候就触发事件告诉 EventHub（使用 emit）
- EventHub 监听了这个事件，在第二个文件注册/监听事件（使用 on），当监听文件 1 触发的事件的时候做事

## 解题思路

- 确定 API
- 添加测试用例
- 让测试用例通过
- 重构代码

## 确定 API

- EventHub#on
- EventHub#off
- EventHub#emit

## 环境安装

- `yarn global add ts-node@8.3.0`

## 代码

```typescript
// 是一个类
class EventHub {
  // 缓存事件对象，key是事件名，value是事件回调
  private cache: { [key: string]: Array<(data: unknown) => void> } = {};
  //
  on(eventName: string, fn: (data: unknown) => void) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName: string, data?: unknown) {
    // 在缓存里找，如果有就遍历调用函数
    // data 是触发事件的时候传的参数
    (this.cache[eventName] || []).forEach((fn) => fn(data));
  }
  off(eventName: string, fn: (data: unknown) => void) {
    let index = indexOf(this.cache[eventName], fn);
    if (index === -1) return;
    this.cache[eventName].splice(index, 1);
  }
}

export default EventHub;

/**
 * 帮助函数 indexOf
 * @param array
 * @param item
 */
function indexOf(array, item) {
  if (array === undefined) return -1;

  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      index = i;
      break;
    }
  }
  return index;
}
```

```typescript
import EventHub from "../src/index";

type TestCase = (message: string) => void;

const test1: TestCase = (message) => {
  // 创建实例
  const eventHub = new EventHub();
  // 断言是个对象，如果是真的什么也不做，如果是假的会报错
  console.assert(eventHub instanceof Object === true, "eventHub 是个对象");
  console.log(message);
};

const test2: TestCase = (message) => {
  const eventHub = new EventHub();
  // on emit
  let called = false;
  eventHub.on("xxx", (y) => {
    // 当回调执行了called变为true
    called = true;
    console.assert(y[0] === "今天林志玲结婚了");
    console.assert(y[1] === "言承旭无话可说");
  });
  eventHub.emit("xxx", ["今天林志玲结婚了", "言承旭无话可说"]);
  // 此处断言被调用了
  console.assert(called);
  console.log(message);
};

const test3: TestCase = (message) => {
  const eventHub = new EventHub();
  let called = false;
  const fn1 = () => {
    called = true;
  };

  eventHub.on("yyy", fn1);
  eventHub.off("yyy", fn1);
  eventHub.emit("yyy");
  console.assert(called === false);
  console.log(message);
};

test1("EventHub 可以创建对象");
test2(".on 了之后 .emit，会触发 .on 的函数");
test3(".off 有用");
```
