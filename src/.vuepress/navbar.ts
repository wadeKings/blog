import { navbar } from "vuepress-theme-hope";
export default navbar([
  "/", // 对应首页/src/README.md
  {
    text: 'Java',
    icon: "JAVA",
    link: '/Java/' // 对应src/Java/README.md
  },
  {
    text: 'Desktop',
    icon: "Desktop",
    link: '/Desktop/'
  },
  {
    text: 'FrontEnd',
    icon: "web",
    link: '/FrontEnd/'
  },
  {
    text: 'Python',
    icon: "website",
    link: '/Python/'
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
