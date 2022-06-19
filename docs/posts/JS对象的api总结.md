---
lang: zh-CN
title: JS对象的方法总结
description: 总结一下常用的js对象的方法
---

## Object.assign()

Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）和自有（Object.hasOwnProperty() 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。

```js
Object.assign(target, ...sources);
```

### 参数

- target
  目标对象，接收源对象属性的对象，也是修改后的返回值。
- sources
  源对象，包含将被合并的属性。

### 返回值

目标对象。

### 例子

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);

// 现在 user = { name: "John", canView: true, canEdit: true }
```

- 如果被拷贝的属性的属性名已经存在，那么它会被覆盖：

```js
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // 现在 user = { name: "Pete" }
```

- 这种方式在属性值都是基本类型的时候是深拷贝
- 如果属性值有引用类型的话，就还是浅拷贝
