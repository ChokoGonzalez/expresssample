var express = require('express');
var port = 8080;
var app = express();
var dataUsers =[
	{name : "Rop" , hobbies : ["Sleep"]},
	{name : "Saop" , hobbies : ["Dance" , "Swin"]},
	{name : "MPB" , hobbies : ["Sell" , "Read"]},
];


app.get( '/users' , function(req , res) {
	console.log(dataUsers);	
	res.send(dataUsers);	
});

//http://localhost:8080/user/samuel
app.get( '/user/:username' , function(req , res) {
	console.log("PARAMS" , req.params.username);	
	res.send(req.params.username);	
});

app.get( '/' , function(req , res) {
	console.log("GET request" );	
	res.send("GET request");	
}); 

app.post( '/' , function(req , res) {
	console.log("posT request" );	
	res.send("posT request");	
}); 

app.listen(port , function(){
	console.log("Running App")

});