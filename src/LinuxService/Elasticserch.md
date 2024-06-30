---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - Elasticsearch
tag:
  - 红
  - 圆
star: true
sticky: true
---
# `Elasticsearch`
# 集群作用/知识
1. 单机`ES`做数据存储的问题: 海量数据存储问题`+`单点故障问题
   - 海量数据存储问题解决: 将索引库从逻辑上拆分为`N`个分片,存储到多个节点`---`要集群 
   - 单点故障问题解决: 将分片数据在不同节点上进行备份`---`要集群
2. 节点角色: `https://cloud.tencent.com/developer/article/2009025` `----`若未设置节点类型,则默认具有非协调/`coordinating`节点角色之外的所有角色
3. 理想集群:一个完整可使用的集群架构示例
![img.png](/assets/images/LinuxService/img_6.png)
4. 集群节点状态:`https://zhuanlan.zhihu.com/p/634291807`

4. 集群存储数据: 新增文档时,`coordinating node`通过算法`shard = hash(_routing) % number_of_shards` `--- ``_routing` 默认是文档的`id` `+` 索引库创建后不能修改分片数量`---`来计算文档存储的主分片号`---`会同步文档到对应的副分片中,以保证数据均衡`---`带星号的是主节点
![img.png](/assets/images/LinuxService/img_7.png)
5. 集群查询: `elasticsearch`的查询分成两个阶段
   - `scatter phase`分散阶段: `coordinating node`会把请求分发到每一个分片
   - `gather phase`聚集阶段: `coordinating node`汇总`data node`的搜索结果,并处理为最终结果集返回给用户
![img.png](/assets/images/LinuxService/img_8.png)
7. 故障转移: 集群的`master`节点会监控的节点状态,若发现有节点故障,则会立即将故障节点中的数据切片迁移到其他节点上`---``Node1`主节点;`Node2`,`Node3`为候选主节点;当主节点发送故障时,从备选主节点中选举出一个主节点,然后由主节点做故障转移
![img.png](/assets/images/LinuxService/img_9.png)

# 集群搭建
1. 搭建计划: 在完成单体搭建的基础上搭建一个有三个节点的集群`---`至少要有三个节点
2. 下载解压: 打开终端`--->`依次执行下列命令
>  `elasticsearch`与`JDK`版本: `https://www.elastic.co/cn/support/matrix#matrix_jvm`
```bash
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.11.1-linux-x86_64.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.11.1-linux-x86_64.tar.gz.sha512
shasum -a 512 -c elasticsearch-8.11.1-linux-x86_64.tar.gz.sha512
tar -xzf elasticsearch-8.11.1-linux-x86_64.tar.gz
```
3. 文件命名: 找到`elasticsearch-8.11.1-linux-x86_64``--->`重命名为`elasticsearch81111`,并删除压缩包
3. 解决乱码: 进入`config`目录`--->`打开`jvm.options`文件`--->`末尾添加`-Dfile.encoding=GBK``---`解决启动日志乱码问题
4. 节点配置: 进入`config`目录`--->`打开`elasticsearch.yml`文件,做如下修改
```text
# 设置集群的名字
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
```
5. 集群构建: `elasticsearch81111`文件夹复制两份,并重命名为`elasticsearch81112`,`elasticsearch81113`
6. 文件删除: 删除`2`,`3`目录下的`data`文件夹`+`清空`logs`文件夹下的所有文件
>  若您运行过节点,则它会包含一些数据,所以需要将其包含的所有数据移动到另一个节点上或者删除数据,否则无法设置为主节点
7. 配置修改: 打开`1`,`2`,`3`目录下`config`目录下`elasticsearch.yml`
```text
# elasticsearch81111
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
cluster.initial_master_nodes: ["node-1"]

network.host: 0.0.0.0

http.port: 9201
# 锁定物理内存地址，防止es内存被交换，从而提高ES性能；但是设置以后因为服务器配置不同可能会启动报错 按需配置
# bootstrap.memory_lock: true

#设置集群自动发现机器ip集合
discovery.seed_hosts: ["localhost:9301", "localhost:9302","localhost:9303"]

# 开启传统监控
xpack.monitoring.elasticsearch.collection.enabled: true

# 跨越配置
http.cors.enabled: true
http.cors.allow-origin: "*"

```
```text
# elasticsearch81112
cluster.name: test
node.name: node-2
node.roles: data

#默认先以node-1作为master结点 集群初始化主节点，用于第一次集群选主
cluster.initial_master_nodes: ["node-1"]

network.host: 0.0.0.0

http.port: 9202
# 锁定物理内存地址，防止es内存被交换，从而提高ES性能；但是设置以后因为服务器配置不同可能会启动报错 按需配置
# bootstrap.memory_lock: true

#设置集群自动发现机器ip集合
discovery.seed_hosts: ["localhost:9301", "localhost:9302","localhost:9303"]

# 开启传统监控
xpack.monitoring.elasticsearch.collection.enabled: true

# 跨越配置
http.cors.enabled: true
http.cors.allow-origin: "*"
```
```text
# elasticsearch81113
cluster.name: test
node.name: node-3
node.roles: data

#默认先以node-1作为master结点 集群初始化主节点，用于第一次集群选主
cluster.initial_master_nodes: ["node-1"]

network.host: 0.0.0.0

http.port: 9203
# 锁定物理内存地址，防止es内存被交换，从而提高ES性能；但是设置以后因为服务器配置不同可能会启动报错 按需配置
# bootstrap.memory_lock: true

#设置集群自动发现机器ip集合
discovery.seed_hosts: ["localhost:9301", "localhost:9302","localhost:9303"]

# 开启传统监控
xpack.monitoring.elasticsearch.collection.enabled: true

# 跨越配置
http.cors.enabled: true
http.cors.allow-origin: "*"
```
8. 配置测试: 分别用终端打开`elasticsearch81112`和`elasticsearch81113`目录下的`bin`目录`--->`输入 `.\elasticsearch.bat``--->`https://localhost:9201/` `+` `https://localhost:9202/` `---`账号是同一账号
>  参考文章: `https://www.cnblogs.com/h--d/p/13192992.html` `----`安装了`kibana`
