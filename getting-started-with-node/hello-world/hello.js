var express = require('express');
var Twitter = require('twitter');

var client = new Twitter({
	    consumer_key: 'l63lryOnsI7QZsr4lvIuoCKhj',
	    consumer_secret: 'YandhLTnfsyBOe3ecpVQxIQypOtqqonB3wXwwxwDIkMIuklm6z',
	    access_token_key: '2991675013-ZBp9TlD0ipENKEPxcHKPDvKcHmM8eAmLryQjH6a',
	    access_token_secret: 'zpSmUECEXNknViv3jbsZajWRiNd4tYNYpWWwfQZ003iaD'
	});

var app = express();


app.get('/', function(req,res){
    res.send('hello world');
});

//creates a message
app.get('/tweet/:message', function(req,res){
	var message = req.params.message;

	client.post('statuses/update', {status:message}, function(err, params, response){
		if(err) return res.send(err);
		res.send(response);
	});
});

//what port am i listening on
app.listen(8080, function(){
	console.log('listening');
});