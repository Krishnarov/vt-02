//alert("hii");
const apiurl="https://api.openweathermap.org/data/2.5/weather?appid=e350be8fa5739af05dce1efe2c185fde&units=metric&q=";

async function weather(city)
{

const res=await fetch(apiurl+city);
const data=await res.json();
console.log(data);
console.log(data.main.temp);

document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+ "ºC";

document.querySelector('.city').innerHTML=data.name;

document.querySelector('.humidity').innerHTML=data.main.humidity+"%";

document.querySelector('.wind').innerHTML=data.wind.speed+ "Km/H";




}

function c()
{
var city=document.querySelector('.search input').value;
const a=document.querySelector('.content');
let wtr=document.querySelector('.weather');
a.style.display="block";
wtr.style.borderRadius="30px 30px 0px 0px";
weather(city);

}















