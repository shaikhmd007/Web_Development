console.log("Check The Number Prime Or Not..!!");

var num;
var p=true;
num=prompt("Enter A Number To check Its Prime OR Not: ");
for(var i=2;i<num;i=i+1){
if(num%i==0){
p=false;
break;
}

}
if(p==true){
alert(num+" is a prime Number");
console.log(num+" is a prime Number");
}else{
alert(num+" is NOT a prime Number");
console.log(num+" is NOT A prime No.");
}