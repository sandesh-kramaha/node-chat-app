const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection',function(socket){
  console.log("new user connected");
  socket.on('disconnect',() => {
    console.log('user disconnected !!!!');
  });

});


app.use(express.static(publicPath));
server.listen(port,function(){
  console.log(`server starts with port ${port}`);
});

//console.log(__dirname+ '/../public');
//console.log(publicPath);
