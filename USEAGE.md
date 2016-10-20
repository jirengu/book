## 使用方法

1. 系统安装 gitbook

```
npm install -g gitbook

```

2. clone 当前课件，执行初始化

```
git clone git@gitlab.jirengu.com:hunger/book-jirengu-com-fe.git
cd book-jirengu-com-fe
npm install

```

3. 写课件

课件目录为`SUMMARY.MD`，课件内容为对应文件夹 markdown 文件，demo 目录为 `code`

4. 编译上传课件

第一次运行执行（用于给_book的目录初始化成 git 项目绑定 github 地址，后续提交到课件平台都只提交这个文件夹）

```
npm run init
```

后续每次更改课件执行

```
npm start
```

over~

