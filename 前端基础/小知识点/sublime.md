# Sublime 的安装使用


## [Sublime](http://www.sublimetext.com/2)编辑器

> Sublime Text 是主流前端开发编辑器，具有漂亮的用户界面和强大的功能插件管理编辑，体积较小，运行速度快。

1、安装Package Control

按 Ctrl+` 调出console粘贴安装代码到底部命令行并回车,重启Sublime Text 2。

``` Bash
	import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')

```

如果在Perferences->package settings中看到package control这一项，则安装成功。

[如何安装]((https://packagecontrol.io/installation#st2))

2、用Package Control安装其他插件

按下Ctrl+Shift+P调出命令面板，输入install 调出 `Install Package `选项并回车，然后在列表中选中要安装的插件。



### 常用插件
- Emmet //用于代码快捷输入
- AutoFileName //资源引入自动提示
- CSS Format  //CSS 格式化
- DocBlockr   //添加注释
- HTMLBeautify  //HTML 格式化
- JsFormat    // JavaScript 格式化
- jshintify   // JavaScript 代码语法检查
- Pretty JSON  // JSON 格式化
- SublimeTmpl  // 新建模版文件
- Git          // Git 操作
- Browser Refresh  // 保存浏览器刷新

> 如果提示找不到安装包，可以手动下载插件，放入对应的目录
> 安装包[下载地址](https://packagecontrol.io/packages/Emmet)


## Emmet 插件快捷键



> 记住几个 Emmet 插件常见的快捷键可以使开发效率倍增

![](http://7xnk1s.com2.z0.glb.qiniucdn.com/emmet.png)


详细快捷键可[参考](http://docs.emmet.io/cheat-sheet/)

