var express = require('express');
var Twitter = require('twitter');

var client = new Twitter({
	    consumer_key: 'rkiZIklhPqSI51duYcTlFJor1',
	    consumer_secret: 'CsIScvbAWp2whPKg66T34VoraRSbCzGSQXDHM3bptGzsrZtiXl',
	    access_token_key: '139363532-8ImkuJ4Ws2akzrXLb8XeZpoOcF50nfjgHheTDUpU',
	    access_token_secret: '1qQWhpO08yqWo3r2VFvptYnN7aIyaJwFBm6HPgYhegP3b'
	});

var app = express();


//test route
app.get('/test', function(req,res){
    res.send('testing');
});


//creates a message
app.get('/tweet/:message', function(req,res){
	var message = req.params.message;

	tweet(message, function(err, params, response){
		if(err) return res.send(err);
		res.send(response);
	});
});

//what port am i listening on
app.listen(8080, function(){
	console.log('listening');
});


//listens on twitter stream for #gelndora-js tweets
client.stream('statuses/filter', {track: '#glendora-js'}, function(stream) {                                                  
  stream.on('data', function(tw) {                                                                                         
    console.log(tw.user.name, tw.text);
    
    tweet('hi @' + tw.user.username, function(err, params, response){
		//if(err) return res.send(err);
		console.log(response);
	});
  });                                                                                                                         
                                                                                                                              
  stream.on('error', function(error) {                                                                                        
    throw error;                                                                                                              
  });                                                                                                                         
});                                                                                                                           

//function to create a tweet
function tweet(message, callback){
	var status = {status: message };
	client.post('statuses/update', status,  callback);
}