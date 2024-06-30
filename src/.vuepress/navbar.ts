import { navbar } from "vuepress-theme-hope";
export default navbar([
  "/", // 对应首页/src/README.md
  {
    text: 'Java',
    icon: "JAVA",
    link: '/Java/' // 对应src/Java/README.md
  },
  {
    text: 'JavaWeb',
    icon: "web",
    link: '/JavaWeb/'
  },
  {
    text: 'JavaDesktop',
    icon: "Desktop",
    link: '/JavaDesktop/'
  },
  {
    text: 'FrontEnd',
    icon: "web",
    link: '/FrontEnd/'
  },
  {
    text: 'FrontEndWeb',
    icon: "website",
    link: '/FrontEndWeb/'
  },
  {
    text: 'LinuxService',
    icon: "web",
    link: '/LinuxService/'
  },
  {
    text: 'WindowsSoftWare',
    icon: "web",
    link: '/WindowsSoftWare/'
  },
]);
