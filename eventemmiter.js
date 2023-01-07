const express=require("express");
const EventEmitter=require("events");
const app=express()
const event= new EventEmitter();
var count=0;
event.on("CountAPI",()=>{
    count++;
    console.log("Event Called",count)
});

app.get("/",(req,resp)=>{
    resp.send("api called")
    event.emit('CountAPI')
});
app.get("/findsearch",(req,resp)=>{
    resp.send("search api called")
      event.emit('CountAPI')
});
app.get("/update",(req,resp)=>{
    resp.send("update api called")
      event.emit('CountAPI')
});



app.listen(6003,()=>{
    console.log("server is running successfully")
});