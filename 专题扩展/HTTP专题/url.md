# URI和URL

* URI：统一资源标识符

* URL：统一资源定位符

与URI相比我们更熟悉URL，URL是使用浏览器等访问web页面的时候需要输入的网页地址

	http://www.baidu.com

URI是更通用的资源标识符，URL是它的一个子集

URI由两个主要的子集构成

1. URL：通过描述资源的位置来描述资源

2. URN：通过名字来识别资源，和位置无关

## URL

URI 是 Uniform Resource Identifier 的缩写

* Uniform：规定统一的格式，可方便处理各种不同类型的资源，而不用根据上下文环境来识别资源指定的访问方式，加入新的协议方案(HTTP, HTTPS, FTP等)也更容易

* Resource：资源的定义是“可以标识的任何东西”，除了文档文件、图像或者服务（天气预报）等能够区别于其他类型的，劝都可以称为资源，另外资源不仅可以是单一的，也可以是多数的集合体

* Identifier：表示可标识的对象，也成为标识符

综上所述，URI就是某个协议方案表示的资源的定位标识符，协议方案是指访问资源所使用的协议类型名称

采用HTTP协议的时候，协议方案就是http，除此之外还有ftp、mailto、file等。看几个例子

	ftp://ftp.is.co.za.rfc/rfc1808.txt
	http://samaritan89.github.io/f2e/js/ajax.html
	mailto:sunluyong@gmail.com
	telnet://192.0.2.16:80

## URL 格式

我们常见的URL主要由三部分组成

1. 方案，也就是我们常说的协议

2. 服务器位置

3. 资源路径

看个例子

	http://samaritan89.github.io/f2e/js/ajax.html

通用的URL由9部分组成

	<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<hash>

* 对于web页面来说最常用的协议就是http和https

* user和password现在不常见了，不会在URL明文书写用户名和密码了，都是通过登录的方式

* 主机可以是IPO地址过着域名

* 端口号用来区分主机上的进程，方便找到web服务器，http默认是80

* path是资源的路径，也就是存放位置，不一定和物理路径完全对应，符合web服务器路由约定即可

* params，在一些协议中需要参数来访问资源，例如ftp是二进制还是文本传输，参数是名值对，用`;`隔开

* query：这个是get请求最常用的传递参数方式了 ?a=1&b=2&=3

* hash也成为片段，设计为标识文档的一部分，很多MVVM框架用作了路由功能

## 相对URL

相对URL是URL一部分，从路径开始，前面木人使用当前文档的设置

	./image/logo.png
	../script/a.js
	/css/main.css





