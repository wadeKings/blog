---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - Clash
tag:
  - 红
  - 圆
star: true
sticky: true
---
# `Clash`
# 图像界面安装
1. 下载安装：点击`https://dl.trojan-cdn.com/trojan/linux/` `--->`选择`x64`版本
![img.png](/assets/images/LinuxService/img_22.png)
2. 文件解压：解压下载的安装包
3. 目录命名：将解压所得的目录重命名为`clash`
![img.png](/assets/images/LinuxService/img_16.png)
4. `clash`运行：进入`clash`目录`--->`双击`cfw``---``clash`的启动文件
![img.png](/assets/images/LinuxService/img_17.png)
5. 代理设置：点击树形图标`--->`点击设置图标`--->`点击网络`--->`点击代理`--->`开启代理`--->`设置为手动`--->`照图填写`--->`保存
![img.png](/assets/images/LinuxService/img_18.png)
![img.png](/assets/images/LinuxService/img_19.png)
![img.png](/assets/images/LinuxService/img_20.png)
![img.png](/assets/images/LinuxService/img_21.png)
>  参考视频：`https://www.youtube.com/watch?v=pTlso8m_iRk&t=325s`
# 命令界面安装
1. 安装参考：`https://www.joeyne.cool/http/proxy/ubuntu-%e5%ae%89%e8%a3%85clash%e5%b9%b6%e9%85%8d%e7%bd%ae%e5%bc%80%e6%9c%ba%e5%90%af%e5%8a%a8/`
2. 安装下载：点击`https://www.clash.la/releases/` `--->`翻到内核`--->`选择`clash-linux-amd64`
![img.png](/assets/images/LinuxService/img_23.png)
![img.png](/assets/images/LinuxService/img_24.png)
![img.png](/assets/images/LinuxService/img_25.png)
3. 上传文件：使用`xshell`连接到云服务器,用`xftp`传输`clash`文件到`/usr/local/bin`目录
4. 权限赋予：用`xftp`给`clash`文件添加所有权限
![img.png](/assets/images/LinuxService/img_26.png)
![img.png](/assets/images/LinuxService/img_27.png)
5. 下载文件：点击`https://cdn.jsdelivr.net/gh/Dreamacro/maxmind-geoip@release/Country.mmdb` `--->`这将下载`Country.mmdb`文件`--->`使用`xftp`上传到`/home/admin/.config/clash`目录
![img.png](/assets/images/LinuxService/img_28.png)
6. 获取文件：打开`windows`下安装的`clash``--->`找到使用的配置文件`--->`点击`show in folder``--->`将选中的文件命名为`config.yaml``--->`使用`xftp`上传到`/home/admin/.config/clash`目录
>  补充说明：`admin`是用户名，需要换成自己的用户名

![img.png](/assets/images/LinuxService/img_29.png)
![img.png](/assets/images/LinuxService/img_30.png)
![img.png](/assets/images/LinuxService/img_31.png)
7. 运行`clash`：`cd /usr/local/bin` `--->` `clash`
![img.png](/assets/images/LinuxService/img_32.png)
8. 新建复制：`sudo micro /etc/systemd/system/clash.service/clash.service``--->`复制下列内容到`clash.service``--->``ctrl+s`保存`--->``ctrl+q`退出
> 补充说明：从这一步开始是配置`clash`自动启动

> 参考文章：`https://afeng616.github.io/clash-for-ubuntu/`

> 注意事项：`admin`是用户名，需要换成自己的用户名
```text
[Unit]
Description=clash 

[Service]
Type=simple # simple表示该服务是一个简单的服务,systemd 将认为一旦 ExecStart 启动,该服务就已经启动完毕，不会进行进一步的处理
User=root # root 表示该服务将以 root 用户身份运行
ExecStart=/usr/local/bin/clash -d /home/admin/.config/clash 
# ExecStart 指定启动服务的命令,这里是/usr/local/bin/clash命令
# 并用参数 -d 指定clash配置文件config.yml所在的目录
Restart=on-failure # on-failure 指示 systemd 在服务失败时自动重新启动服务

[Install]
WantedBy=multi-user.target # 指定该服务在多用户模式下启动
```
9. 命令执行：依次执行下列命令，结果如下图所示
```bash
# reload: 刷新守护进程,
# enable: 开启自启动
# start: 启动
# status: 查看状态
sudo systemctl daemon-reload
sudo systemctl enable clash
sudo systemctl start clash
sudo systemctl status clash
```
![img.png](/assets/images/LinuxService/img_33.png)
10. 打开添加：执行`sudo micro ~/.bashrc``--->`在打开的文件末尾添加`--->``ctrl+s`保存`--->``ctrl+q`退出
>   补充说明：从这一步开始是配置终端走代理
```text
export http_proxy='http://localhost:7890'
export https_proxy='http://localhost:7890'
```
11. 生效测试：执行`source ~/.bashrc``--->`执行`wget www.google.com`，如下则成功
![img.png](/assets/images/LinuxService/img_34.png)
