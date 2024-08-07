# 常见方案

1. 方案一：使用`ollama`**工具**下载大模型`+``docker`安装`web ui``+``continue`插件完成`idea`代码提升`---`无需翻墙即可完成，但是使用`continue`完成对话的速度很慢

> 使用说明：联网使用响应还可以，无论是终端还是`webui`，但是断网响应很慢，`cpu`和内存几乎吃满，考虑更换参数更小的大模型或者配置`GPU`，本机`i5-12400``2.50 GHz``RAM 16G`，没有`GPU`
> 使用说明：`qwen2:1.5b`断网响应速度还可以，分析代码也还行，但再复杂一点可能效果不好

> 使用说明：`continue`插件的响应速度取决于模型的响应速度，若过慢，可能导致奇奇怪怪的问题
> 使用说明：`DevoxxGenie`插件会自动检测使用的框架和模型，但是无法直接使用

2. 方案二：使用`lm studio/GPT4 ALL`**软件**下载大模型`---`下载大模型需要翻墙
3. 方案三：使用`Tabby`**工具**下载大模型`---`有`web ui`和插件，但下载大模型需要翻墙

## 下载模型

1. 下载`ollama`：点击`[https://ollama.com/download](https://ollama.com/download)``--->`点击`download for windows`按钮
2. 安装`ollama`：安装完后会自动在后台运行，没有`ui`界面，可在终端中使用`ollama`命令，类似`pip`
3. 下载模型：打开终端并输入`ollama run deepseek-coder-v2:16b``---`模型安装完后，会自动运行，界面如下，不太友好`---`以后若想运行该版本的模型，也是执行该命令

> 补充说明：`ollama`支持的模型`[https://ollama.com/library](https://ollama.com/library)`

> 补充说明：`continue`插件配置模型时，`model`属性的值就是`deepseek-coder-v2:16b`，`provider`属性值则为`ollama`

