import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as d,a as s}from"./app-BY-VtdH8.js";const t="/blog/assets/images/LinuxService/img_35.png",n={},o=s(`<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span><code>Redis</code></span></a></h1><h1 id="命令安装redis" tabindex="-1"><a class="header-anchor" href="#命令安装redis"><span>命令安装<code>Redis</code></span></a></h1><ol><li>下载安装：<code>sudo apt update\`\`---&gt;\`\`sudo apt install redis-server\`\`---</code>默认后台运行和自动启动</li><li>运行检查：<code>sudo systemctl status redis-server</code></li><li>权限升级：<code>sudo -i\`\`---</code>避免权限不够,若想退出,则<code>exit/Ctrl+D</code></li><li>定义配置：<code>cd /etc/redis\`\`---&gt;</code>sudo micro redis.conf\`\`---<code>修改</code>redis.conf\`的一些配置</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 设置允许访问的地址，默认是127.0.0.1 -1::1，这设置只能在本地访问
# 修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0
bind 0.0.0.0
# 设置密码，设置后访问Redis必须输入密码,默认被注释
requirepass liu
# 监听的端口
port 6379
# 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志,持久化等文件会保存在这个目录
dir .
# 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15
databases 1
# 设置redis能够使用的最大内存
maxmemory 512mb
# 日志文件，默认为空，不记录日志，可以指定日志文件名
logfile &quot;redis.log&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>配置生效：<code>sudo systemctl restart redis-server</code></li></ol><h1 id="使用redis" tabindex="-1"><a class="header-anchor" href="#使用redis"><span>使用<code>Redis</code></span></a></h1><ol><li>客户端连接：<code>redis-cli -h 127.0.0.1 -p 6379 -a 123321\`\`---</code>默认连接\`</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># -h: 指定要连接的redis节点的IP地址为127.0.0.1,默认127.0.0.1
# -p: 指定要连接的redis节点的端口为6379，默认6379
# -a: 指定redis的访问密码为123321
# redis-cli -h 127.0.0.1  -p 6379 -a 123321 等价 redis-cli -a 123321   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>心跳测试：<code>ping</code>命令用与<code>redis</code>服务端做心跳测试,服务端正常会返回<code>pong</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>停止运行：<code>redis-cli -u 123321 shutdown\`\`---</code>指定密码停止使用</li></ol><h1 id="docker安装redis" tabindex="-1"><a class="header-anchor" href="#docker安装redis"><span><code>Docker</code>安装<code>Redis</code></span></a></h1><ol><li>拉取镜像：<code>sudo docker pull redis:7.2.5</code></li><li>创建目录：创建之后的目录结构如下，这里的<code>.</code>表示当前用户的根目录</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.
└── programming
    └── db
        ├── mysql
        │   ├── conf
        │   └── docker-compose.yml
        └── redis
            ├── conf
            │   └── redis.conf
            ├── data
            │   ├── appendonlydir  [error opening dir]
            │   └── dump.rdb
            └── docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>下载配置：点击<code>https://redis.io/docs/latest/operate/oss_and_stack/management/config/</code> <code>---&gt;</code> 下翻到如图位置<code>---&gt;</code> 选择7.2版本并复制粘贴到<code>redis.conf</code><br><img src="`+t+`" alt="img.png" loading="lazy"></li><li><code>Redis</code>配置: 修改<code>redis.conf</code>中的<code>bind</code>和<code>requirepass</code>属性</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>bind 0.0.0.0
requirepass wo372159qwa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>Docker-compose</code>配置: 复制粘贴到<code>docker-compose.yml</code>中</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;3.0&#39;
services:
  redis:
    image: redis:7.2.5
    container_name: redis
    restart: unless-stopped
    privileged: true
    ports:
      - &quot;6379:6379&quot;
    volumes:
      - /home/admin/programming/db/redis/conf/redis.conf:/etc/redis/redis.conf
      - /home/admin/programming/db/redis/data:/data
    command: [&quot;redis-server&quot;, &quot;/etc/redis/redis.conf&quot;, &quot;--appendonly&quot;, &quot;yes&quot;, &quot;--requirepass&quot;, &quot;wo372159qwa&quot;]
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>启动服务：<code>sudo docker-compose -f /home/admin/programming/db/redis/docker-compose.yml up -d</code></li><li>查看日志：<code>sudo docker logs -f redis</code></li><li>参考文章：<code>https://cloud.tencent.com/developer/article/2169945</code></li></ol><h1 id="reids客户端" tabindex="-1"><a class="header-anchor" href="#reids客户端"><span><code>Reids</code>客户端</span></a></h1><ol><li><code>Tiny RDM</code>：<code>https://redis.tinycraft.cc/zh/</code></li></ol>`,21),a=[o];function r(c,l){return i(),d("div",null,a)}const v=e(n,[["render",r],["__file","Redis.html.vue"]]),p=JSON.parse('{"path":"/LinuxService/Redis.html","title":"Redis","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-06-30T00:00:00.000Z","category":["Redis"],"tag":["红","圆"],"star":true,"sticky":true,"description":"Redis 命令安装Redis 下载安装：sudo apt update``--->``sudo apt install redis-server``---默认后台运行和自动启动 运行检查：sudo systemctl status redis-server 权限升级：sudo -i``---避免权限不够,若想退出,则exit/Ctrl+D 定义配置：...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/LinuxService/Redis.html"}],["meta",{"property":"og:site_name","content":"柳衣白卿"}],["meta",{"property":"og:title","content":"Redis"}],["meta",{"property":"og:description","content":"Redis 命令安装Redis 下载安装：sudo apt update``--->``sudo apt install redis-server``---默认后台运行和自动启动 运行检查：sudo systemctl status redis-server 权限升级：sudo -i``---避免权限不够,若想退出,则exit/Ctrl+D 定义配置：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-13T06:29:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"Redis"}],["meta",{"property":"article:author","content":"柳衣白卿"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2024-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-13T06:29:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_35.png\\"],\\"datePublished\\":\\"2024-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-13T06:29:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"柳衣白卿\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1719752857000,"updatedTime":1720852153000,"contributors":[{"name":"wadeKings","email":"worldkingscoding@gmail.com","commits":7}]},"readingTime":{"minutes":2.08,"words":625},"filePathRelative":"LinuxService/Redis.md","localizedDate":"2024年6月30日","excerpt":"\\n<h1>命令安装<code>Redis</code></h1>\\n<ol>\\n<li>下载安装：<code>sudo apt update``---&gt;``sudo apt install redis-server``---</code>默认后台运行和自动启动</li>\\n<li>运行检查：<code>sudo systemctl status redis-server</code></li>\\n<li>权限升级：<code>sudo -i``---</code>避免权限不够,若想退出,则<code>exit/Ctrl+D</code></li>\\n<li>定义配置：<code>cd /etc/redis``---&gt;</code>sudo micro redis.conf``---<code>修改</code>redis.conf`的一些配置</li>\\n</ol>","autoDesc":true}');export{v as comp,p as data};
