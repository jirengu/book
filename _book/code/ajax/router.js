/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/getMusic', function(req, res) {

	console.log('有请求来啦...');
	console.log(req.query);
	if(req.query.name === 'hunger'){
		res.send('你好 hunger');
	}else{
		setTimeout(function(){
			res.send('我不认识你');
		}, 10000)
		
	}
	// var data = {
	// 	name: 'hunger'
	// }

	// res.send(data);
});

app.post('/postArticle', function(req, res){
	console.log(req.body)
	res.send(req.body.article.substr(0, 10) + '...');
})
