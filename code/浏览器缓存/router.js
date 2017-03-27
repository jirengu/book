app.get('/hello', function(req, res) {
   res.set({
  //   'Content-Type': 'text/plain',
       'Cache-Control': 'no-cache',//'max-age=100',//'no-cache',//public
       'ETag': 'W/"12-OxURu51ozA5HGdvhcKXzUBz8GWa'
  //   'Expires': new Date().toUTCString()
  });
  res.send('hello worldssassss');
});