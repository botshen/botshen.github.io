import { defineClientConfig } from "@vuepress/client";
import Presentation from "/Users/shenxin/my-code/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/shenxin/my-code/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/shenxin/my-code/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Presentation", Presentation);
    
  }
});