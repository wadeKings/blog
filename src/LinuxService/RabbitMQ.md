---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - RabbitMQ
tag:
  - 红
  - 圆
star: true
sticky: true
---
# `RabbitMQ`
# 安装`RabbitMQ`
1. 软件更新: `sudo apt update``---`确保安装的`erlang`与`rabbitmq`版本都是最新的
2. 安装`Erlang`: `sudo apt install erlang`
> 补充: `rabbitmq`需要`erlang`语言支持,所以需要安装`erlang`
3. 验证安装: `erl`
4. 版本一致: `https://www.rabbitmq.com/docs/which-erlang``---`查看`erlang`与`rabbitmq`版本对应关系
5. 安装`rabbitmq`: `sudo apt install rabbitmq-server`
>  指定版本安装: `sudo apt install rabbitmq-server=3.9.17-1`
6. 验证安装: `systemctl status rabbitmq-server`
7. 允许访问: `sudo rabbitmq-plugins enable rabbitmq_management`
8. `web`访问：使用默认账号访问`http://localhost:15672/`, 若非空白界面,则访问成功
>  默认账号: 用户名`guest``+`密码`guest`
9. 添加用户: `sudo rabbitmqctl add_user liu liu``---`用户名密码都为`liu`
>  补充说明: `rabbitmq从3.3`版本之后默认禁止使用默认账号进行远程登录
10. 添加访问: `rabbitmqctl set_permissions -p "/" liu ".*" ".*" ".*"`
>  补充说明: 如果不添加访问,则对虚拟主机`virtual host/`操作不了
11. 设置权限: `sudo rabbitmqctl set_user_tags liu administrator`
>   其他角色: `monitoring`/监控者角色`---`可以登录控制台查看`rabbitmq`节点相关信息,无法对策略管理
12. 验证添加: 使用新添用户访问`http://localhost:15672/`
13. 问题解决: `https://www.zhihu.com/question/596270991/answer/2999597537?utm_id=0`
14. 其他命令: 最好前面都加上`sudo`,以防止权限不够
```text
#停止
    rabbitmqctl stop

#重启
rabbitmqctl start_app

# 查看状态
rabbitmqctl status

#查看账户列表
rabbitmqctl list_users

#删除角色
rabbitmqctl delete_user username

#修改密码
rabbitmqctl change_password username password
```
