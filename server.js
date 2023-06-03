var express=require('express')
var http=require('http')
var fs=require('fs')

var app=express()
var server=http.createServer(app)


app.get('/',function(req,res){
    res.send('<h3>Hello World with Express</h3>');
})

app.get('/tasks',function(req,res){
    //for read json file
    fs.readFile('./db.json',function(err,data){
        var tasks=JSON.parse(data.toString()).tasks
        res.json(tasks);
    })
    
})


server.listen(3000,function(){
    console.log('server is listening to port 3000');
})

