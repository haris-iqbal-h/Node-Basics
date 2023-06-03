var fs=require('fs')

fs.writeFile('./hello.txt','how are you',function(err){
    if(!err){
        fs.readFile('./hello.txt',(err,data)=>{
            if(!err){
                console.log(data.toString());
            }else{
                console.log("error in file opening");
            }
        })
    }
})
