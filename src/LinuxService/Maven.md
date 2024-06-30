---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - Maven
tag:
  - 红
  - 圆
star: true
sticky: true
---

# 命令安装`Maven`
1. 下载安装: `sudo apt install maven`
2. 安装验证: `mvn -version``---`会显示`maven`安装目录的路径`path`
3. 镜像配置: `sudo micro path/conf/settings.xml`,在`mirrors`标签中添加如下配置
```xml
<mirror>
  <id>alimaven</id>
  <mirrorOf>central</mirrorOf>
  <name>aliyun maven</name>
  <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
</mirror>
```