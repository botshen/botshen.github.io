import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";


export default defineUserConfig({
  lang: "zh-CN",
  title: "♥博客",
  description: "好记性不如烂笔头",

  base: "/",

  theme,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
        
      }
    }),
  ],
});