![image.png](https://cdn.nlark.com/yuque/0/2024/png/29339315/1721031339051-df45dc51-98fa-4d3d-968b-2fd951fe20c2.png#averageHue=%23141414&clientId=ud55489f3-4aab-4&from=paste&height=107&id=uf294f65f&originHeight=107&originWidth=1091&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11065&status=done&style=none&taskId=ue72d5515-e805-4ca5-a6d0-90ac9750d36&title=&width=1091)

## 安装`wsl`

### 启用

1. `win`键搜索**任务管理器**并打开，如图操作并查看虚拟化是否开启，一般默认开启，没开启需要开启

![Snipaste_2022-11-10_23-17-43.png](https://cdn.nlark.com/yuque/0/2022/png/29339315/1668094658415-66684966-bced-4557-95e7-2b8f00e24ed6.png#averageHue=%23f6f5f4&clientId=uc737aeea-6933-4&from=drop&id=Paiow&originHeight=717&originWidth=958&originalType=binary&ratio=1&rotation=0&showTitle=false&size=76006&status=done&style=none&taskId=ucc2f79ac-3d27-4c78-a547-84a250b4c56&title=)

2. 新建文件 ： 新建空白文本`--->`粘贴下面代码`+`保存`--->`保存时更改`.txt` 后缀为 `.bat`

> 补充说明：第一步和第二步不是必须的，若第四步要勾选的三个选择存在(企业版默认存在)，则无需执行

3. 运行文件：右键以管理员身份运行新建文件`---`终端会自动启动，我们只需要等它结束即可；若不小心关闭，则重新以管理员身份运行运行该文件即可；当它结束时，会收到一条说明安装完成的通知，并询问你是否要重新启动 `PC`；按 `Y`，然后按 `Enter` 键

> 代码来源 ：`[https://blog.csdn.net/winkexin/article/details/131526991#:~:text=%E5%A6%82%E4%BD%95%E5%9C%A8%20Windows%2011%20%E4%B8%8A%E5%90%AF%E7%94%A8%20Hyper-V%EF%BC%88%E4%B8%93%E4%B8%9A%E7%89%88%E3%80%81%E4%BC%81%E4%B8%9A%E7%89%88%E3%80%81%E6%95%99%E8%82%B2%E7%89%88%EF%BC%89%201%20%E9%80%9A%E8%BF%87%E5%9C%A8%E2%80%9C%E4%BB%BB%E5%8A%A1%E6%A0%8F%E6%90%9C%E7%B4%A2%E2%80%9D%E6%A1%86%E4%B8%AD%E9%94%AE%E5%85%A5%E2%80%9C%E5%90%AF%E7%94%A8%E6%88%96%E5%85%B3%E9%97%AD,Windows%20%E5%8A%9F%E8%83%BD%E2%80%9D%E5%B0%8F%E7%A8%8B%E5%BA%8F%E3%80%82%202%20%E7%8E%B0%E5%9C%A8%E4%BB%8E%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9F%A5%E6%89%BE%E2%80%9CHyper-V%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E7%84%B6%E5%90%8E%E9%80%89%E4%B8%AD%E6%97%81%E8%BE%B9%E7%9A%84%E6%A1%86%E3%80%82%20%E7%84%B6%E5%90%8E%E5%8D%95%E5%87%BB%E2%80%9C%E7%A1%AE%E5%AE%9A%E2%80%9D%E3%80%82%203%20%E6%82%A8%E7%8E%B0%E5%9C%A8%E5%B0%86%E7%9C%8B%E5%88%B0%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E6%9B%B4%E6%94%B9%E7%9A%84%E7%AA%97%E5%8F%A3%E3%80%82%20%E5%AE%8C%E6%88%90%E5%90%8E%E5%8D%95%E5%87%BB%E5%85%B3%E9%97%AD%E3%80%82](https://blog.csdn.net/winkexin/article/details/131526991#:~:text=%E5%A6%82%E4%BD%95%E5%9C%A8%20Windows%2011%20%E4%B8%8A%E5%90%AF%E7%94%A8%20Hyper-V%EF%BC%88%E4%B8%93%E4%B8%9A%E7%89%88%E3%80%81%E4%BC%81%E4%B8%9A%E7%89%88%E3%80%81%E6%95%99%E8%82%B2%E7%89%88%EF%BC%89%201%20%E9%80%9A%E8%BF%87%E5%9C%A8%E2%80%9C%E4%BB%BB%E5%8A%A1%E6%A0%8F%E6%90%9C%E7%B4%A2%E2%80%9D%E6%A1%86%E4%B8%AD%E9%94%AE%E5%85%A5%E2%80%9C%E5%90%AF%E7%94%A8%E6%88%96%E5%85%B3%E9%97%AD,Windows%20%E5%8A%9F%E8%83%BD%E2%80%9D%E5%B0%8F%E7%A8%8B%E5%BA%8F%E3%80%82%202%20%E7%8E%B0%E5%9C%A8%E4%BB%8E%E5%88%97%E8%A1%A8%E4%B8%AD%E6%9F%A5%E6%89%BE%E2%80%9CHyper-V%E2%80%9D%E9%80%89%E9%A1%B9%EF%BC%8C%E7%84%B6%E5%90%8E%E9%80%89%E4%B8%AD%E6%97%81%E8%BE%B9%E7%9A%84%E6%A1%86%E3%80%82%20%E7%84%B6%E5%90%8E%E5%8D%95%E5%87%BB%E2%80%9C%E7%A1%AE%E5%AE%9A%E2%80%9D%E3%80%82%203%20%E6%82%A8%E7%8E%B0%E5%9C%A8%E5%B0%86%E7%9C%8B%E5%88%B0%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E6%9B%B4%E6%94%B9%E7%9A%84%E7%AA%97%E5%8F%A3%E3%80%82%20%E5%AE%8C%E6%88%90%E5%90%8E%E5%8D%95%E5%87%BB%E5%85%B3%E9%97%AD%E3%80%82)`

```bash
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V -All /LimitAccess /ALL
pause
```

4. 重新启动后，键入 `Windows + R`运行框，然后键入`optionalfeatures.exe`并回车

> 补充说明：`win`键搜索控制面板并打开 `-->`程序`-->`启用或关闭 `windows` 功能也可以

5. 勾选 `Hyper-V`、适用于`Linux `的`Windows`子系统、虚拟机平台和`Windows`虚拟机监控程序平台这四个选项，然后点击确定`---`等它安装后重启电脑

> 补充说明：参考`[https://learn.microsoft.com/zh-cn/windows/wsl/install-manual](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual)`也可以

![Snipaste_2024-04-01_20-49-15.png](https://cdn.nlark.com/yuque/0/2024/png/29339315/1711975783964-07804944-4de3-4200-87b4-6135d3653a6c.png#averageHue=%23faf9f6&clientId=u99c31b4a-3790-4&from=drop&id=u2b62b3d5&originHeight=518&originWidth=914&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=48091&status=done&style=none&taskId=u2f26fe95-f19b-4846-9d0e-d6188ba5b3b&title=)

6. 检测：按 `Windows + S`打开搜索框并输入`Hyper V`；若有搜索结果则成功

> 若搜索结果中没有，则`Windows+R` 键打开运行窗口；然后键入 `virtmgmt.msc`并按` Enter`

7. 以管理员身份打开终端，然后输入下面的代码

> 补充说明：下面命令用于`Windows`启动时加载`Hyper-V`的必要程序资源，企业版不需要

```bash
bcdedit /set hypervisorlaunchtype auto
```

8. 终端执行`wsl --set-default-version 2`启用`wsl2`

### 安装

1. 打开终端，输入下面的代码安装`WSL``Ubuntu``----`会自动运行`Ubuntu`

> 补充：若运行`Ubuntu`出现`WslRegisterDistribution failed with error: 0x800701bc Error: 0x800701bc WSL 2 ?????????????????? https://aka.ms/wsl2kernel` ， 则参考`[https://blog.csdn.net/microsoft_mos/article/details/123627295](https://blog.csdn.net/microsoft_mos/article/details/123627295)`

> 补充：若执行命令遇到`0x80072ee7`，则打开微软商店搜索`ubuntu`，找到一个合适的版本下载；或者参考`[https://blog.csdn.net/zyk961755/article/details/137907793](https://blog.csdn.net/zyk961755/article/details/137907793)``---`没试过

```bash
wsl --install -d Ubuntu
```

2. 设置默认用户名和密码`---`均设置为`liu---`**默认为**`**Linux**`**管理员，具备和**`**root**`**相同的权限**

![v2-6da09645074440eb14d23c85a8bd2fa5_b.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/29339315/1668095364408-816d7924-1936-4f85-a2b1-a68f72256094.jpeg#averageHue=%231c1c1c&clientId=uc737aeea-6933-4&from=drop&id=u71b67a39&originHeight=376&originWidth=720&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24446&status=done&style=none&taskId=u32b973fe-3682-4880-9fe2-e14f806ac29&title=)

3. 查看版本： `wsl -l -v``---`查看使用的`wsl2`还是`wsl1`

> 补充：若安装的`linux`发行版使用的是`wsl1`，则可使用`wsl --set-version <distro name> 2`升级

![image.png](https://cdn.nlark.com/yuque/0/2024/png/29339315/1721028770722-9af182fb-c928-46c6-bcd0-f33f69151916.png#averageHue=%23191919&clientId=u1486f8d4-13d4-4&from=paste&height=226&id=uf19f3847&originHeight=226&originWidth=683&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26496&status=done&style=none&taskId=uec991bea-8e71-4916-ae0f-a6e49402f6a&title=&width=683)

4. 输入下面的命令来升级`Ubuntu`系统的包管理器

```bash
sudo apt update && sudo apt upgrade
```

[安装 WSL](https://learn.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command)
[设置 WSL 开发环境](https://docs.microsoft.com/zh-cn/windows/wsl/user-support)

## 安装`docker`

### 安装

1. 点击下面链接进入官网下载页面`---`前提：必须先安装了`WSL`

> 参考：`[https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-containers](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-containers)`

> 补充：若访问不了，要么翻墙要么`[https://mirrors.aliyun.com/docker-toolbox/windows/docker-for-windows/stable/?spm=a2c6h.25603864.0.0.31bf5d5ejSKfOZ](https://mirrors.aliyun.com/docker-toolbox/windows/docker-for-windows/stable/?spm=a2c6h.25603864.0.0.31bf5d5ejSKfOZ)`

[Install on Windows](https://docs.docker.com/desktop/install/windows-install/)

2. 点击 `Docker Desktop for Windows`

![Snipaste_2022-11-11_23-33-35.png](https://cdn.nlark.com/yuque/0/2022/png/29339315/1668180823812-b516a297-8a66-46e5-a532-a283a7dc4cea.png#averageHue=%23cde5f8&clientId=u69060472-cf2a-4&from=drop&id=u42a0846f&originHeight=170&originWidth=1095&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13028&status=done&style=none&taskId=uf782a0f4-49d3-475e-82db-b1eaa422d4d&title=)

3. 下载并安装；按照步骤正常安装即可

### 配置

1. 设置国内镜像源：如图操作，然后复制粘贴

![](https://cdn.nlark.com/yuque/0/2024/png/29339315/1721024528063-7d9aea5d-f93e-4895-b1c1-c40f2d5e31e2.png#averageHue=%23ebeef6&clientId=ua0333623-7693-4&from=paste&id=u28ddae83&originHeight=806&originWidth=1503&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc4fbbaac-e3ad-4192-8bee-656cd3cf8bd&title=)
![](https://cdn.nlark.com/yuque/0/2024/png/29339315/1721024531067-1fd3c399-c5bc-4b56-9d4b-61cb88ad9af2.png#averageHue=%23ebeff6&clientId=ua0333623-7693-4&from=paste&id=ufd8d691a&originHeight=839&originWidth=1595&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u48862f8f-27d1-4a9a-a8b8-5f614e6fad2&title=)

```yaml
 "registry-mirrors": [
        "https://hub.uuuadc.top",
        "https://docker.anyhub.us.kg",
        "https://dockerhub.jobcher.com",
        "https://dockerhub.icu",
        "https://docker.ckyl.me",
        "https://docker.awsl9527.cn"
    ]
```

2. 若遇见`error during connect: In the default daemon configuration on Windows, the docker client must be run with elevated privileges to connect.: Get http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/containers/json: open //./pipe/docker_engine: The system cannot find the file specified`参考`[https://blog.csdn.net/nyasm/article/details/121569182](https://blog.csdn.net/nyasm/article/details/121569182)`

### 检查

1. 打开终端, 输入命令`docker --version` 查看`Docker`的版本
2. 输入命令`docker-compose --version` 查看`Compose`的版本
3. 输入命令`docker`, 如图即安装正确(部分)

![Snipaste_2022-11-11_23-47-02.png](https://cdn.nlark.com/yuque/0/2022/png/29339315/1668181644602-13447e3f-04a5-4e77-aa88-f06213c7905c.png#averageHue=%231a1a1a&clientId=u69060472-cf2a-4&from=drop&id=Kng0Z&originHeight=502&originWidth=977&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57168&status=done&style=none&taskId=u1a2d256b-3eec-4452-8c2a-d0d70ccb230&title=)

## 安装`web ui`

1. 终端执行`docker run --security-opt seccomp=unconfined -d -p 3210:3210 --name lobe-chat lobehub/lobe-chat`命令

> 问题参考：`[https://juejin.cn/post/7322842829775781951](https://juejin.cn/post/7322842829775781951)`

> 安装参考：`[https://blog.csdn.net/qq_28171389/article/details/140084682](https://blog.csdn.net/qq_28171389/article/details/140084682)`

2. 浏览器访问`localhost:3210`
3. 点击设置，点击语言模块选择之前安装的模型，然后点击系统助手，切换成之前安装的模型，最后在聊天界面中切换成之前安装的模型

![image.png](https://cdn.nlark.com/yuque/0/2024/png/29339315/1721033397173-665279db-7e29-46b3-b4da-7032f2e9006a.png#averageHue=%231f1d1d&clientId=u02ea3ea8-5992-4&from=paste&height=509&id=uaf47233f&originHeight=509&originWidth=985&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52862&status=done&style=none&taskId=u09d1b54d-f8c2-4f33-82b7-96f37d63b59&title=&width=985)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/29339315/1721033426491-cda0b9f4-ffc3-4a28-ab1d-20936ec5aeea.png#averageHue=%231a1a1a&clientId=u02ea3ea8-5992-4&from=paste&height=507&id=u3bd5fa6e&originHeight=507&originWidth=1025&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50127&status=done&style=none&taskId=uc8996dcf-0491-474f-a3cc-fea05528a61&title=&width=1025)
![image.png](https://cdn.nlark.com/yuque/0/2024/png/29339315/1721033439602-152f9d7c-30a3-4f18-80d0-d8d17c621dea.png#averageHue=%23060505&clientId=u02ea3ea8-5992-4&from=paste&height=316&id=u42755642&originHeight=316&originWidth=1516&originalType=binary&ratio=1&rotation=0&showTitle=false&size=31738&status=done&style=none&taskId=u40017a05-6cbf-44be-b70f-b4a49911143&title=&width=1516)

## 配合编辑器

1. 安装插件：`idea/vscode`安装插件`continue``---``250M`大，下载起来比较慢；下载完后侧边栏会有插件的图标，点击即可进行`chat`/设置模型
2. 模型设置：`[https://docs.continue.dev/setup/overview](https://docs.continue.dev/setup/overview)`