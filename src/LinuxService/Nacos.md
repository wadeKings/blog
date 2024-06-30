---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - Nacos
tag:
  - 红
  - 圆
star: true
sticky: true
---
# `docker`安装`Nacos`
1. 参考文章: `https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html`
2. 创建目录: `mkdir -p env/nacos`
3. 仓库拉取: `git clone https://github.com/nacos-group/nacos-docker.git` 
4. 位置移动: `cd nacos-docker`
5. 单机安装: `docker-compose-f example/standalone-derby.yaml up`
6. 域名访问: `http://www.bytewisehub.cn:8848/nacos`
> 补充：阿里云记得开`TCP`为`8848`端口的防火墙