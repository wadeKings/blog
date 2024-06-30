import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,a as i}from"./app-DviraATW.js";const c="/blog/assets/img_1-z-G6fyYm.png",n="/blog/assets/img_2-D93eSZnI.png",a="/blog/assets/img_3-fNaSxLOD.png",d={},l=i('<h1 id="命令安装nginx" tabindex="-1"><a class="header-anchor" href="#命令安装nginx"><span>命令安装<code>Nginx</code></span></a></h1><ol><li>下载安装:<code>sudo apt update``---&gt;``sudo apt install nginx -y</code></li><li>配置查看:<code>nginx -t``---</code>查看<code>Nginx</code>配置文件的路径</li><li>目录结构: <code>cd /etc/nginx``---&gt;``tree</code></li></ol><blockquote><p>安装<code>tree</code>: <code>sudo apt install tree</code><br> 补充说明: 这些配置文件的作用建议直接问<code>chatgpt</code></p></blockquote><ul><li><code>nginx.conf</code>: 主配置文件</li><li><code>conf.d</code>: 存放配置文件,这里的配置文件通常用于全局或通用配置</li><li><code>modules-available</code>: 存放可用的<code>Nginx</code>模块配置文件;每个模块都可以通过一个<code>.conf</code>文件进行配置</li><li><code>modules-enabled</code>: 存放已启用的<code>Nginx</code>模块的符号链接;通过将<code>modules-available</code>目录中的模块配置文件链接到<code>modules-enabled</code>目录,可以启用相应的模块</li><li><code>sites-available</code>: 存放可用的虚拟主机配置文件,每个网站的配置文件都存放在这里</li><li><code>sites-enabled</code>: 存放已启用的虚拟主机符号链接,通过将<code>sites-available</code>目录中的配置文件链接到<code>sites-enabled</code>目录中的配置文件,可以启用相应的虚拟主机</li><li><code>proxy_params</code>: 定义了代理服务器的参数,通常用于配置反向代理<br><img src="'+c+'" alt="img_1.png" loading="lazy"></li></ul><ol start="4"><li>查看执行用户: <code>ps aux | grep nginx</code>,若显示非<code>linux</code>系统上的用户则说明不正确,这将导致部署后访问显示<code>403</code><br><img src="'+n+'" alt="img_2.png" loading="lazy"></li></ol><blockquote><p>修改执行用户: <code>sudo micro /etc/nginx/nginx.conf``---&gt;</code>将<code>user</code>改成<code>root``---&gt;</code>保存退出<br><img src="'+a+'" alt="img_3.png" loading="lazy"></p></blockquote><h1 id="docker安装nginx" tabindex="-1"><a class="header-anchor" href="#docker安装nginx"><span><code>docker</code>安装<code>Nginx</code></span></a></h1><ol><li>参考: <code>https://blog.csdn.net/BThinker/article/details/123507820</code></li></ol>',8),r=[l];function s(g,p){return t(),o("div",null,r)}const x=e(d,[["render",s],["__file","Nginx.html.vue"]]),h=JSON.parse('{"path":"/LinuxService/Nginx.html","title":"命令安装Nginx","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-06-30T00:00:00.000Z","category":["Nginx"],"tag":["红","圆"],"star":true,"sticky":true,"description":"命令安装Nginx 下载安装:sudo apt update``--->``sudo apt install nginx -y 配置查看:nginx -t``---查看Nginx配置文件的路径 目录结构: cd /etc/nginx``--->``tree 安装tree: sudo apt install tree 补充说明: 这些配置文件的作用建议直...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/LinuxService/Nginx.html"}],["meta",{"property":"og:site_name","content":"柳衣白卿"}],["meta",{"property":"og:title","content":"命令安装Nginx"}],["meta",{"property":"og:description","content":"命令安装Nginx 下载安装:sudo apt update``--->``sudo apt install nginx -y 配置查看:nginx -t``---查看Nginx配置文件的路径 目录结构: cd /etc/nginx``--->``tree 安装tree: sudo apt install tree 补充说明: 这些配置文件的作用建议直..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-30T11:19:49.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"命令安装Nginx"}],["meta",{"property":"article:author","content":"柳衣白卿"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2024-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-30T11:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令安装Nginx\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/cover2.jpg\\"],\\"datePublished\\":\\"2024-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-30T11:19:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"柳衣白卿\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1719746389000,"updatedTime":1719746389000,"contributors":[{"name":"wadeKings","email":"worldkingscoding@gmail.com","commits":1}]},"readingTime":{"minutes":1.25,"words":376},"filePathRelative":"LinuxService/Nginx.md","localizedDate":"2024年6月30日","excerpt":"\\n<ol>\\n<li>下载安装:<code>sudo apt update``---&gt;``sudo apt install nginx -y</code></li>\\n<li>配置查看:<code>nginx -t``---</code>查看<code>Nginx</code>配置文件的路径</li>\\n<li>目录结构: <code>cd /etc/nginx``---&gt;``tree</code></li>\\n</ol>\\n<blockquote>\\n<p>安装<code>tree</code>: <code>sudo apt install tree</code><br>\\n补充说明: 这些配置文件的作用建议直接问<code>chatgpt</code></p>\\n</blockquote>","autoDesc":true}');export{x as comp,h as data};
