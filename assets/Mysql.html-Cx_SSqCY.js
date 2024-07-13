import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as o}from"./app-ozuC1_0s.js";const s={},t=o(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span><code>Mysql</code></span></a></h1><h1 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span><code>Docker</code>安装</span></a></h1><ol><li>拉取镜像：<code>sudo docker pull mysql:8.0.20</code></li><li>创建目录：创建之后的目录结构如下，这里的<code>.</code>表示当前用户的根目录；使用的阿里云服务器</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
└── programming
    └── db
        ├── mysql
        │   └── docker-compose.yml
        │   └── data
        │   └── conf
        │   └── log
        └── redis
            ├── conf
            │   └── redis.conf
            ├── data
            │   ├── appendonlydir  [error opening dir]
            │   └── dump.rdb
            └── docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>Docker-compose</code>配置: 复制粘贴到<code>docker-compose.yml</code>中</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;3.0&#39;
services:
  mysql:
    image: mysql:8.0.20
    container_name: mysql
    ports:
      - &quot;3306:3306&quot;
    environment:
      MYSQL_ROOT_PASSWORD: &quot;wo372159qwa&quot;
    restart: always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动容器：<code>sudo docker-compose -f /home/admin/programming/db/mysql/docker-compose.yml up -d</code></li><li>复制配置：<code>sudo docker cp mysql:/etc/mysql/. /home/admin/programming/db/mysql/conf</code></li><li>停止删除：<code>sudo docker stop mysql</code> <code>---&gt;</code> <code>sudo docker rm mysql</code></li><li><code>Docker-compose</code>配置: 复制粘贴到<code>docker-compose.yml</code>中</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> version: &#39;3.0&#39;
 services:
   mysql:
     image: mysql:8.0.20
     container_name: mysql
     ports:
       - &quot;3306:3306&quot;
     volumes:
       - /home/admin/programming/db/mysql/conf:/etc/mysql
       - /home/admin/programming/db/mysql/logs:/logs
       - /home/admin/programming/db/mysql/data:/var/lib/mysql
       - /etc/localtime:/etc/localtime
     environment:
       MYSQL_ROOT_PASSWORD: 123456
     restart: unless-stopped
     privileged: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>启动容器：<code>sudo docker-compose -f /home/admin/programming/db/mysql/docker-compose.yml up -d</code></li><li>参考文章：<code>https://blog.csdn.net/u014576291/article/details/105890286</code></li></ol>`,9),d=[t];function l(r,a){return i(),n("div",null,d)}const p=e(s,[["render",l],["__file","Mysql.html.vue"]]),v=JSON.parse('{"path":"/LinuxService/Mysql.html","title":"Mysql","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-06-30T00:00:00.000Z","category":["Redis"],"tag":["红","圆"],"star":true,"sticky":true,"description":"Mysql Docker安装 拉取镜像：sudo docker pull mysql:8.0.20 创建目录：创建之后的目录结构如下，这里的.表示当前用户的根目录；使用的阿里云服务器 Docker-compose配置: 复制粘贴到docker-compose.yml中 启动容器：sudo docker-compose -f /home/admin/pr...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/LinuxService/Mysql.html"}],["meta",{"property":"og:site_name","content":"柳衣白卿"}],["meta",{"property":"og:title","content":"Mysql"}],["meta",{"property":"og:description","content":"Mysql Docker安装 拉取镜像：sudo docker pull mysql:8.0.20 创建目录：创建之后的目录结构如下，这里的.表示当前用户的根目录；使用的阿里云服务器 Docker-compose配置: 复制粘贴到docker-compose.yml中 启动容器：sudo docker-compose -f /home/admin/pr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-13T06:29:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"Mysql"}],["meta",{"property":"article:author","content":"柳衣白卿"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2024-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-13T06:29:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/cover2.jpg\\"],\\"datePublished\\":\\"2024-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-13T06:29:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"柳衣白卿\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1720852153000,"updatedTime":1720852153000,"contributors":[{"name":"wadeKings","email":"worldkingscoding@gmail.com","commits":1}]},"readingTime":{"minutes":0.75,"words":224},"filePathRelative":"LinuxService/Mysql.md","localizedDate":"2024年6月30日","excerpt":"\\n<h1><code>Docker</code>安装</h1>\\n<ol>\\n<li>拉取镜像：<code>sudo docker pull mysql:8.0.20</code></li>\\n<li>创建目录：创建之后的目录结构如下，这里的<code>.</code>表示当前用户的根目录；使用的阿里云服务器</li>\\n</ol>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>.\\n└── programming\\n    └── db\\n        ├── mysql\\n        │   └── docker-compose.yml\\n        │   └── data\\n        │   └── conf\\n        │   └── log\\n        └── redis\\n            ├── conf\\n            │   └── redis.conf\\n            ├── data\\n            │   ├── appendonlydir  [error opening dir]\\n            │   └── dump.rdb\\n            └── docker-compose.yml\\n</code></pre></div>","autoDesc":true}');export{p as comp,v as data};
