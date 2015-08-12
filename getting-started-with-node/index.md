#glendora javascript meetup

Wifi: Kickson66 / route_66

User/Pass: Guest@66kicks.co / Dayguest

LOGIN URL: https://kicks.spaces.nexudus.com/Login?ReturnUrl=%2fen%2fprofile

---

##Welcome
This is our second meetup

-  Semi-monthly (tue & thur)
-  Presentations
-  Demos
-  Networking

---

##kicks66.co
Coworking, working with like minded people

---

#Getting Started with Node.js
Questions?
- Myself / John Kirk

---

#FAQ

----

##Why Node?

----

##It's Javascript
-  most used programming language
-  npm (170,000+ packages)
-  asynchronous - non-blocking

----

## Who uses node? 

1. Netflix
2. New York Times
3. Paypal
4. Medium
5. LinkedIn

----

## Downsides?

1. Asynchronous language
2. Single process

----

## Questions?

---

#Demo
1. Installation 
2. Using Reveal-MD
2. Hello world example

---

##Installation
Google: node install "os"

```bash
#centos example
yum install nodejs npm

#ubuntu example
apt-get install nodejs
apt-get install npm

#osx example
brew install node

#windows example
choco install nodejs.install
```

----

##Confirm installation

Test the commands `node` and `npm`, 

```bash
$ node #might be nodejs on some machines
>
```



```
$ npm
Usage: npm <command>

where <command> is one of:
...
```

---

##Reveal-MD
Load this presentation on your machine

```bash
$ sudo npm install -g reveal-md #installs globally

# get presentations files
$ git clone https://github.com/uptownhr/presentations.git 
$ cd presentations

# start reveal server
$ reveal-md #start reveal-md

#visit reveal server from browser, http://localhost:1948
```

---

##Hello World

```javascript
$ node
> console.log('hello world');
```
```javascript
hello world
undefined
```

----

##With Express

```bash
#create new directory
mkdir new-hello
cd new-hello

#initialize npm
npm init

#install express and save as dependency
npm install express --save

#create file hello.js
touch hello.js
```

----

### create hello.js

```javascript
var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.send('hello world');
});

app.listen(8080);
```

Run
```bash
$ node hello.js #now visit http://localhost:8080 from your browser
```

----

##Hello, twitter
[twitter](https://www.npmjs.com/package/twitter) - Twitter api wrapper
```bash
$ npm install --save twitter #install twitter client
$ touch hello-twitter.js
```

```javascript
var Twitter = require('twitter');
var client = new Twitter({ //need to generate from dev.twitter.com
    consumer_key: 'xxxx', 
    consumer_secret: 'xxxxx',
    access_token_key: 'xxxx',
    access_token_secret: 'xxxx'
});

var message = {status: 'hello world. #glendora'};

client.post('statuses/update', message,
  function(error, params, response){
    if(error) return console.log(error);
    
    console.log('message sent', message);
  });
```

---

## Packages presented today
- [reveal-md](https://github.com/webpro/reveal-md) - Markdown Presentations
- [express](http://www.express.js) - micro framework (like sinatra, silex, flask)
- [twitter](https://www.npmjs.com/package/twitter) - Twitter api wrapper

----

## Other cool packages
-  [mongoose](http://www.mongoosejs.com) - ODM for mongodb
-  [commander](https://github.com/tj/commander.js) - node CLI maker
-  [browserify](https://www.npmjs.com/package/browserify) - convert node packages for the browser

---

#Q&A, Picks

---

#Help
-  Need presenters
-  Need designer