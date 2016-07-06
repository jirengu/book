# JavaScript

>JavaScript，一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML网页上使用，用来给HTML网页增加动态功能。然而现在JavaScript也可被用于网络服务器，如Node.js


## 作用

JavaScript的发明目的，就是作为浏览器的内置脚本语言，使页面不再是纯粹的静态页面，可以和用户交互，更具用户行为，产生某些动作。它是目前唯一一种通用的浏览器脚本语言，所有主流浏览器全部支持。它可以让网页呈现各种特殊效果，为用户提供良好的互动体验


JavaScript （通常简称为 JS) 是一个轻量级的、解释型的、面向对象的、将函数视为一级公民的编程语言。它被多数人看作是用于网页编程的脚本语言，但也在很多非网页环境中运用，例如 node.js 或 Apache CouchDB。它是一种基于原型的、多范式的动态脚本语言，并且支持面向对象、命令式编程风格和函数式编程风格。

JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。

JavaScript的发明目的，就是作为浏览器的内置脚本语言，为网页开发者提供操控浏览器的能力。它是目前唯一一种通用的浏览器脚本语言，所有主流浏览器全部支持。它可以让网页呈现各种特殊效果，为用户提供良好的互动体验。

## 组成

1. ECMAScript，描述了该语言的语法和基本对象
	* 语法
	* 数据类型
	* 语句
	* 关键字
	* 保留字
	* 运算符
	* 对象
2. 文档对象模型（DOM），描述处理网页内容的方法和接口
	* DOM 节点
	* DOM 拓展
	* DOM 操作
3. 浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口
	* window
	* location
	* navigator
	* screen
	* history

![](http://g.hiphotos.baidu.com/baike/s%3D250/sign=103c88deb21c8701d2b6b5e3177f9e6e/730e0cf3d7ca7bcb3409f115bf096b63f624a89d.jpg)

## 特征

JavaScript脚本语言具有以下特点:

1. 脚本语言。JavaScript是一种解释型的脚本语言,C、C++等语言是先编译后执行,而JavaScript是在程序的运行过程中逐行进行解释

2. 基于对象。JavaScript是一种基于对象的脚本语言,它不仅可以创建对象,也能使用现有的对象。但是JavaScript即是面向过程的，也是面向对象的

3. 简单。JavaScript语言中采用的是弱类型的变量类型,对使用的数据类型未做出严格的要求,是基于Java基本语句和控制的脚本语言,其设计简单紧凑

4. 动态性。JavaScript是一种采用事件驱动的脚本语言,它不需要经过Web服务器就可以对用户的输入做出响应。在访问一个网页时,鼠标在网页中进行鼠标点击或上下移、窗口移动等操作JavaScript都可直接对这些事件给出相应的响应

5. 跨平台性。JavaScript脚本语言不依赖于操作系统,仅需要浏览器的支持。因此一个JavaScript脚本在编写后可以带到任意机器上使用,前提是机器上的浏览器支持JavaScript脚本语言,目前JavaScript已被大多数的浏览器所支持

不同于服务器端脚本语言，例如PHP与ASP，JavaScript主要被作为客户端脚本语言在用户的浏览器上运行，不需要服务器的支持。所以在早期程序员比较青睐于JavaScript以减少对服务器的负担，而与此同时也带来另一个问题：安全性。

而随着服务器的强壮，虽然现在的程序员更喜欢运行于服务端的脚本以保证安全，但JavaScript仍然以其跨平台、容易上手等优势大行其道。同时，有些特殊功能（如AJAX）必须依赖Javascript在客户端进行支持。随着引擎如V8和框架如Node.js的发展，及其事件驱动及异步IO等特性，JavaScript逐渐被用来编写服务器端程序。


## 页面引入

* 直接写在DOM结构中

		<div onclick="alert(123);">点击</dov>

* 通过`script`标签内嵌在HTML

		<script type="text/javascript">
			alert(123);
		</script>

* 通过`script`标签引入外部文件

		<script type="text/javascript" src="http://xxx/xxx/xxx.js"></script>



## 参考

[维基百科 JavaScript](http://zh.wikipedia.org/wiki/JavaScript)

[百度百科 javascript](http://baike.baidu.com/view/16168.htm)
