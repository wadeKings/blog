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
# `Mysql`

# `Docker`安装

1. 参考文章：`https://dev.mysql.com/doc/refman/9.0/en/docker-mysql-getting-started.html#docker-starting-mysql-server`

## 获取令牌
1. 点击网址：`https://container-registry.oracle.com/`
2. 登录网站：点击右上角的`Sign in`按钮并登录
3. 生成密钥：点击账号下拉框中的`Auth Token`按钮，然后点击`Generate Secret Key`按钮并保存
![img.png](/assets/images/LinuxService/img_36.png)

## 安装下载
1. 注册仓库：输入`docker login container-registry.oracle.com`，然后输入账号用户名和之前生成的令牌
2. 拉取镜像：`sudo docker pull container-registry.oracle.com/mysql/community-server:9.0`
3. 创建目录：创建之后的目录结构如下，这里的`.`表示当前用户的根目录；使用的阿里云服务器
```text
.
└── programming
    └── db
        ├── mysql
        │   └── docker-compose.yml
        │   └── data
        │   └── conf
        │   │   └── my.cnf    
        │   └── logs
        └── redis
            ├── conf
            │   └── redis.conf
            ├── data
            │   ├── appendonlydir  [error opening dir]
            │   └── dump.rdb
            └── docker-compose.yml  
```
4. `my.cnf`配置: 复制粘贴到`my.cnf`中
> 补充说明：若配置`Docker-compose.yml`时，不指定`volumes`，则可忽略`my.cnf`配置
```text
[mysqld]
user=mysql
```
4. `Docker-compose`配置: 复制粘贴到`docker-compose.yml`中
> 数据持久化参考：`https://dev.mysql.com/doc/refman/9.0/en/docker-mysql-more-topics.html#docker-persisting-data-configuration`
```text
version: '3.0'
services:
  mysql:
    image: container-registry.oracle.com/mysql/community-server:9.0
    container_name: mysql
    ports:
      - "3306:3306"
    volumes:
      - /home/admin/programming/db/mysql/conf/my.cnf:/etc/my.cnf
      - /home/admin/programming/db/mysql/logs:/var/logs
      - /home/admin/programming/db/mysql/data:/var/lib/mysql
    restart: unless-stopped
    privileged: true
```
5. 启动容器：`sudo docker-compose -f /home/admin/programming/db/mysql/docker-compose.yml up -d`
> 停止容器：`sudo docker stop mysql`
> 删除容器：`sudo docker rm mysql`
6. 查看日志：`sudo docker logs mysql`
7. 查看挂载：`sudo docker inspect mysql`
8. 查看密码：`sudo docker logs mysql 2>&1 | grep GENERATED`
9. 登录数据库：`sudo docker exec -it mysql mysql -uroot -p`，输入刚才查看的密码
10. 修改密码：`ALTER USER 'root'@'localhost' IDENTIFIED BY 'wo372159qwa';`
11. 获取容器`Shell`：`sudo docker exec -it mysql bash`

## 远程连接

1. 登录数据库：`sudo docker exec -it mysql mysql -uroot -p`
2. 切换数据库：`use mysql`
3. 查看用户：`select host,user from user;`
4. 允许远程：`update user set host = '%' where user = 'root';`
5. 刷新权限：`flush privileges;`
6. 参考文章：`https://blog.csdn.net/mazaiting/article/details/106661158`