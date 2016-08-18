# CSS性能优化

## 执行效率

### 不用CSS表达式

无论怎样生成的CSS，最终我们放到页面上得是静态普通文本，没有变量、计算神马的，CSS表达式是一种动态设置CSS属性的东东，被IE5-IE8支持，看一个大家常用的例子

	body {
	  background-color: expression((new Date()).getHours()%2?"#B8D4FF":"#F08A00");
	}

这样我们赋予了CSS类似JavaScript的功能，CSS表达式非常强大，甚至可以使用CSS表达式实现 `min-width` 属性，隔行换色，模拟 :hover, :before, :after 等伪类

看起来能解决很多IE下的浏览器兼容性等问题，但是其带来的副作用超出我们的想象，这条CSS规则并不是只运行一次，为了确保有效性，CSS表达式会进行频繁的求值，当改变窗口大小，滚动页面甚至移动鼠标都会触发表达式进行求值，如此频繁的求值以至于浏览器的性能收到严重的影响。

据《高性能网站建设建议》中的[测试](http://stevesouders.com/hpws/expression-counter.php)其执行次数远远超出我们想象，感兴趣同学可以进去看看，我们的建议就是尽量避免甚至不要使用CSS表达式

当然这个要和Saas、Less 等CSS预处理器区分开，预处理器中虽然使用了变量，但是会在上线前处理为静态的CSS，本质上还是没有变量和表达式（Less现在普遍也是使用线下生成了）

### 避免适用通配符或隐式通配符

CSS中的`*`代表通配符，虽然好用但使用不当这也是一个恶魔，比如

	body * {padding:0;margin:0;}

我们以为这是对body的子结点都设置一些属性，但因为CSS继承特性的原因，页面所有元素都会接受这个规则，对于复杂的页面在性能上的影响还是很大的，这并不是说不能使用通配符，而是说使用的时候要注意范围。相信这个规则大家都知道，但是有一些隐式的通配符也需要我们的注意，比如

	:visible{
	  padding:0;
	}

这样的几乎就和通配符一样，在使用的时候一定要注意范围限制问题

### 避免层级或过度限制的CSS

和大家的设想不一样，CSS是从**右到左解析**的，而不是我们认为的从左到右，关于为什么这样做肯定是因为高效，不明就里的同学可以上网搜一下相关知识

#### 不要用标签或 class 来限制 ID 规则

这个应该是个常识，但很多同学都会误用，写出`#test.info`或者`div#test`这样的选择器，这个只能说是画蛇添足，id已经可以唯一而且最快的定位一个元素了

#### 不要用标签名限制 class 规则

 这个估计被误用的更多，如`div.info`这样的写法，其实我们可以直接写为`.info`，从右到左解析，如果直接使用class不能达到目的，一般情况下应该是class设计的有问题，CSS需要重构了

#### 尽量使用最具体的类别、避免后代选择器、属于标签类别的规则永远不要包含子选择器

这三条规则是相通的，因为从右到左解析关系，在CSS选择器中后代选择器非但没有帮我们加快CSS查找，反而后代选择器是 CSS 中耗费最昂贵的选择器。 它的耗费是极其昂贵的—特别是当选择器在标签或通用类别中，是当使用子选择器时要十分谨慎，能免则免

对此我们可以通过具体类别——使用单一或尽量少的class解决

##	CSS放在head中，减少repaint和reflow

相信做web的同学都知道这条建议，但为什么CSS放在页面顶部有利于网页优化呢？

浏览器渲染页面大概是这样的，当浏览器从上到下一边下载html生成DOM tree一边根据浏览器默认及现有CSS生成render tree来渲染页面，当遇到新的CSS的时候下载并结合现有CSS重新生成render tree，刚才的渲染工作就白费了，如果我们把所有CSS都放到页面顶部，这样就没有重新渲染的过程了

对浏览器工作原理有兴趣的同学可以看看神文 [浏览器的工作原理：新式网络浏览器幕后揭秘](http://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)，相信会对浏览器工作原理有深入的认识

类似的我们知道了这个也应该在脚本中注意尽量减少repaint和reflow，什么情况会导致这两种情况呢

**reflow**：当DOM元素出现隐藏、显示、尺寸变化、位置变化的时候都会让浏览器重新渲染页面，之前渲染工作白费了

**repaint**：当元素的背景颜色、边框颜色的变化不引起reflow时会让浏览器重新渲染该元素，貌似还可以接受，但如果我们在开始就定义好了，不让浏览器重复工作就更好了。


## 网络性能

### CSS压缩

CSS压缩并不是什么高端的姿势，但却很有用，其原理很简单，就是把我们CSS中没用的空白符等删去，达到缩减字符个数的目的

我们有这样一段CSS脚本

	.test{
	    background-color:#ffffff;
	    background-image:url(a.jpg);
	}

经过压缩后会变成这样

	.test{ background-color:#fff;  background-image:url(a.jpg)}

当然高级些的压缩工具也会帮我们优化一些语法，提供很多选项，让我们的压缩更有控制，之前在的公司不采用CSS压缩，所以我没有什么实践经验，自己写东西常用的是YUI Compressor，有很多在线版的很方便

### gzip压缩

Gzip是一种流行的文件压缩算法，现在的应用十分广泛，尤其是在Linux平台，这个不止是对CSS，当应用Gzip压缩到一个纯文本文件时，效果是非常明显的，大约可以减少70％以上的文件大小（这取决于文件中的内容）。想进一步了解gzip看看[维基百科](http://zh.wikipedia.org/wiki/Gzip)

在没有gzip压缩的情况下，Web服务器直接把html页面、CSS脚本、js脚本发送给浏览器，而支持gzip的Web服务器将把文件压缩后再发给浏览器，浏览器（支持gzip）在本地进行解压和解码，并显示原文件。这样我们传输的文件字节数减少了，自然可以达到网络性能优化的目的。gzip压缩需要服务器的支持，所以我们需要在服务器端进行配置

[在IIS上启用Gzip压缩](http://www.cnblogs.com/zhangziqiu/archive/2009/05/17/gzip.html)

[apache启用gzip压缩方法](http://www.cnblogs.com/linzhenjie/archive/2013/03/05/2943635.html)

[Nginx Gzip 压缩配置](http://www.cnblogs.com/zfying/archive/2012/07/07/2580876.html)

当然除了gzip压缩，缓存也是我们需要注意的，这和CSS优化关系不大了

### 合写CSS

除了压缩的方式，我们还可以通过少写CSS属性来达到减少CSS字节的目的，拿个最常见的例子

	.test{
	 background-color: #000;
	 background-image: url(image.jpg);
	 background-position: left top;
	 background-repeat: no-repeat;
	}

我们可以改写一下上面的CSS，达到同样的效果

	.test{
	  background: #000 url(image.jpg) top left no-repeat;
	}

在CSS中还有很多类似的属性可以合写

**font**

	{font-style: oblique; font-weight: bold; font-size: 16px; font-family: Helvetica, Arial, Sans-Serif;}

	{font: oblique bold 16px Helvetica, Arial, Sans-Serif;}

**margin/padding**

	{margin-top: 5px; margin-right: 10px; margin-bottom: 20px; margin-left: 15px;}

	{margin: 5px 10px 20px 15px;}


	{padding-top: 5px; padding-right: 10px; padding-bottom: 5px; padding-left: 10px;}

	{padding: 5px 10px}


	{padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;}

	{padding:5px;}


**background**

	{background-color: #000; background-image: url(image.jpg); background-position: left top; background-repeat: no-repeat;}

	{background: #000 url(image.jpg) top left no-repeat;}

**border**

	{border-width: 2px; border-style: solid; border-color: #000;}

	{border: 2px solid #000;}


	{border-top: 2px; border-right: 5px; border-left: 10px; border-bottom: 3px;}

	{border: 2px 5px 10px 3px;}

另外CSS3添加的很多属性如`transform`、`animation`相关的都可以合写，不一一列举，大家用的时候要注意

### 利用继承

CSS的继承机制也可以帮我们在一定程度上缩减字节数，我们知道CSS有很多属性是可以继承的即在父容器设置了某些属性，子容器会默认也使用这些属性，因此如果我们希望全文字体尺寸是14px，大可不必为每个容器设置，只需要在body上设置就可以了

应用这个技巧，把CSS属性在可能的情况下提到父容器是可以帮我们节省CSS字节的，顺便说一下哪些属性可以继承

* 所有元素可继承：`visibility`和`cursor`

* 内联元素和块元素可继承：`letter-spacing`、`word-spacing`、`white-space`、`line-height`、`color`、`font`、 `font-family`、`font-size`、`font-style`、`font-variant`、`font-weight`、`text-decoration`、`text-transform`、`direction`

* 块状元素可继承：`text-indent`和`text-align`

* 列表元素可继承：`list-style`、`list-style-type`、`list-style-position`、`list-style-image`

* 表格元素可继承：`border-collapse`

* 不可继承的：`display`、`margin`、`border`、`padding`、`background`、`height`、`min-height`、`max-height`、`width`、`min-width`、`max-width`、`overflow`、`position`、`left`、`right`、`top`、 `bottom`、`z-index`、`float`、`clear`、`table-layout`、`vertical-align`、`page-break-after`、` page-bread-before`和`unicode-bidi`

### 不乱用CSS reset或属性设置

在网站建设中我们经常使用一些CSS reset，达到跨浏览器统一的目的，但是很多时候我们的CSS reset过于臃肿，主要有两个问题

1. 把很多浏览器对元素的默认属性又设置了一遍，比如div的padding和margin为0啊什么的，这是没有必要的

2. 把一些很不常用的元素的设置也写进了CSS reset，如 ruby这样的元素，为了极其少的情况额外增加了所有页面CSS字节数

网站都会有CSS reset，建议写的专业一些，可以参考 [css reset](http://www.cssreset.com/) 写出合适的reset



### 抽离、拆分CSS，不加载所有CSS

抽离CSS是指把一些通用的CSS放到一个文件内，而不是写到各个页面，这样一次下载后，其它页面用到的时候就可以利用缓存了，减少不必要的重复下载

应用抽离原则，在很多时候我们把页面通用的CSS写到了一个文件，这样加载一次后就可以利用缓存，但这样做并不适合所有场景，以前我写CSS把一些前端插件用的CSS全写到了一个页面，但是有时候页面只会用一个Dialog、有的页面只用到了一个TreeView，但却把十多个插件的CSS都下载到了页面，这就是问题了，所以虽然把CSS写到一个文件可以减少http请求，但像刚才的这种情况是不应该这样做的，对一些所有页面都会用到的我们可以这样做，所以我们在抽离和拆分的时候可要想好了
