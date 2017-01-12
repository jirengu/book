app.get('/hello', function(req, res) {
	res.set({
		'Content-Type': 'text/plain',
		'Cache-Control': 'public',//'max-age=100',//'no-cache',//
		//'ETag': 'W/"c-uWuHitcvVnCdu1Yo4c6abc"'
		//'Expires': new Date().toUTCString()
	});
	res.send('hello worldssassss');
});