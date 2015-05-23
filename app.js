var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('Some secret?'));
// Risorse statiche
app.use('/www', express.static(__dirname + '/www'));

app.use('/getRequest', function(req, res){
    console.log(req.headers);
    console.log(req.headers['X-CSRFToken']);
});

app.get('/', function(req, res){
    var options = {
    root: __dirname + '/www/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

    res.cookie('XSRF-TOKEN', 'PIPPO', { maxAge: 900000 });
    res.cookie('NGAPP', 'NGAPP', { maxAge: 900000 });

  var fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port)

});

