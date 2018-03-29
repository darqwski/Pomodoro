var seconds=25*60*100;
var saveSeconds;
var intervalClock;
function refresh()
{

    var minutes,newSeconds,miliseconds;
    minutes=((seconds/6000<10)?"0":"")+parseInt(seconds/6000)
    newSeconds=(((seconds%6000/100)<10)?"0":"")+parseInt(seconds%6000/100)
    miliseconds=((seconds%100<10)?"0":"")+(seconds%100)
    document.getElementsByClassName("mainCounter")[0].innerHTML=minutes+":"+newSeconds+":"+miliseconds ;

    if(!seconds)
    {
        clearInterval(intervalClock);
        var sound = new Audio("alarm.ogg");
        sound.play();

    }
    seconds--;
}
document.getElementsByClassName("buttons")[0].addEventListener("click", function(){
    seconds=saveSeconds=25*60*100;
    refresh()
});
document.getElementsByClassName("buttons")[1].addEventListener("click", function(){
    seconds=saveSeconds=10*60*100;
    refresh()
});
document.getElementsByClassName("buttons")[2].addEventListener("click", function(){
    seconds=saveSeconds=5*60*100;
    refresh()

});
document.getElementsByClassName("buttons")[3].addEventListener("click", function(){
    intervalClock=setInterval(function(){
        refresh()
    } , 10)
});
document.getElementsByClassName("buttons")[4].addEventListener("click", function(){
    seconds=saveSeconds;
});
document.getElementsByClassName("buttons")[5].addEventListener("click", function(){
    clearInterval(intervalClock);
});
