---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - Docker
tag:
  - 红
  - 圆
star: true
sticky: true
---
# `Docker`
# `Docker`介绍
1. `docker`： 一个开源的应用容器引擎，我们可以使用docker将项目及其依赖关系一起打包到一个容器中，从而为任何应用/项目创建一个轻量级、可移植、自给自足的容器
2. 容器： 类似于集装箱，各式各样的货物，经过集装箱的标准化进行托管，而集装箱和集装箱之间没有影响
# `Docker`安装
1. 列表更新： `sudo apt update` 
2. 下载安装： `sudo apt install docker.io`
> 官方安装： `https://docs.docker.com/engine/install/ubuntu/`
> 添加密钥出错: `https://blog.51cto.com/u_16175465/7446963`; 若代理无效,则切成美国节点再次尝试
2. 安装验证： `docker --version`
3. 自动启动：`sudo systemctl enable docker`
# 镜像源配置
1. 镜像源配置参考文章：`https://blog.csdn.net/Lichen0196/article/details/137355517`
2. 打开镜像源配置文件：`sudo micro  /etc/docker/daemon.json``--->`复制粘贴
> 安装`Micro`: `sudo apt install micro`
```json
{
   "registry-mirrors": [
   "https://registry.docker-cn.com",
   "https://docker.mirrors.ustc.edu.cn",
   "https://hub-mirror.c.163.com",
   "https://mirror.baidubce.com",
   "https://ccr.ccs.tencentyun.com",
   "https://docker.m.daocloud.io",
   "https://noohub.ru",
   "https://huecker.io",
   "https://dockerhub.timeweb.cloud"
   ]
}
```
3. 执行下列命令
```bash
sudo systemctl daemon-reload		#重启daemon进程
sudo systemctl restart docker		#重启docker
```
4. 修改验证：`sudo docker info`;若出现类似下文的内容,则成功
```text
Registry Mirrors:
   https://docker.mirrors.ustc.edu.cn/
   http://hub-mirror.c.163.com/
   https://mirror.ccs.tencentyun.com/
   https://registry.docker-cn.com/
```
# 代理配置
1. 参考文章：`https://blog.csdn.net/Lichen0196/article/details/137355517`
2. 创建目录：`sudo mkdir /etc/systemd/system/docker.service.d`
3. 创建文件：`sudo micro proxy.conf``--->`复制粘贴`--->``ctrl+s`保持`--->``ctrl+q`退出
>  前提条件：配置`clash`
```text
[Service]
Environment="HTTP_PROXY=localhost:7890"
Environment="HTTPS_PROXY=localhost:7890"
```
3. 执行下列命令
```bash
sudo systemctl daemon-reload		#重启daemon进程
sudo systemctl restart docker		#重启docker
```
4. 代理验证：`docker info`;如下则成功
![img.png](/assets/images/LinuxService/img.png)
# 完全卸载
1. 参考文章：`https://www.cnblogs.com/shmily3929/p/12085163.html`


