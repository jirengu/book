# let和const

## let

### 块作用域

let所声明的变量，只在let命令所在的代码块内有效，这也就是我们所谓的块作用域

	{
	  let a = 1;
	}

	console.log(a); // ReferenceError

### 不允许重复声明

let不允许在相同作用域内，重复声明同一个变量。

	{
	  let a = 1;
	  var a = 2; // TypeError: Identifier 'PI' has already been declared
	}


### 变量不提升

不同于var声明变量存在变量提升，let声明的变量不会有这种效果

>The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated

其实说不可提升并不准确，应该说变量已存在，但不可读

	console.log(a); // ReferenceError
	let a = 1;

## const

所谓常量是指赋值之后不能变化的量， 之前javascript是不存在常量的，变量赋值后可以随意修改

ES6 引入了const关键字定义常量

	const PI = 3.14;
	PI // 3.14

### 不可修改

改变常量的值是不起作用的，但是不会报错，只是无效

	PI = 3.1415;
	PI; // 3.14

### 块作用域、变量不提升、不可重复声明

这个个let一样，只在声明的块内有效，变量声明也不提升，同一块内不可重复声明

	{
		console.log(PI); // ReferenceError
		const PI = 3.14;
		const PI = 3.1415; // TypeError: Identifier 'PI' has already been declared
	}

	PI; // ReferenceError

值得注意的是如果常量是对象，不能把常量指向另一个地址，但对象本身是可变的

	const a = [];
	a.push("Hello"); // 可执行
	a = ["test"];    // 报错

## 全局变量

ES5规定，所有全局变量都是全局对象的属性。

ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。

	var a = 1;
	window.a // 1

	let b = 1;
	window.b // undefined
