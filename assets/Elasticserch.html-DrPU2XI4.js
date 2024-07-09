import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as o,a as c}from"./app-CM7uPc_X.js";const t="/blog/assets/images/LinuxService/img_6.png",n="/blog/assets/images/LinuxService/img_7.png",s="/blog/assets/images/LinuxService/img_8.png",a="/blog/assets/images/LinuxService/img_9.png",d={},l=c('<h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span><code>Elasticsearch</code></span></a></h1><h1 id="集群作用-知识" tabindex="-1"><a class="header-anchor" href="#集群作用-知识"><span>集群作用/知识</span></a></h1><ol><li>单机<code>ES</code>做数据存储的问题： 海量数据存储问题<code>+</code>单点故障问题 <ul><li>海量数据存储问题解决：将索引库从逻辑上拆分为<code>N</code>个分片,存储到多个节点<code>---</code>要集群</li><li>单点故障问题解决：将分片数据在不同节点上进行备份<code>---</code>要集群</li></ul></li><li>节点角色：<code>https://cloud.tencent.com/developer/article/2009025</code> <code>----</code>若未设置节点类型,则默认具有非协调/<code>coordinating</code>节点角色之外的所有角色</li><li>理想集群：一个完整可使用的集群架构示例<br><img src="'+t+'" alt="img.png" loading="lazy"></li><li>集群节点状态：<code>https://zhuanlan.zhihu.com/p/634291807</code></li><li>集群存储数据：新增文档时,<code>coordinating node</code>通过算法<code>shard = hash(_routing) % number_of_shards</code> <code>--- ``_routing</code> 默认是文档的<code>id</code> <code>+</code> 索引库创建后不能修改分片数量<code>---</code>来计算文档存储的主分片号<code>---</code>会同步文档到对应的副分片中,以保证数据均衡<code>---</code>带星号的是主节点<br><img src="'+n+'" alt="img.png" loading="lazy"></li><li>集群查询：<code>elasticsearch</code>的查询分成两个阶段 <ul><li><code>scatter phase</code>分散阶段：<code>coordinating node</code>会把请求分发到每一个分片</li><li><code>gather phase</code>聚集阶段：<code>coordinating node</code>汇总<code>data node</code>的搜索结果,并处理为最终结果集返回给用户<br><img src="'+s+'" alt="img.png" loading="lazy"></li></ul></li><li>故障转移：集群的<code>master</code>节点会监控的节点状态,若发现有节点故障,则会立即将故障节点中的数据切片迁移到其他节点上<code>---``Node1</code>主节点;<code>Node2</code>,<code>Node3</code>为候选主节点;当主节点发送故障时,从备选主节点中选举出一个主节点,然后由主节点做故障转移<br><img src="'+a+`" alt="img.png" loading="lazy"></li></ol><h1 id="集群搭建" tabindex="-1"><a class="header-anchor" href="#集群搭建"><span>集群搭建</span></a></h1><ol><li>搭建计划：在完成单体搭建的基础上搭建一个有三个节点的集群<code>---</code>至少要有三个节点</li><li>下载解压：打开终端<code>---&gt;</code>依次执行下列命令</li></ol><blockquote><p><code>elasticsearch</code>与<code>JDK</code>版本：<code>https://www.elastic.co/cn/support/matrix#matrix_jvm</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.11.1-linux-x86_64.tar.gz
<span class="token function">wget</span> https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.11.1-linux-x86_64.tar.gz.sha512
shasum <span class="token parameter variable">-a</span> <span class="token number">512</span> <span class="token parameter variable">-c</span> elasticsearch-8.11.1-linux-x86_64.tar.gz.sha512
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> elasticsearch-8.11.1-linux-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>文件命名：找到<code>elasticsearch-8.11.1-linux-x86_64\`\`---&gt;</code>重命名为<code>elasticsearch81111</code>,并删除压缩包</li><li>解决乱码：进入<code>config</code>目录<code>---&gt;</code>打开<code>jvm.options</code>文件<code>---&gt;</code>末尾添加<code>-Dfile.encoding=GBK\`\`---</code>解决启动日志乱码问题</li><li>节点配置：进入<code>config</code>目录<code>---&gt;</code>打开<code>elasticsearch.yml</code>文件,做如下修改</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 设置集群的名字
cluster.name: test
# 设置主节点名字
node.name: node-1
#设置索引数据的存储路径
path.data: ./data    #换成自己的路径
#设置日志文件的存储路径
path.logs: ./logs    #换成自己的路径
# 设置ES监听地址，默认为192.168.0.1; 0.0.0.0: 任意机器都可访问
network.host: 0.0.0.0
#设置对外服务的http端口，默认为9200
http.port: 9200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>集群构建：<code>elasticsearch81111</code>文件夹复制两份,并重命名为<code>elasticsearch81112</code>,<code>elasticsearch81113</code></li><li>文件删除：删除<code>2</code>,<code>3</code>目录下的<code>data</code>文件夹<code>+</code>清空<code>logs</code>文件夹下的所有文件</li></ol><blockquote><p>若您运行过节点,则它会包含一些数据,所以需要将其包含的所有数据移动到另一个节点上或者删除数据,否则无法设置为主节点</p></blockquote><ol start="7"><li>配置修改：打开<code>1</code>,<code>2</code>,<code>3</code>目录下<code>config</code>目录下<code>elasticsearch.yml</code></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># elasticsearch81111
cluster.name: test
node.name: node-1
#设置节点角色：
  # master/管理集群的状态信息
  # data/保存集群的索引数据
  # data_content/内容数据节点
  # data_hot/热数据节点
  # data_warm/温数据节点
  # data_cold/冷数据节点
  # data_frozen/冻结数据节点
  # ingest/堆栈监控和摄取管道
  # ml/机器学习功能
  # remote_cluster_client/跨集群搜索和跨集群复制
  # transform/应用程序和转换
  # voting_only/仅投票节点
node.roles: master
#默认先以node-1作为master结点 集群初始化主节点，用于第一次集群选主
cluster.initial_master_nodes: [&quot;node-1&quot;]
network.host: 0.0.0.0
http.port: 9201
# 锁定物理内存地址，防止es内存被交换，从而提高ES性能；但是设置以后因为服务器配置不同可能会启动报错 按需配置
# bootstrap.memory_lock: true
#设置集群自动发现机器ip集合
discovery.seed_hosts: [&quot;localhost:9301&quot;, &quot;localhost:9302&quot;,&quot;localhost:9303&quot;]
# 开启传统监控
xpack.monitoring.elasticsearch.collection.enabled: true
# 跨越配置
http.cors.enabled: true
http.cors.allow-origin: &quot;*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># elasticsearch81112
cluster.name: test
node.name: node-2
node.roles: data
#默认先以node-1作为master结点 集群初始化主节点，用于第一次集群选主
cluster.initial_master_nodes: [&quot;node-1&quot;]
network.host: 0.0.0.0
http.port: 9202
# 锁定物理内存地址，防止es内存被交换，从而提高ES性能；但是设置以后因为服务器配置不同可能会启动报错 按需配置
# bootstrap.memory_lock: true
#设置集群自动发现机器ip集合
discovery.seed_hosts: [&quot;localhost:9301&quot;, &quot;localhost:9302&quot;,&quot;localhost:9303&quot;]
# 开启传统监控
xpack.monitoring.elasticsearch.collection.enabled: true
# 跨越配置
http.cors.enabled: true
http.cors.allow-origin: &quot;*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># elasticsearch81113
cluster.name: test
node.name: node-3
node.roles: data
#默认先以node-1作为master结点 集群初始化主节点，用于第一次集群选主
cluster.initial_master_nodes: [&quot;node-1&quot;]
network.host: 0.0.0.0
http.port: 9203
# 锁定物理内存地址，防止es内存被交换，从而提高ES性能；但是设置以后因为服务器配置不同可能会启动报错 按需配置
# bootstrap.memory_lock: true
#设置集群自动发现机器ip集合
discovery.seed_hosts: [&quot;localhost:9301&quot;, &quot;localhost:9302&quot;,&quot;localhost:9303&quot;]
# 开启传统监控
xpack.monitoring.elasticsearch.collection.enabled: true
# 跨越配置
http.cors.enabled: true
http.cors.allow-origin: &quot;*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>配置测试：分别用终端打开<code>elasticsearch81112</code>和<code>elasticsearch81113</code>目录下的<code>bin</code>目录<code>---&gt;</code>输入 <code>.\\elasticsearch.bat</code> <code>---&gt;</code> <code>https://localhost:9201/</code> <code>+</code> <code>https://localhost:9202/</code> <code>---</code>账号是同一账号</li></ol><blockquote><p>参考文章：<code>https://www.cnblogs.com/h--d/p/13192992.html</code> <code>----</code>安装了<code>kibana</code></p></blockquote>`,17),r=[l];function m(u,v){return i(),o("div",null,r)}const h=e(d,[["render",m],["__file","Elasticserch.html.vue"]]),b=JSON.parse('{"path":"/LinuxService/Elasticserch.html","title":"Elasticsearch","lang":"zh-CN","frontmatter":{"cover":"/assets/images/cover2.jpg","icon":"pen-to-square","date":"2024-06-30T00:00:00.000Z","category":["Elasticsearch"],"tag":["红","圆"],"star":true,"sticky":true,"description":"Elasticsearch 集群作用/知识 单机ES做数据存储的问题： 海量数据存储问题+单点故障问题 海量数据存储问题解决：将索引库从逻辑上拆分为N个分片,存储到多个节点---要集群 单点故障问题解决：将分片数据在不同节点上进行备份---要集群 节点角色：https://cloud.tencent.com/developer/article/2009...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/LinuxService/Elasticserch.html"}],["meta",{"property":"og:site_name","content":"柳衣白卿"}],["meta",{"property":"og:title","content":"Elasticsearch"}],["meta",{"property":"og:description","content":"Elasticsearch 集群作用/知识 单机ES做数据存储的问题： 海量数据存储问题+单点故障问题 海量数据存储问题解决：将索引库从逻辑上拆分为N个分片,存储到多个节点---要集群 单点故障问题解决：将分片数据在不同节点上进行备份---要集群 节点角色：https://cloud.tencent.com/developer/article/2009..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T11:36:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/blog/assets/images/cover2.jpg"}],["meta",{"name":"twitter:image:alt","content":"Elasticsearch"}],["meta",{"property":"article:author","content":"柳衣白卿"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:published_time","content":"2024-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T11:36:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_6.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_7.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_8.png\\",\\"https://mister-hope.github.io/blog/assets/images/LinuxService/img_9.png\\"],\\"datePublished\\":\\"2024-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-01T11:36:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"柳衣白卿\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1719754811000,"updatedTime":1719833773000,"contributors":[{"name":"wadeKings","email":"worldkingscoding@gmail.com","commits":6}]},"readingTime":{"minutes":4.54,"words":1361},"filePathRelative":"LinuxService/Elasticserch.md","localizedDate":"2024年6月30日","excerpt":"\\n<h1>集群作用/知识</h1>\\n<ol>\\n<li>单机<code>ES</code>做数据存储的问题： 海量数据存储问题<code>+</code>单点故障问题\\n<ul>\\n<li>海量数据存储问题解决：将索引库从逻辑上拆分为<code>N</code>个分片,存储到多个节点<code>---</code>要集群</li>\\n<li>单点故障问题解决：将分片数据在不同节点上进行备份<code>---</code>要集群</li>\\n</ul>\\n</li>\\n<li>节点角色：<code>https://cloud.tencent.com/developer/article/2009025</code> <code>----</code>若未设置节点类型,则默认具有非协调/<code>coordinating</code>节点角色之外的所有角色</li>\\n<li>理想集群：一个完整可使用的集群架构示例<br>\\n<img src=\\"/assets/images/LinuxService/img_6.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n<li>集群节点状态：<code>https://zhuanlan.zhihu.com/p/634291807</code></li>\\n<li>集群存储数据：新增文档时,<code>coordinating node</code>通过算法<code>shard = hash(_routing) % number_of_shards</code> <code>--- ``_routing</code> 默认是文档的<code>id</code> <code>+</code> 索引库创建后不能修改分片数量<code>---</code>来计算文档存储的主分片号<code>---</code>会同步文档到对应的副分片中,以保证数据均衡<code>---</code>带星号的是主节点<br>\\n<img src=\\"/assets/images/LinuxService/img_7.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n<li>集群查询：<code>elasticsearch</code>的查询分成两个阶段\\n<ul>\\n<li><code>scatter phase</code>分散阶段：<code>coordinating node</code>会把请求分发到每一个分片</li>\\n<li><code>gather phase</code>聚集阶段：<code>coordinating node</code>汇总<code>data node</code>的搜索结果,并处理为最终结果集返回给用户<br>\\n<img src=\\"/assets/images/LinuxService/img_8.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n</ul>\\n</li>\\n<li>故障转移：集群的<code>master</code>节点会监控的节点状态,若发现有节点故障,则会立即将故障节点中的数据切片迁移到其他节点上<code>---``Node1</code>主节点;<code>Node2</code>,<code>Node3</code>为候选主节点;当主节点发送故障时,从备选主节点中选举出一个主节点,然后由主节点做故障转移<br>\\n<img src=\\"/assets/images/LinuxService/img_9.png\\" alt=\\"img.png\\" loading=\\"lazy\\"></li>\\n</ol>","autoDesc":true}');export{h as comp,b as data};
