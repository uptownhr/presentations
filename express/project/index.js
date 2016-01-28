var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  Message = require('./models/message');

mongoose.connect(
  'mongodb://uptownhr:testpass@ds051615.mongolab.com:51615/jspresentation'
);


app.set('views', './views')
app.set('view engine', 'jade')

app.listen(3000, function(){
  console.log('listening on 3000');
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'asdf'}));

app.use(function(req,res,next){
  console.log(req.session.visit)
  if(req.session.visit){
    req.session.visit++;
  }else{
    req.session.visit = 1;
  }

  console.log('session', req.session)
  next();
})

app.get('/', function(req,res,next){
  console.log('asdf');
  next()
}, function(req,res){

  Message.find(function(err, messages){
    res.render('home', {messages: messages})
  })
})

app.get('/message/:text', function(req,res){
  var text = req.params.text

  var message = new Message();
  message.title = text;

  message.save(function(err, saved){
    res.send(message)
  })
})

app.get('/route2', function(req,res){
  res.render('route2')
})

app.get('/url-param/:name/:last_name', function(req,res){
  var name = req.params.name;
  var last_name = req.params.last_name;

  var sex = req.query.sex

  res.send({name: name, last_name: last_name, sex: sex});
})

app.get('/url-param', function(req,res){
  res.send('get');
})

app.post('/url-param', function(req,res){

  var body = req.body

  res.send({body:body});
})