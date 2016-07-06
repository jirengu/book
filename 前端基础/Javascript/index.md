# JavaScript基础-字符串、数组
## 课程目标
- 掌握javascript中的字符串的操作
- 掌握数组的操作

## 课程内容
### 数组
#### 1.数组定义， 访问
    var arr1 = new Array(),
        arr2 = ['dog', 'cat'],
        arr3 = ['dog', 1, {a:1, b:2}],  //数组元素是任意值
        arr4 = [1, 2, , 3],  //1,2,undefined, 3
        arr5 = [1, 2, 3,],  // ie8及以下是1,2,3,undefined 长度为4， chrome 为1，2，3 长度为3  不推荐
        len = arr2.length;
        
    var a = arr2[0];  // 访问第1个元素
    var b = arr2[2];  //undefined
    arr3[1] = 2;   //设置元素
    arr4[arr4.length] = 4;
    arr4[arr4.length] = 5;
    arr2[99] = 1;  // arr2.length = 100

#### 2.数组的检测，转换
    var arr = [1, 3, 4];
    arr instanceof Array
    $.isArray(arr) // jquery
    console.log(arr.join('-')); //数组链接成字符串

#### 3.数组遍历 添减
    var arr = ['a', 'b', 'c'];
    for(var i = 0; i< arr.length; i++){
      console.log(arr[i]);
    }
    $.each(arr, function(idx, value){
        cosnole.log(i+":"+value);
    });
  
    arr.push('d', 'e');
    arr.pop();  //推出最后一项
    arr.shift(); //推出第一项
    arr.unshift('f'); //推入第一项

#### 4.排序
    var arr = [2, 1, 4, 0, 5];
    arr.reverse();
    arr.sort();

#### 5.删减
    var a1 = [1,2,3];
    var a2 = [4,5,6];
    var a3 = a1.concat(a2);
    a3.slice(2,4); // 3,4

### 字符串
#### 1. 长度计算,连接
    var str = "hello";
    console.log( str.length );
    console.log( str[0] );
    console.log( str[str.length - 1]  );
    console.log( str.charAt(0) );
    console.log( str.charCodeAt(0) );
    
    var str2 = " world";
    var str3 = str1 + str2;
    cosnole.log( str3 );
    
#### 2. 字符串截取 
    var str = "hello world";
    var sub1 = str.subStr(1, 3); // 第一个是开始位置， 第二个是长度  ell
    var sub2 = str.subString(1, 3); // 第一个是开始位置，第二个是结束位置，长度为第二个－第一个  el
    var sub3 = str.slice(1, 3); // 同上 允许负参

#### 3. 查找
    var str = "hello my world";
    var s1 = str.search('my');   //6 找不到为-1
    var s2 = str.replace('my', 'your'); //
    var s3 = str.match('my'); //返回匹配的数组

#### 4. 大小写
    var str = "Hello";
    str.toUpperCase();
    str.toLowerCase();

### JSON
josn是轻量级的数据交换格式

#### 1. JSON格式, 读取, 设置
    var obj = {"name":"keivn", "age": 100}; 
    var obj2 = {name: 'car', color: 'red'};
    var obj3 = {1: 'a', 100: 'b'};
    
    console.log( obj.name );
    console.log( obj['age'] );
    var key = "age";
    cosnole.log( obj[key]);
    console.log( obj3.1 ); //error
    console.log( obj3[1] ) //ok
    console.log( obj3["1"] ) //ok
    
    obj.name = "Peter";
    obj.sex = "man";
    obj['height'] = "1.82";
    
    console.log('json.....');
    var people = {
        name: 'kevin',
        age: 100,
        dog: {
            name: 'yellow',
            age: 3
        }
    };
    console.log(people.name);
    console.log(people.dog);
    console.log(people.dog.name);
    console.log(people['name']);
    console.log(people['dog']['age']);

    var obj = {
        1: 'hello',
        2: 'world'
    }
    console.log('obj...');
    console.log(obj['1']);
    //console.log(obj.1); //error
    
    var ke = 'name';
    console.log('---另一种形式--');
    console.log( people[ke] );

    console.log('for-----');
    for(var k in people){
        console.log( k + ':' + people[key]  );
    }


#### 2. JSON解析
    var obj = {"name":"keivn", "age": 100}; 
    var objStr = JSON.stringify(obj);  // ie8+
    var str = '{"a":1, "b":2}';
    var o = JSON.parse(str);
    console.log(o)

### 课下练习
1. 把上面的例子在控制太跑一遍，一定要做！！

2. 写一个函数，参数是一个对象，遍历输出里面的所有属性和值

# 
    
        var people = {
            name: 'kevin',
            age: 100,
            dog: {
                name: 'yellow',
                age: 3
            }
        }
        funcion putObj(obj){
            
        }
        putObj(ob);

        提示： typeof obj == "object";
        
        输出: 
            name: 'kevin'
            age: 100
            dog: 
                name: yellow
                age:3

     
     


