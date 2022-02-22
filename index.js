// const io = require("socket.io")
// const http = require('http');
// import { createServer } from "http";
// import { Server } from "socket.io";

// The node server which will handle the messages
const express=require('express');
var app=require('express')();
var http=require('http').createServer(app);
const io = require('socket.io')(http);
const path=require('path')
const staticpath=path.join(__dirname,"./js/dist");
app.use(express.static(staticpath));
// const http = require('http');
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
const users={};
const roomID={};


io.on('connection',socket =>{
    socket.on('new-user-joined', data =>{
        console.log("new user",data.Name,data.RoomId);
        users[socket.id]=data.Name;
        roomID[socket.id]=data.RoomId;
        socket.join(data.RoomId);
        socket.to(data.RoomId).emit('user-joined',data.Name); 
    });

    socket.on('send', message =>{
        socket.to(roomID[socket.id]).emit('recieve',{message:message,name:users[socket.id]})
    });
    // for leaving message
    socket.on('disconnect', name =>{
        socket.to(roomID[socket.id]).emit('left',users[socket.id]);
        delete users[socket.id];
        delete roomID[socket.id];
    });
})

var server_port= process.env.PORT || 8000
http.listen(server_port)
