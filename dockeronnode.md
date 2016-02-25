#glendora javascript meetup

Wifi: liferay-lax-guest / portal4all

Slide: http://172.16.25.38:1948/express.md

---

#Docker on Node
##with James Lee

Twitter [@jleebiz](http://www.twitter.com/jleebiz)

---

#Docker?
- Is a company
- Opensource
- Container technology stack

----

#Containers?
Virtualization built into the linux kernel

##Virtual Machine?
![VM vs Container](https://sc-cdn.scaleengine.net/i/d349227a9bde61c763ef34d022bd9738.png)

----

##How is this different
Baremetal Performance
Multiple flavors of linux

---

#DEMO

[http://www.github.com/uptownhr/presentations/express](http://www.github.com/uptownhr/presentations/express)

---


#Express Setup

```bash
mkdir js-presentation
cd js-presentation
npm init
npm install --save express
npm install --save-dev node-dev
touch index.js
```

---

#package.json

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "node-dev index.js"
}
```

```bash
npm run dev
```

---

#Hello world
```js
var express = require('express'),
  app = express();

app.listen(3000, function(){ console.log('listening'); }

app.get('/', function(req,res){
  res.send('hello world');
});

```

---

#Routing
```js
app.get('/url-param/:name', function(req,res){
  res.send( req.params.name )
})
app.get('/query-param', function(req,res){
  res.send( req.query.name )
})
app.post('/query-param', function(req,res){
  res.send( 'this is post')
})
```

---

#Post Body
First Middleware
```bash
#shell
npm install --save body-parser
```
```js
//index.js
var bodyParser = require('body-parser')

app.use( bodyParser.urlencoded({extended:true}) )

app.post('/query-param', function(req,res){
  res.send( req.body )
})
```

---

#What about Views?

Jade is popular but others are available

- EJS
- Handlebars
- Mustache

----

##Configuration
```bash
#shell
npm install --save jade
mkdir views
```

```js
//index.js
app.set('views', './views')
app.set('view engine', 'jade')
app.get('/', function(req,res){ res.render('home'); } )
```

----

##jade template
```js
// views/home.jade
html
  head
    title Express Fundamental
  body
    h1 Express Fundamental
```

---

#Layouts in Jade
```js
// views/layout.jade
html
  head
    title Express Fundamental
  body
    block content

// views/home.jade
extends ./layout.jade

block content
  h1 Express Fundamentals
  p hello world
```

---

#How about sessions?
```bash
#shell
npm install --save express-session
```
```js
//index.js
var session = require('express-session')

app.use(session({secret: 'asdfasdf'}))

//count visitor requests, middleware
app.use(function(req,res,next){
  if(req.session.visits){
    req.session.visits++;
  }else{
    req.session.visits = 1;
  }
});
```

----

## display visits
```js
// index.js
app.get('/visits', function(req,res){
  res.send(`Visits: ${req.session.visists}`);
});

// sending variable to jade render
app.get('/visits-jade', function(req,res){
  res.render('visits', {
    visits: req.session.visits
  }
});

// jade
block content
  p="you have been here #{visits} times"

```

---

#Models & Storage
Create free account from https://mongolab.com/ 

```bash
npm install --save mongoose

// index.js
var mongoose = require('mongoose');

mongoose.connect(
'mongodb://uptownhr:testpass@ds051615.mongolab.com:51615/jspresentation'
);

```

---

#Public Static Files
```bash
# shell
mkdir public
```

```js
// index.js
app.use(express.static('public'));
```

---

#Project to checkout
##Hackathon Starter
[http://www.github.com/sahat/hackathon-starter](http://www.github.com/sahat/hackathon-starter)

---

#Coming Next
##ReactJS

[https://github.com/facebook/react](https://github.com/facebook/react)

---

#NodeSchool?
De-centralized Opensource Education

- Self guided 
- Pair programming
- Mentors

[http://nodeschool.io/glendora/](http://nodeschool.io/glendora/)
