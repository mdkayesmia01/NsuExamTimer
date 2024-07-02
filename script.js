const headline=document.getElementById('headline');
const timerDisplay=document.getElementById('countTime');
const startBtn=document.getElementById('start');
const stopBtn=document.getElementById('stop');
const x = document.getElementById("myAudio");
let time;
let timerInterval;
let isRunning=false;


const startTimer=(duration)=>{
    let timer=duration;
    timerInterval=setInterval(()=>{
        const minute=parseInt(timer/60,10);
        const secound=parseInt(timer%60,10);

        const displayMinute=minute<10?'0'+minute:minute;
        const displaySecound=secound<10?'0'+secound:secound;

        timerDisplay.innerText=displayMinute+":"+displaySecound;
        if(--timer<0){
          clearInterval(timerInterval);
          headline.textContent="Time Over";
          x.play();
          //timerDisplay.innerText="Breath Out";
        //   setTimeout(() => {
        //     timerDisplay.textContent="Breath In";
        //     startTimer(time);
        //   }, 3000);
        }

    },1000);
}

startBtn.addEventListener('click',()=>{

          if(!isRunning){
        time=document.querySelector('input').value;
          startTimer(time*60);
          isRunning=true;
          }
});

 stopBtn.addEventListener('click',()=>{
    clearInterval(timerInterval);
      isRunning=false;
      x.pause();
});