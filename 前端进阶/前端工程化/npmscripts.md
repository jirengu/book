```
{
  "scripts": {
    "css:scss": "app=node-sass npm run check; node-sass --output-style compressed -o dist/css src/scss",
    "css:autoprefixer": "app=postcss-cli npm run check; app=autoprefixer npm run check; postcss -u autoprefixer -r dist/css/*",
    "css:compress": "app=csso npm run check; csso in.css --output out.css",
    "css:less": "app=less npm run check; lessc --clean-css styles.less styles.min.css",

    "js:webpack": "app=webpack npm run check; webpack",
    "js:webpack:uncompress": "app=webpack npm run check; uglify=0 webpack",
    "js:lint": "app=eslint npm run check; && eslint src/js",
    "js:uglify": "app=uglifyjs npm run check; mkdir -p dist/js && uglifyjs src/js/*.js -m -o dist/js/app.js",

    "image:imagemin": "app=imagemin-cli npm run check; imagemin src/images dist/images -p",

    "server": "app=browser-sync npm run check; browser-sync start --server --files 'dist/css/*.css, dist/js/*.js'",

    "watch": "app=onchange npm run check; onchange 'src/js/*.js' -- npm run build:js",

    "watch:webpack": "onchange 'public/src/js/**/!(bundle.js)' -- npm run webpack:js",
    "watch:all": "app=parallelshell npm run check; parallelshell 'npm run css:autoprefixer' 'npm run js:init' ",

    "check": "[ -z \"$(app=$app node -p 'try{url=process.env.app+\"/package.json\"; require(url).version}catch(e){exports=\"\"}')\" ] && npm i -D $app || echo \"already installed $app\"; "
  }
}

```