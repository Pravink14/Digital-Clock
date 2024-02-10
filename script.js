let ampm=document.getElementById("ampm")
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function displayTime()
{
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    let day=dateTime.getDay()

    if(hr>12)
    {
        hr=hr-12;
        ampm.innerHTML='PM'
    }

    document.getElementById("hours").innerHTML=padzero(hr);
    document.getElementById("mins").innerHTML=padzero(min);
    document.getElementById("seconds").innerHTML=padzero(sec);
    document.getElementById("day").innerHTML=weekday[day].toUpperCase();

    function padzero(num)
    {
        return num<10?'0'+num:num;
    }
}
    setInterval(displayTime,1000);