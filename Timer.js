let minTag=document.getElementById('min');
let secTag=document.getElementById('sec');
let mSecTag=document.getElementById('m-sec');
let startBtn=document.getElementById('start-btn');
let stopBtn=document.getElementById('stop-btn');
let resetBtn=document.getElementById('reset-btn');
let milliSeconds=0;
let seconds=0;
let minutes=0;
let flag=true;
function timer(){
    milliSeconds=milliSeconds+10;
    if(milliSeconds==1000)
    {
        seconds=seconds+1;
        milliSeconds=0;
        if(seconds==60){
            minutes=minutes+1;
            seconds=0;
        }
    }
    minTag.textContent=concatZero(minutes);
    secTag.textContent=concatZero(seconds);
    mSecTag.textContent=concatZero(milliSeconds);
}
function concatZero(time){
    if(time<=9) return "0"+time;
    else return time;
}
let interval=null;
startBtn.addEventListener('click',function()
{
    if(flag){
        interval=setInterval(timer,10);
        flag=false;
    }
});
stopBtn.addEventListener('click',function(){
    if(!flag){
        clearInterval(interval);
        flag=true;
    }
})
resetBtn.addEventListener('click',function(){
    clearInterval(interval);
    flag=true;
    minTag.textContent="00";
    secTag.textContent="00";
    mSecTag.textContent="00";
    milliSeconds=0;
    minutes=0;
    seconds=0;
})