---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2022-01-12
category:
  - CI/CD
tag:
  - 红
  - 圆
star: true
sticky: true
---

# CI/CD工具BuildMaster的安装与使用

## 安装SQL-SERVER

1. 参考文章: https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&preserve-view=true&tabs=cli&pivots=cs1-bash
2. 前题条件: 安装`docker`
3. 安装下载: `sudo docker pull mcr.microsoft.com/mssql/server:2022-latest`

## 安装BuildMaster

1. 安装下载: `docker pull proget.inedo.com/productimages/inedo/buildmaster:23.0.17-ci.4`
> 镜像仓库: `https://proget.inedo.com/containers/repositories/ProductImages/inedo/buildmaster/overview`

## 配置BuildMaster

1. 创建网络: `docker network create inedo`
2. 启动容器: 把`YourStrong@Passw0rd`换成自己的密码`--->`执行下列命令以启动`SQL-SERVER`
```bash
docker run --name inedo-sql \
   -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=<YourStrong@Passw0rd>' \
   -e 'MSSQL_PID=Express' --net=inedo --restart=unless-stopped \
   -d mcr.microsoft.com/mssql/server:2022-latest
```
3. 创建数据库: 执行下列命令以创建名为`BuildMaster`的`SQL-SERVER`数据库
```bash
docker exec -it inedo-sql /opt/mssql-tools/bin/sqlcmd \
  -S localhost -U SA -P '<YourStrong@Passw0rd>' \
  -Q 'CREATE DATABASE [BuildMaster] COLLATE SQL_Latin1_General_CP1_CI_AS'
```
4. 启动容器: 把`YourStrong@Passw0rd`换成自己的密码`--->`执行下列命令以启动`BuildMaster`
```bash
docker run -d --name=buildmaster --restart=unless-stopped \
  -v buildmaster-artifacts:/var/buildmaster/artifacts \
  -p 81:80 --net=inedo \
  -e BUILDMASTER_SQL_CONNECTION_STRING='Data Source=inedo-sql; Initial Catalog=BuildMaster; User ID=sa; Password=<YourStrong@Passw0rd>' \
  proget.inedo.com/productimages/inedo/buildmaster:latest
```
5. 访问地址: `http://localhost:81/` 
> 补充: 如果是本地部署,则使用localhost,否则换成自己的IP地址