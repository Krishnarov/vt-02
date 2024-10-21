function wc(){
var d=new Date();

document.getElementById("india").innerHTML=d.toLocaleString('en-US',{
timeZone:'Asia/Kolkata',}).split(",")[1];
document.getElementById("china").innerHTML=d.toLocaleString('en-US',{
timeZone:'Asia/Shanghai',}).split(",")[1];
document.getElementById("usa").innerHTML=d.toLocaleString('en-US',{
timeZone:'America/Los_Angeles',}).split(",")[1];
}
setInterval(()=>{
wc();
},1000);