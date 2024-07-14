import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as i,a as t}from"./app-Dm3N2hMD.js";const l="/blog/assets/images/LinuxService/img_36.png",s={},c=t('<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span><code>Mysql</code></span></a></h1><h1 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span><code>Docker</code>安装</span></a></h1><ol><li>参考文章：<code>https://dev.mysql.com/doc/refman/9.0/en/docker-mysql-getting-started.html#docker-starting-mysql-server</code></li></ol><h2 id="获取令牌" tabindex="-1"><a class="header-anchor" href="#获取令牌"><span>获取令牌</span></a></h2><ol><li>点击网址：<code>https://container-registry.oracle.com/</code></li><li>登录网站：点击右上角的<code>Sign in</code>按钮并登录</li><li>生成密钥：点击账号下拉框中的<code>Auth Token</code>按钮，然后点击<code>Generate Secret Key</code>按钮并保存<br><img src="'+l+`" alt="img.png" loading="lazy"></li></ol><h2 id="安装下载" tabindex="-1"><a class="header-anchor" href="#安装下载"><span>安装下载</span></a></h2><ol><li>注册仓库：输入<code>docker login container-registry.oracle.com</code>，然后输入账号用户名和之前生成的令牌</li><li>拉取镜像：<code>sudo docker pull container-registry.oracle.com/mysql/community-server:9.0</code></li><li>创建目录：创建之后的目录结构如下，这里的<code>.</code>表示当前用户的根目录；使用的阿里云服务器</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
└── programming
    └── db
        ├── mysql
        │   └── docker-compose.yml
        │   └── data
        │   └── conf
        │   │   └── my.cnf    
        │   └── log
        └── redis
            ├── conf
            │   └── redis.conf
            ├── data
            │   ├── appendonlydir  [error opening dir]
            │   └── dump.rdb
            └── docker-compose.yml  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>my.cnf</code>配置: 复制粘贴到<code>my.cnf</code>中</li></ol><blockquote><p>补充说明：若配置<code>Docker-compose.yml</code>时，不指定<code>volumes</code>，则可忽略<code>my.cnf</code>配置</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[mysqld]
user=mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>Docker-compose</code>配置: 复制粘贴到<code>docker-compose.yml</code>中</li></ol><blockquote><p>数据持久化参考：<code>https://dev.mysql.com/doc/refman/9.0/en/docker-mysql-more-topics.html#docker-persisting-data-configuration</code></p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;3.0&#39;
services:
  mysql:
    image: container-registry.oracle.com/mysql/community-server:9.0
    container_name: mysql
    ports:
      - &quot;3306:3306&quot;
    volumes:
      - /home/admin/programming/db/mysql/conf/my.cnf:/etc/my.cnf
      - /home/admin/programming/db/mysql/logs:/var/logs
      - /home/admin/programming/db/mysql/data:/var/lib/mysql
    restart: unless-stopped
    privileged: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>启动容器：<code>sudo docker-compose -f /home/admin/programming/db/mysql/docker-compose.yml up -d</code></li></ol><blockquote><p>停止容器：<code>sudo docker stop mysql</code><br> 删除容器：<code>sudo docker rm mysql</code></p></blockquote><ol start="6"><li>查看日志：<code>sudo docker logs mysql</code></li><li>查看挂载：<code>sudo docker inspect mysql</code></li><li>查看密码：<code>sudo docker logs mysql 2&gt;&amp;1 | grep GENERATED</code></li><li>登录数据库：<code>sudo docker exec -it mysql mysql -uroot -p</code>，输入刚才查看的密码</li><li>修改密码：<code>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;wo372159qwa&#39;;</code></li><li>获取容器<code>Shell</code>：<code>sudo docker exec -it mysql bash</code></li></ol><h2 id="远程连接" tabindex="-1"><a class="header-anchor" href="#远程连接"><span>远程连接</span></a></h2><ol><li>登录数据库：<code>sudo docker exec -it mysql mysql -uroot -p</code></li><li>切换数据库：<code>use mysql</code></li><li>查看用户：<code>select host,user from user;</code></li><li>允许远程：<code>update user set host = &#39;%&#39; where user = &#39;root&#39;;</code></li><li>刷新权限：<code>flush privileges;</code></li><li>参考文章：<code>https://blog.csdn.net/mazaiting/article/details/106661158</code></li></ol>`,19),n=[c];function d(r,a){return o(),i("div",null,n)}const g=e(s,[["render",d],["__file","Mysql.html.vue"]]),u=JSON.parse('{"path":"/LinuxService/Mysql.html","title":"Mysql","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-06-30T00:00:00.000Z","category":["Redis"],"tag":["红","圆"],"star":true,"sticky":true,"description":"Mysql Docker安装 参考文章：https://dev.mysql.com/doc/refman/9.0/en/docker-mysql-getting-started.html#docker-starting-mysql-server 获取令牌 点击网址：https://container-registry.oracle.com/ 登录网站：...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/LinuxService/Mysql.html"}],["meta",{"property":"og:site_name","content":"柳衣白卿"}],["meta",{"property":"og:title","content":"Mysql"}],["meta",{"property":"og:description","content":"Mysql Docker安装 参考文章：https://dev.mysql.com/doc/refman/9.0/en/docker-mysql-getting-started.html#docker-starting-mysql-server 获取令牌 点击网址：https://container-registry.oracle.com/ 登录网站：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-14T07:07:36.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"Mysql"}],["meta",{"property":"article:author","content":"柳衣白卿"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2024-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-14T07:07:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_36.png\\"],\\"datePublished\\":\\"2024-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-14T07:07:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"柳衣白卿\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"获取令牌","slug":"获取令牌","link":"#获取令牌","children":[]},{"level":2,"title":"安装下载","slug":"安装下载","link":"#安装下载","children":[]},{"level":2,"title":"远程连接","slug":"远程连接","link":"#远程连接","children":[]}],"git":{"createdTime":1720852153000,"updatedTime":1720940856000,"contributors":[{"name":"wadeKings","email":"worldkingscoding@gmail.com","commits":2}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"LinuxService/Mysql.md","localizedDate":"2024年6月30日","excerpt":"\\n<h1><code>Docker</code>安装</h1>\\n<ol>\\n<li>参考文章：<code>https://dev.mysql.com/doc/refman/9.0/en/docker-mysql-getting-started.html#docker-starting-mysql-server</code></li>\\n</ol>\\n<h2>获取令牌</h2>\\n<ol>\\n<li>点击网址：<code>https://container-registry.oracle.com/</code></li>\\n<li>登录网站：点击右上角的<code>Sign in</code>按钮并登录</li>\\n<li>生成密钥：点击账号下拉框中的<code>Auth Token</code>按钮，然后点击<code>Generate Secret Key</code>按钮并保存<br>\\n<img src=\\"/assets/images/LinuxService/img_36.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n</ol>","autoDesc":true}');export{g as comp,u as data};
