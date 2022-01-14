var count1= 0;
var count0=0
// Counting starts From 0
document.getElementById("Tap0").innerText=count0;

function Like(){
    count1= count1+1;
    document.getElementById("Tap1").innerText=count1;
}
function Disl(){
    count0= count0-1;
    document.getElementById("Tap2").innerText=count0;
}