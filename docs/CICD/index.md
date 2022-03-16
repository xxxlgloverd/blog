本来想用TravisCI去小试牛刀测试一下集成构建的，但是那个网站很不稳，需要从github中同步项目才能持续构建，两不稳咱还没翻墙工具，无奈放弃！然后就换了gitlab自带的CI/CD工具去进行集成初体验！

**为啥要用持续集成呢？**

 1. 快速发现错误；
 2. 方便整体工作流程，开发测试都很方便；

## 环境及工具
windows <br>
docker  <br>
gitlab/git <br>

因为是在window下的，大家不是可以从第二步开始进行
## 1.windows10环境下安装docker
w10家庭版没有hyperv！！！ 没有那就自己弄个~~
主要靠大佬们的技术贴
[Hyper-V安装过程](https://jingyan.baidu.com/article/d7130635e5678113fcf4757f.html)
[安装Docker Desktop报错WSL 2](https://blog.csdn.net/qq_39611230/article/details/108625840)
docker安装去官网根据自己的环境傻瓜式安装下哈~~
![docker安装成功](https://img-blog.csdnimg.cn/202dd624ca8d4ba29b6c4a6b96d270ef.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)

## 2.docker下安装及注册gitlab-runner
PowerShell 管理员身份执行命令

```javascript
//拉取gitlab-runner镜像
docker pull gitlab/gitlab-runner
//创建并运行gitlab-runner容器
docker run -d --name gitlab-runner --link gitlab --restart always -v /var/run/docker.sock:/var/run/docker.sock -v c:/docker/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner:latest
//注册一个gitlab-runner实例
docker exec -it gitlab-runner gitlab-runner register
//下图一些注册实例的配置

//配置完成之后重启runner命令
docker restart gitlab-runner
```
实例配置：
**token**是你在gitlub下**setting->CI/CD->Runners 下Specific runners** 中的token
![在这里插入图片描述](https://img-blog.csdnimg.cn/f14f8db9587c48e390f96496ab77cfe2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)
**tags标签** 自己定义（简单明了即可），后续配置.gitlub-ci.yml中有用到
**执行环境** docker
**dockers 镜像** alpine:laster
![在这里插入图片描述](https://img-blog.csdnimg.cn/120c9ce5e2e7496c86f4cadfcfb80244.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)

注册成功之后可以在**setting->CI/CD->Runners 下看到** 

![在这里插入图片描述](https://img-blog.csdnimg.cn/f0a782c25e074cb7874654e6791ae2f6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_16,color_FFFFFF,t_70,g_se,x_16)
注意：修改下配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/2d79f29086144bb1925abb61a0cfb3da.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_14,color_FFFFFF,t_70,g_se,x_16)
请勾上他！！！
![在这里插入图片描述](https://img-blog.csdnimg.cn/c587143c9bd541c5b50108a35efd2637.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)

执行runner过程中报错
![在这里插入图片描述](https://img-blog.csdnimg.cn/a873bf949fb640c783dbf558c4c971f7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)
到容器中执行下这个命令：
![在这里插入图片描述](https://img-blog.csdnimg.cn/93f78a54b4934b6aad973540e56c4f80.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/cc33e55829454ed9ba39d3efb3017083.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)

```javascript
touch /etc/gitlab-runner/config.toml
```
[解决上面问题的大佬技术贴在这里感谢！！](https://blog.csdn.net/qq_34596292/article/details/111349745)
成功一大半了，啊哈哈哈！！！
## 3.项目中配置.gitlab-ci.yml文件
前端项目根目录下.gitlab-ci.yml配置：

```javascript
# This file is a template, and might need editing before it works on your project.
# To contribute improvements to CI/CD templates, please follow the Development guide at:
# https://docs.gitlab.com/ee/development/cicd/templates.html
# This specific template is located at:
# https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Getting-Started.gitlab-ci.yml

# This is a sample GitLab CI/CD configuration file that should run without any modifications.
# It demonstrates a basic 3 stage CI/CD pipeline. Instead of real tests or scripts,
# it uses echo commands to simulate the pipeline execution.
#
# A pipeline is composed of independent jobs that run scripts, grouped into stages.
# Stages run in sequential order, but jobs within stages run in parallel.
#
# For more information, see: https://docs.gitlab.com/ee/ci/yaml/index.html#stages


# 依赖镜像
image: node:16.13.2

before_script:
  - echo "before script"
  - npm config set registry http://r.cnpmjs.org/

after_script:
  - echo "after script"

stages:          # List of stages for jobs, and their order of execution
  - test
  - build

lint-test-job: # This job runs in the test stage.
  stage: test    # It only starts when the job in the build stage completes successfully.
  script:
    - npm install
    - npm run lint
  tags:
    - test   #要使用哪个runner

build-job: # This job runs in the build stage, which runs first.
  stage: build
  script:
    - npm install
    - npm run build
  only:
    - main    #只监听main分支的代码提交
  tags:
    - test    #要使用哪个runner，之前注册的tags
  artifacts:
    paths:
        - dist/

```
此配置还有待优化，如增加缓存机制，缩短构建时间等

CI/CD中管道中查看
![在这里插入图片描述](https://img-blog.csdnimg.cn/0168fcc322684938aa1cecde2ca9763e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)
任务查看
![在这里插入图片描述](https://img-blog.csdnimg.cn/6b16009aade44c48a4b4a8459f17abfd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5oiR5LiN55im5L2G5b6I6YCX,size_20,color_FFFFFF,t_70,g_se,x_16)
以上记录初次构建的坑坑洼洼~~