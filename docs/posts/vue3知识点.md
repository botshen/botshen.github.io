---
lang: zh-CN
title: vue3新知识记录
description: "vue3 新知识记录"
---

## template语法

- 当写 setup的时候 在script里面需要加value

```vue

<script setup lang="ts">
import {ref} from "vue";

const count = ref(0)
const onClick = () => {
  count.value++
}
</script>
<template>
  <div>
    {{ count }}
  </div>
  <div>
    <button @click="count++">+1</button>
    <button @click="onClick">+1</button>
  </div>
</template>

<style>

</style>

```

## tsx 语法

```typescript jsx
import {defineComponent} from "vue";

export const App2 = defineComponent({
    setup() {
        return () => (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
})

```

- 但是不能识别需要安装插件

```typescript jsx
import {createApp} from 'vue'

import {App2} from "./App2";

createApp(App2).mount('#app')
```

- 运行 ` pnpm i -D @vitejs/plugin-vue-jsx`

```typescript jsx
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// vueJsx 插件
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
    // base: '/mangosteen/dist/',
    plugins: [
        vue(),
        vueJsx({
            transformOn: true,
            mergeProps: true
        })
    ],
})

```

```typescript jsx
import {defineComponent, ref} from "vue";

export const App = defineComponent({
    setup() {
        const refCount = ref(0);
        const onClick = () => {
            refCount.value += 1
        }
        return () =>
            <>
                <div>
                    {refCount.value}
                </div>
                <div>
                    <button onClick={onClick}>+1</button>
                </div>
            </>
    }
})


```
