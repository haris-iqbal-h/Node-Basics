// using core modules
var http=require('http')
var events=require('events')

var eventEmitter=new events.EventEmitter()

var server=http.createServer(function (req,res){
    // event emiitter
    eventEmitter.emit("someone requested","test")  
    res.end('Server Works')
})

// event listener
eventEmitter.on('someone requested',function(data){
    console.log('a request has been done on the server!',data);
})


server.listen(3000,'localhost',function(){
    console.log("server listening at port 3000")
})