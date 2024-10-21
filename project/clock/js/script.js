function update(){
//window.alert("hiii");
var d=new Date();
//window.alert(d);
var h=d.getHours();
//window.alert(h);
var m=d.getMinutes();
//window.alert(m);
var s=d.getSeconds();
//window.alert(s);
var s_angle=6*s;
var m_angle=6*m;
var h_angle=30*h+m/2;
var hour=document.getElementById('hr');
var minute=document.getElementById("min");
var second=document.getElementById("sec");
hour.style.transform="rotate("+h_angle+"deg)";
minute.style.transform="rotate("+m_angle+"deg)";
second.style.transform="rotate("+s_angle+"deg)";
}

setInterval(()=>{
update();
},1000);