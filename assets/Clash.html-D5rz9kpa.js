import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as s,a as t}from"./app-DrLm0ecY.js";const o="/blog/assets/images/LinuxService/img_22.png",a="/blog/assets/images/LinuxService/img_16.png",c="/blog/assets/images/LinuxService/img_17.png",n="/blog/assets/images/LinuxService/img_18.png",g="/blog/assets/images/LinuxService/img_19.png",l="/blog/assets/images/LinuxService/img_20.png",r="/blog/assets/images/LinuxService/img_21.png",d="/blog/assets/images/LinuxService/img_23.png",m="/blog/assets/images/LinuxService/img_24.png",p="/blog/assets/images/LinuxService/img_25.png",h="/blog/assets/images/LinuxService/img_26.png",u="/blog/assets/images/LinuxService/img_27.png",b="/blog/assets/images/LinuxService/img_28.png",v="/blog/assets/images/LinuxService/img_29.png",_="/blog/assets/images/LinuxService/img_30.png",x="/blog/assets/images/LinuxService/img_31.png",y="/blog/assets/images/LinuxService/img_32.png",S="/blog/assets/images/LinuxService/img_33.png",L="/blog/assets/images/LinuxService/img_34.png",f={},z=t('<h1 id="clash" tabindex="-1"><a class="header-anchor" href="#clash"><span><code>Clash</code></span></a></h1><h1 id="图像界面安装" tabindex="-1"><a class="header-anchor" href="#图像界面安装"><span>图像界面安装</span></a></h1><ol><li>下载安装：点击<code>https://dl.trojan-cdn.com/trojan/linux/</code> <code>---&gt;</code>选择<code>x64</code>版本<br><img src="'+o+'" alt="img.png" loading="lazy"></li><li>文件解压：解压下载的安装包</li><li>目录命名：将解压所得的目录重命名为<code>clash</code><br><img src="'+a+'" alt="img.png" loading="lazy"></li><li><code>clash</code>运行：进入<code>clash</code>目录<code>---&gt;</code>双击<code>cfw``---``clash</code>的启动文件<br><img src="'+c+'" alt="img.png" loading="lazy"></li><li>代理设置：点击树形图标<code>---&gt;</code>点击设置图标<code>---&gt;</code>点击网络<code>---&gt;</code>点击代理<code>---&gt;</code>开启代理<code>---&gt;</code>设置为手动<code>---&gt;</code>照图填写<code>---&gt;</code>保存<br><img src="'+n+'" alt="img.png" loading="lazy"><br><img src="'+g+'" alt="img.png" loading="lazy"><br><img src="'+l+'" alt="img.png" loading="lazy"><br><img src="'+r+'" alt="img.png" loading="lazy"></li></ol><blockquote><p>参考视频：<code>https://www.youtube.com/watch?v=pTlso8m_iRk&amp;t=325s</code></p></blockquote><h1 id="命令界面安装" tabindex="-1"><a class="header-anchor" href="#命令界面安装"><span>命令界面安装</span></a></h1><ol><li>安装参考：<code>https://www.joeyne.cool/http/proxy/ubuntu-%e5%ae%89%e8%a3%85clash%e5%b9%b6%e9%85%8d%e7%bd%ae%e5%bc%80%e6%9c%ba%e5%90%af%e5%8a%a8/</code></li><li>安装下载：点击<code>https://www.clash.la/releases/</code> <code>---&gt;</code>翻到内核<code>---&gt;</code>选择<code>clash-linux-amd64</code><br><img src="'+d+'" alt="img.png" loading="lazy"><br><img src="'+m+'" alt="img.png" loading="lazy"><br><img src="'+p+'" alt="img.png" loading="lazy"></li><li>上传文件：使用<code>xshell</code>连接到云服务器,用<code>xftp</code>传输<code>clash</code>文件到<code>/usr/local/bin</code>目录</li><li>权限赋予：用<code>xftp</code>给<code>clash</code>文件添加所有权限<br><img src="'+h+'" alt="img.png" loading="lazy"><br><img src="'+u+'" alt="img.png" loading="lazy"></li><li>下载文件：点击<code>https://cdn.jsdelivr.net/gh/Dreamacro/maxmind-geoip@release/Country.mmdb</code> <code>---&gt;</code>这将下载<code>Country.mmdb</code>文件<code>---&gt;</code>使用<code>xftp</code>上传到<code>/home/admin/.config/clash</code>目录<br><img src="'+b+'" alt="img.png" loading="lazy"></li><li>获取文件：打开<code>windows</code>下安装的<code>clash``---&gt;</code>找到使用的配置文件<code>---&gt;</code>点击<code>show in folder``---&gt;</code>将选中的文件命名为<code>config.yaml``---&gt;</code>使用<code>xftp</code>上传到<code>/home/admin/.config/clash</code>目录</li></ol><blockquote><p>补充说明：<code>admin</code>是用户名，需要换成自己的用户名</p></blockquote><p><img src="'+v+'" alt="img.png" loading="lazy"><br><img src="'+_+'" alt="img.png" loading="lazy"><br><img src="'+x+'" alt="img.png" loading="lazy"><br> 7. 运行<code>clash</code>：<code>cd /usr/local/bin</code> <code>---&gt;</code> <code>clash</code><br><img src="'+y+`" alt="img.png" loading="lazy"><br> 8. 新建复制：<code>sudo micro /etc/systemd/system/clash.service/clash.service\`\`---&gt;</code>复制下列内容到<code>clash.service\`\`---&gt;\`\`ctrl+s</code>保存<code>---&gt;\`\`ctrl+q</code>退出</p><blockquote><p>补充说明：从这一步开始是配置<code>clash</code>自动启动</p></blockquote><blockquote><p>参考文章：<code>https://afeng616.github.io/clash-for-ubuntu/</code></p></blockquote><blockquote><p>注意事项：<code>admin</code>是用户名，需要换成自己的用户名</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Unit]
Description=clash 

[Service]
Type=simple # simple表示该服务是一个简单的服务,systemd 将认为一旦 ExecStart 启动,该服务就已经启动完毕，不会进行进一步的处理
User=root # root 表示该服务将以 root 用户身份运行
ExecStart=/usr/local/bin/clash -d /home/admin/.config/clash 
# ExecStart 指定启动服务的命令,这里是/usr/local/bin/clash命令
# 并用参数 -d 指定clash配置文件config.yml所在的目录
Restart=on-failure # on-failure 指示 systemd 在服务失败时自动重新启动服务

[Install]
WantedBy=multi-user.target # 指定该服务在多用户模式下启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>命令执行：依次执行下列命令，结果如下图所示</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># reload: 刷新守护进程,</span>
<span class="token comment"># enable: 开启自启动</span>
<span class="token comment"># start: 启动</span>
<span class="token comment"># status: 查看状态</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clash
<span class="token function">sudo</span> systemctl start clash
<span class="token function">sudo</span> systemctl status clash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+'" alt="img.png" loading="lazy"><br> 10. 打开添加：执行<code>sudo micro ~/.bashrc``---&gt;</code>在打开的文件末尾添加<code>---&gt;``ctrl+s</code>保存<code>---&gt;``ctrl+q</code>退出</p><blockquote><p>补充说明：从这一步开始是配置终端走代理</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export http_proxy=&#39;http://localhost:7890&#39;\nexport https_proxy=&#39;http://localhost:7890&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>生效测试：执行<code>source ~/.bashrc``---&gt;</code>执行<code>wget www.google.com</code>，如下则成功<br><img src="'+L+'" alt="img.png" loading="lazy"></li></ol>',18),w=[z];function k(C,q){return i(),s("div",null,w)}const Z=e(f,[["render",k],["__file","Clash.html.vue"]]),D=JSON.parse('{"path":"/LinuxService/Clash.html","title":"Clash","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-06-30T00:00:00.000Z","category":["Clash"],"tag":["红","圆"],"star":true,"sticky":true,"description":"Clash 图像界面安装 下载安装：点击https://dl.trojan-cdn.com/trojan/linux/ --->选择x64版本 img.png 文件解压：解压下载的安装包 目录命名：将解压所得的目录重命名为clash img.png clash运行：进入clash目录--->双击cfw``---``clash的启动文件 img.png ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/LinuxService/Clash.html"}],["meta",{"property":"og:site_name","content":"柳衣白卿"}],["meta",{"property":"og:title","content":"Clash"}],["meta",{"property":"og:description","content":"Clash 图像界面安装 下载安装：点击https://dl.trojan-cdn.com/trojan/linux/ --->选择x64版本 img.png 文件解压：解压下载的安装包 目录命名：将解压所得的目录重命名为clash img.png clash运行：进入clash目录--->双击cfw``---``clash的启动文件 img.png ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T11:31:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"Clash"}],["meta",{"property":"article:author","content":"柳衣白卿"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2024-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T11:31:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Clash\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_22.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_16.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_17.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_18.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_19.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_20.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_21.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_23.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_24.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_25.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_26.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_27.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_28.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_29.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_30.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_31.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_32.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_33.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_34.png\\"],\\"datePublished\\":\\"2024-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-01T11:31:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"柳衣白卿\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1719763680000,"updatedTime":1719833460000,"contributors":[{"name":"wadeKings","email":"worldkingscoding@gmail.com","commits":6}]},"readingTime":{"minutes":2.41,"words":724},"filePathRelative":"LinuxService/Clash.md","localizedDate":"2024年6月30日","excerpt":"\\n<h1>图像界面安装</h1>\\n<ol>\\n<li>下载安装：点击<code>https://dl.trojan-cdn.com/trojan/linux/</code> <code>---&gt;</code>选择<code>x64</code>版本<br>\\n<img src=\\"/assets/images/LinuxService/img_22.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n<li>文件解压：解压下载的安装包</li>\\n<li>目录命名：将解压所得的目录重命名为<code>clash</code><br>\\n<img src=\\"/assets/images/LinuxService/img_16.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n<li><code>clash</code>运行：进入<code>clash</code>目录<code>---&gt;</code>双击<code>cfw``---``clash</code>的启动文件<br>\\n<img src=\\"/assets/images/LinuxService/img_17.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n<li>代理设置：点击树形图标<code>---&gt;</code>点击设置图标<code>---&gt;</code>点击网络<code>---&gt;</code>点击代理<code>---&gt;</code>开启代理<code>---&gt;</code>设置为手动<code>---&gt;</code>照图填写<code>---&gt;</code>保存<br>\\n<img src=\\"/assets/images/LinuxService/img_18.png\\" alt=\\"img.png\\" loading=\\"lazy\\"><br>\\n<img src=\\"/assets/images/LinuxService/img_19.png\\" alt=\\"img.png\\" loading=\\"lazy\\"><br>\\n<img src=\\"/assets/images/LinuxService/img_20.png\\" alt=\\"img.png\\" loading=\\"lazy\\"><br>\\n<img src=\\"/assets/images/LinuxService/img_21.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n</ol>","autoDesc":true}');export{Z as comp,D as data};
