var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    articleone:{
      title:'ArticleOne|Palaniappan',
      heading:'articleone',
      date:'may 5,2017',
       content:`<p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
            </p>
                
            <p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
            </p>
                
            <p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
             </p>`
    }, 
    articletwo:{
         title:'ArticleTwo|Palaniappan',
      heading:'articleone',
      date:'may 10,2017',
       content:`<p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
            </p>
                
            <p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
            </p>
                
            <p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
             </p>`
    },
    articlethree:{
         title:'ArticleThree|Palaniappan',
      heading:'articleone',
      date:'may 15,2017',
       content:`<p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
            </p>
                
            <p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
            </p>
                
            <p>
                    This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.This is the content of jy first webpage.
             </p>`
    },
};
function createtemplate (data){
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    var htmltemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
    </html>
    `;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req,res){
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
