---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - Redis
tag:
  - 红
  - 圆
star: true
sticky: true
---
# `Redis`
# 命令安装`Redis`
1. 下载安装：`sudo apt update``--->``sudo apt install redis-server``---`默认后台运行和自动启动
2. 运行检查：`sudo systemctl status redis-server`
3. 权限升级：`sudo -i``---`避免权限不够,若想退出,则`exit/Ctrl+D`
4. 定义配置：`cd /etc/redis``--->`sudo micro redis.conf``---`修改`redis.conf`的一些配置
```text
# 设置允许访问的地址，默认是127.0.0.1 -1::1，这设置只能在本地访问
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
logfile "redis.log"
```
5. 配置生效：`sudo systemctl restart redis-server`


# 使用`Redis`
1. 客户端连接：`redis-cli -h 127.0.0.1  -p 6379 -a 123321``---`默认连接`
```text
# -h: 指定要连接的redis节点的IP地址为127.0.0.1,默认127.0.0.1
# -p: 指定要连接的redis节点的端口为6379，默认6379
# -a: 指定redis的访问密码为123321
# redis-cli -h 127.0.0.1  -p 6379 -a 123321 等价 redis-cli -a 123321   
```
2. 心跳测试：`ping`命令用与`redis`服务端做心跳测试,服务端正常会返回`pong`
```bash
127.0.0.1:6379> ping
PONG
```
3. 停止运行：`redis-cli -u 123321 shutdown``---`指定密码停止使用

# `Docker`安装`Redis`

1. 拉取镜像：`sudo docker pull redis:7.2.5`
2. 创建目录：创建之后的目录结构如下，这里的`.`表示当前用户的根目录
```text
.
└── programming
    └── db
        └── redis
            ├── conf
            │   └── redis.conf
            ├── data
            └── docker-compose.yml
```
6. 下载配置：点击`https://redis.io/docs/latest/operate/oss_and_stack/management/config/` `--->` 下翻到如图位置`--->` 选择7.2版本并复制粘贴到`redis.conf`
![img.png](/assets/images/LinuxService/img_35.png)
3. `Redis`配置: 修改`redis.conf`中的`bind`和`requirepass`属性
```text
bind 0.0.0.0
requirepass wo372159qwa
```
4. `Docker-compose`配置: 复制粘贴到`docker-compose.yml`中
```text
version: '3.0'
services:
  redis:
    image: redis:7.2.5
    container_name: redis
    restart: always # 开机启动，失败也会一直重启
    ports:
      - "6379:6379"
    volumes:
      - /home/admin/programming/db/redis/conf/redis.conf:/etc/redis/redis.conf
      - /home/admin/programming/db/redis/data:/data
    command: ["redis-server", "/etc/redis/redis.conf", "--appendonly", "yes", "--requirepass", "wo372159qwa"]
```
5. 启动服务：`sudo docker-compose -f /home/admin/programming/db/redis/docker-compose.yml up -d`
6. 查看日志：`sudo docker logs -f redis`

# `Reids`客户端
1. `Tiny RDM`：`https://redis.tinycraft.cc/zh/`