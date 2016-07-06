# jquery

Jquery是继prototype之后又一个优秀的Javascript库。它是轻量级的js库 ，它兼容CSS3，还兼容各种浏览器（IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+），jQuery2.0及后续版本将不再支持IE6/7/8浏览器，但1.x继续维护。

jQuery使用户能更方便地处理HTML（标准通用标记语言下的一个应用）、events、实现动画效果，并且方便地为网站提供AJAX交互。

jQuery还有一个比较大的优势是，它的文档说明很全，而且各种应用也说得很详细，同时还有许多成熟的插件可供选择。jQuery能够使用户的html页面保持代码和html内容分离，也就是说，不用再在html里面插入一堆js来调用命令了，只需要定义id即可。

jquery的流行造成了

1. 移动端常用的库zepto API完全兼容jquery，其实就是去掉了很多浏览器兼容处理、功能精简的jquery，动画库velocity.js API和jQuery兼容

2. jquery UI 提供了很多依托于jquery的组件

3. 大名鼎鼎的BootStrap也是要求jquery的

## jQuery 对象

jQuery对使用者仅仅暴露了一个对象`$`，该对象提供了很多方法供我们使用

## 特点

1. 强大的选择器

2. 方便的操作DOM

3. 较好的浏览器兼容性

4. 方便的Ajax和事件操作

5. 链式调用

6. 方便的处理动画

&nbsp;

	$('div .current');

	$('li').append(dom).css('opacity', '0.2');

	$('span').css({
		color: '#333',
		background: '#fff',
		border: 'solid 1px #333'

## jQuery对象与DOM对象

通过jQuery获取出来的对象有三个特点

1. 永远不可能为空对象，判断是否没有结果需要判断其`length`属性

2. 即使是结果仅有一个，获取出的对象内组织仍为数组

3. 使用jQuery获取的对象并不是DOM对象，而是对DOM对象的一层封装，并为其添加了jQuery的一些属性和方法，方便操作，我们称为jQuery对象

### jQuery对象转DOM对象

	var jqObj = $('div'); //获取页面所有div元素，结果为jQuery对象结果集

	var dom = jqObj[index]; //得出的就是index索引值对应的DOM对象

	var dom = jqObj.get(index); //和上面写法结果一毛一样

	//想获取特定的jquery对象，又不想转换为DOM对象

	var jqObjSe = jqObj.eq(index);

### DOM对象转换为jQuery对象

	var dom = document.getElementById('test');

	var jqObj = $(dom);
	});

	$.ajax({
		type: 'post',
		url: url,
		data: {
			name: 'Byron',
			age: 24
		}
	}).done(function(data){
		console.log(data);
	});

	$('div').on('click', function(e){
		console.log(this);
	});

## 使用jquery

1. 下载jquery文件

2. 在页面通过`script`标签引入文件

3. 开始使用`$`对象
