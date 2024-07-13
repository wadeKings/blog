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

1. 拉取镜像：`sudo docker pull mysql:8.0.20`
2. 创建目录：创建之后的目录结构如下，这里的`.`表示当前用户的根目录；使用的阿里云服务器
```text
.
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
```
3. `Docker-compose`配置: 复制粘贴到`docker-compose.yml`中
```text
version: '3.0'
services:
  mysql:
    image: mysql:8.0.20
    container_name: mysql
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: "wo372159qwa"
    restart: always
```
3. 启动容器：`sudo docker-compose -f /home/admin/programming/db/mysql/docker-compose.yml up -d`
4. 复制配置：`sudo docker cp  mysql:/etc/mysql/. /home/admin/programming/db/mysql/conf`
5. 停止删除：`sudo docker stop mysql` `--->` `sudo docker rm mysql`
6. `Docker-compose`配置: 复制粘贴到`docker-compose.yml`中
```text
 version: '3.0'
 services:
   mysql:
     image: mysql:8.0.20
     container_name: mysql
     ports:
       - "3306:3306"
     volumes:
       - /home/admin/programming/db/mysql/conf:/etc/mysql
       - /home/admin/programming/db/mysql/logs:/logs
       - /home/admin/programming/db/mysql/data:/var/lib/mysql
       - /etc/localtime:/etc/localtime
     environment:
       MYSQL_ROOT_PASSWORD: 123456
     restart: unless-stopped
     privileged: true
```
7. 启动容器：`sudo docker-compose -f /home/admin/programming/db/mysql/docker-compose.yml up -d`
8. 参考文章：`https://blog.csdn.net/u014576291/article/details/105890286`