import { defineClientConfig } from "@vuepress/client";
import Presentation from "E:/code/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "E:/code/vuepress-theme-hope/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.84/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});