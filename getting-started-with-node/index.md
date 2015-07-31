#glendora javascript meetup

Wifi: Kickson66 / route_66

User/Pass: Guest@66kicks.co / Dayguest

LOGIN URL: https://kicks.spaces.nexudus.com/Login?ReturnUrl=%2fen%2fprofile

---

##Welcome
This is our first meetup

-  Semi-monthly
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

##Why?

---

##It's Javascript
-  most used programming language
-  npm (170,000 packages)
-  asynchronous - non-blocking

---

## Cool Packages
-  [express](http://www.express.js)
-  [mongoose](http://www.mongoosejs.com)
-  [commander](https://github.com/tj/commander.js)
-  [browserify](https://www.npmjs.com/package/browserify)

---

##Installation
Google: node install "os"

```
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

---

##Hello World
```
console.log('hello world');
```

---

##Hello world, twitter
```
var Twitter = require('twitter');
var client = new Twitter({
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

#Demo

---

#Q&A, Picks

---

#Help
-  Need presenters
-  Need designer