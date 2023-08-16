
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
   
}

let displayTime = document.getElementById("time");

displayTime.innerText = `${leadinghr} : ${leadingmin} : ${leadingsec}`;


