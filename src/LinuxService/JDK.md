---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - JDK
tag:
  - 红
  - 圆
star: true
sticky: true
---
# `JDK`
# 命令安装`JDK`
1. 安装下载：`sudo apt install openjdk-21-jdk-headless`
2. 安装验证：`java -version`
>  补充说明：在未安装`jdk`之前，可以使用`java -version`查看有哪些`jre`可以安装
3. 位置查看：`readlink -f $(which java)``---`查看`java`的安装路径
>  补充说明：`java-21-openjdk-amd64`是`jdk`的安装路径
![img.png](/assets/images/LinuxService/img_4.png)