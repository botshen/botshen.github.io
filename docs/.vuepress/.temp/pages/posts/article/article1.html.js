export const data = JSON.parse("{\"key\":\"v-03842690\",\"path\":\"/posts/article/article1.html\",\"title\":\"文章 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"],\"summary\":\"文章 1 梨花梨花 标题 2 这里是内容。 标题 3 这里是内容。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/article/article1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"主题演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章 1\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"tag A\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"tag B\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-01T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"posts/article/article1.md\",\"localizedDate\":\"2022年1月1日\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
