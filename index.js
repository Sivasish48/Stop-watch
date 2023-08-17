
// variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');

const resetBtn = document.querySelector('#resetBtn');

// cariables for time values 

let second = 0;
let minutes = 0;
let hours = 0;

// variables for the leading or the first zero

let leadingsec = 0;
let leadingmin = 0;
let leadinghr = 0;

// variables for setinterval and time status

let timeInterval = null;
let timeStatus = "stopped";

//Stopwatch button

function stopwatch() {
    second++

    if( second / 60 === 1){
        second = 0;
        minutes++

        if( minutes / 60 === 1){
            minutes=0;
            hours++
        }
    }
      if(second < 10){
        leadingsec = "0" + second.toString();
      } else {
        leadingsec = second;
      }
       if(minutes < 10){
        leadingmin = "0" + minutes.toString();
       } else {
        leadingmin = minutes;
       }
       if(hours < 10){
       leadinghr = "0" + hours.toString();
       } else {
       leadinghr = hours;
       }

       let displayTime = document.getElementById("time").innerText = `${leadinghr} : ${leadingmin} : ${leadingsec}`;
   
}

//window.setInterval(function,1000)  is the the method where a fuction can be called repeatedly , the repeation is mentioned with millisec where if the mentioned no. is 1000 then the respected function will be called in every 1000ms i.e 1 sec.
// window.clearinterval() is the opposite method of setInterval function where a function calling is terminated.

startStopBtn.addEventListener("click", function(){
   if (timeStatus==="stopped"){
      timeInterval = window.setInterval(stopwatch,1000);
      document.getElementById('startStopBtn').innerHTML='<i class="fa-solid fa-pause fa-2xl" id="pause"></i>';
      timeStatus="started";
   } else{
      window.clearInterval(timeInterval);
      document.getElementById('startStopBtn').innerHTML='<i class="fa-solid fa-play fa-2xl" id="play"></i>';
      timeStatus="stopped";
   }
});

resetBtn.addEventListener("click", function(){

   window.clearInterval(timeInterval);
   second=0;
   minutes=0;
   hours=0;
   document.getElementById("time").innerHTML="00 : 00 : 00"
})

 
