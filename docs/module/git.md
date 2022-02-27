### 说明

>参考资料：玩转 Git 三剑客 课程 及 日常工作犯错！！

## 一、介绍git
>开源的版本管理工具，具有最优的存储能⼒，⾮凡的性能。
>
>很容易做备份，支持离线操作。
>
>规范工作流程；

## 二、git安装
> [git安装](https://git-scm.com/downloads)
> 
> 检查安装结果:在 bash 下执⾏下⾯的命令，看是否返回 git 的版本
> 
> $ git --version

![git安装](git/git安装.jpg)

## 三、最⼩配置

### 1、配置 user 信息

#### Ⅰ - 配置user.name和user.email
 ```bash
$ git config --global user.name ‘your_name’ 
$ git config --global user.email ‘your_email@domain.com’
 ```
* config的三个作⽤域
  
 >缺省等同于 local

  ```bash
$ git config --local   #local只对仓库有效
$ git config --global  #global对登录⽤户所有仓库有效
$ git config --system  #system对系统的所有⽤户有效
 ```
* 显示 config 的配置，加 --list

```bash
$ git config --list --local 
$ git config --list --global 
$ git config --list --system
```

#### Ⅱ - 设置与清除

* 设置，缺省等同于 local
```bash
$ git config --local 
$ git config --global 
$ git config --system
```

* 清除，--unset
```bash
$ git config --unset --local user.name 
$ git config --unset --global user.name 
$ git config --unset --system user.name
```

!> 优先级： local > global > system


## 四、基础命令

#### Ⅰ - 创建仓库

> * 两种方式
  1. ⽤ Git 之前已经有项⽬代码
  
 ```bash
      $ cd 项⽬代码所在的⽂件夹
      $ git init   
  ```


  2. ⽤ Git 之前还没有项⽬代码
  
 ```bash
    $ cd 某个⽂件夹
    $ git init your_project #会在当前路径下创建和项⽬名称同名的⽂件夹
    $ cd your_project
  ```

  #### Ⅱ - 向仓库⾥添加⽂件

  ![git提交流程](git/git提交流程.jpg)

> 将本地待提交的文件添加到缓存区
> 
> 1.git add .
> 
> 提交版本记录
> 
> 2.git commit -m  
> 
> 3.推送到远端前先将本地项目与远端最新版本保持一致,所以先**拉取下远端最新版本**
> 
> git pull
> 
> 4.将本地文件推送给远端
> 
> git push
> 
> 提交代码的时候遇到**冲突的话一定要解决冲突**之后再重新commit,pull,push;有冲突不用慌，及时反馈给自己的leader,merge分支的时候也能补救！！
> 
> 5.查看提交的日志信息
> 
> git log
> 


?>  [commit 规范](https://blog.csdn.net/qq_32944491/article/details/122840243?spm=1001.2014.3001.5502) 本人之前的规范记录仅供参考,根据团队的情况去进行commit 规范！！

## 五、git可视化工具

?> [TortoiseGit](https://tortoisegit.org/download/)

![git可视化工具](git/git可视化工具.jpg)


## 六、提交遇见的一些问题

>git push的时候提示"fatal: unable to access 'https://github.com/xxxxx/xxxx.git/': Failed to connect to github.com port 443: Timed out
>
>此时账户和密码框都没有进行弹出；
>
!> 解决办法：输入以下命令 **git config --global --unset http.proxy**然后就可以重新push了。

## 常用Git命令总结

- git config --global user.name "你的名字" 让你全部的Git仓库绑定你的名字
- git config --global user.email "你的邮箱" 让你全部的Git仓库绑定你的邮箱
- git init 初始化你的仓库
- git add . 把工作区的文件全部提交到暂存区
- git add ./<file>/ 把工作区的<file>文件提交到暂存区
- git commit -m "xxx" 把暂存区的所有文件提交到仓库区，暂存区空空荡荡
- git remote add origin https://github.com/name/name_cangku.git 把本地仓库与远程仓库连接起来
- git push -u origin master 把仓库区的主分支master提交到远程仓库里
- git push -u origin <其他分支> 把其他分支提交到远程仓库
- git status查看当前仓库的状态
- git diff 查看文件修改的具体内容
- git log 显示从最近到最远的提交历史  git log --pretty=oneline(更简洁的方式显示)
- git clone + 仓库地址下载克隆文件
- git reset --hard + 版本号 回溯版本，版本号在commit的时候与master跟随在一起
- git reflog 显示命令历史
- git checkout -- <file> 撤销命令，用版本库里的文件替换掉工作区的文件。我觉得就像是Git世界的ctrl + z
- git rm 删除版本库的文件
- git branch 查看当前所有分支
- git branch <分支名字> 创建分支
- git checkout <分支名字> 切换到分支
- git merge <分支名字> 合并分支
- git branch -d <分支名字> 删除分支,有可能会删除失败，因为Git会保护没有被合并的分支
- git branch -D + <分支名字> 强行删除，丢弃没被合并的分支
- git log --graph 查看分支合并图
- git merge --no-ff <分支名字> 合并分支的时候禁用Fast forward模式,因为这个模式会丢失分支历史信息
- git stash 当有其他任务插进来时，把当前工作现场“存储”起来,以后恢复后继续工作
- git stash list 查看你刚刚“存放”起来的工作去哪里了
- git stash apply 恢复却不删除stash内容
- git stash drop 删除stash内容
- git stash pop 恢复的同时把stash内容也删了
- git remote 查看远程库的信息，会显示origin，远程仓库默认名称为origin
- git remote -v 显示更详细的信息
- git pull 把最新的提交从远程仓库中抓取下来，在本地合并,和git push相反
- git rebase 把分叉的提交历史“整理”成一条直线，看上去更直观
- git tag 查看所有标签，可以知道历史版本的tag
- git tag <name> 打标签，默认为HEAD。比如git tag v1.0
- git tag <tagName> <版本号> 把版本号打上标签，版本号就是commit时，跟在旁边的一串字母数字
- git show <tagName> 查看标签信息
- git tag -a <tagName> -m "<说明>" 创建带说明的标签。-a指定标签名，-m指定说明文字
- git tag -d <tagName> 删除标签
- git push origin <tagname> 推送某个标签到远程
- git push origin --tags 一次性推送全部尚未推送到远程的本地标签
- git push origin :refs/tags/<tagname> 删除远程标签<tagname>
- git config --global color.ui true 让Git显示颜色，会让命令输出看起来更醒目
- git add -f <file> 强制提交已忽略的的文件
- git check-ignore -v <file> 检查为什么Git会忽略该文件

