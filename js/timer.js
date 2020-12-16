var days=8;
var hours=23;
var minutes=55;
var seconds=1;
var temporizador;
function timer(){
    temporizador=setInterval(segundos,1000);
}

function segundos(){
    if(seconds==0){
        if(minutes>0){
            minutes--;
            seconds=59;
            document.getElementById("minutes-content").innerHTML=minutes;
        }else
        if(hours>0){
            hours--;
            minutes=59;
            seconds=59;
            document.getElementById("minutes-content").innerHTML=minutes;
            document.getElementById("hours-content").innerHTML=hours;
        }else
        if(days>0){
            days--;
            hours=23;
            minutes=59;
            seconds=59;
            document.getElementById("minutes-content").innerHTML=minutes;
            document.getElementById("days-content").innerHTML=days;
        }
        else{
            clearInterval(temporizador);
        }
    }
    document.getElementById("seconds-content").innerHTML=seconds;
    seconds--;
}