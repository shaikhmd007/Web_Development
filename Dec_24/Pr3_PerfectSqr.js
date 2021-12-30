console.log("Checking The Given No. Is Perfect Square Or NOT!!");

var sq=0;
var n;
n=prompt("Enter Any No. To Check Perfect Sqr Or Not:  ");
n= parseInt(n);

for(var i=1;i<n;i++)
{
 if(n%i==0 && n/i==i){
    sq=1;
    break;
 }
} 
   if(sq==1){
      alert("Perfect Square.!!");
   }else{
      alert("Not a Perfect Square of Any No. .!!");
    }