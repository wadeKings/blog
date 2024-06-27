import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  title: "柳衣白卿",
  description: "柳衣白卿",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
