---
lang: zh-CN
title: Map的用法
description: ""
---

## Map 的遍历 api

```javascript
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) {
  // 与 recipeMap.entries() 相同
  alert(entry); // cucumber,500 (and so on)
}
```
