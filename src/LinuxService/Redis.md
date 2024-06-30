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
# 命令安装`Redis`
1. 下载安装: `sudo apt update``--->``sudo apt install redis-server``---`默认后台运行和自动启动
2. 运行检查: `sudo systemctl status redis-server`
3. 权限升级: `sudo -i``---`避免权限不够,若想退出,则`exit/Ctrl+D`
4. 定义配置: `cd /etc/redis``--->`sudo micro redis.conf``---`修改`redis.conf`的一些配置
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
5. 配置生效: `sudo systemctl restart redis-server`

# 使用`Redis`
1. 客户端连接: `redis-cli -h 127.0.0.1  -p 6379 -a 123321``---`默认连接`
```text
# -h: 指定要连接的redis节点的IP地址为127.0.0.1,默认127.0.0.1
# -p: 指定要连接的redis节点的端口为6379，默认6379
# -a: 指定redis的访问密码为123321
# redis-cli -h 127.0.0.1  -p 6379 -a 123321 等价 redis-cli -a 123321   
```
2. 心跳测试: `ping`命令用与`redis`服务端做心跳测试,服务端正常会返回`pong`
```bash
127.0.0.1:6379> ping
PONG
```
3. 停止运行: `redis-cli -u 123321 shutdown``---`指定密码停止使用