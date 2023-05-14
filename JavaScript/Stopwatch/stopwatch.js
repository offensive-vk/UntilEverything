
var hrs = 0;
var min = 0;
var sec = 0;
var ms = 0;
var res;
function timer()
{

    if(min == 59 && sec == 59 && ms == 99){
        
        hrs++;
        min=0;
        sec=0;
        ms=0;
    }
    if(sec == 59 && ms == 99){
        min++;
        sec=0;
        ms=0;
    }
    if(ms == 99){
        sec++;
        ms=0
    }
    ms++;
    //document.getElementById("t1").innerHTML = hrs+" : "+min+" : "+sec+" : "+ms;
    document.getElementById("t1").innerHTML = 
    (hrs < 10 ? "0" + hrs : hrs) + " : " + 
    (min < 10 ? "0" + min : min) + " : " + 
    (sec < 10 ? "0" + sec : sec) + " : " + 
    (ms < 10 ? "0" + ms : ms);
}
function start() {
//    if (!res) {
        res = setInterval(timer, 10);
//
}

function stop()
{
    clearInterval(res);
}
function reset()
{
    stop();
    hrs = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById("t1").innerHTML = "00"+" : "+"00"+" : "+"00"+" : "+"00";
}
