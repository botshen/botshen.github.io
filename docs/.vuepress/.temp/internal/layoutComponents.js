import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/code/vuepress-theme-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.84/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("E:/code/vuepress-theme-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.84/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("E:/code/vuepress-theme-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.84/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("E:/code/vuepress-theme-hope/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.84/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
