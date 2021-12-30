var n1;
var n2;
n1=prompt("Enter 1st Number: ");
n2=prompt("Enter 2nd Number: ");
var num=prompt("Enter A Number To Find Arithemetic Progression:");
n1=n2-n1;
for(var i=1;i<=num;i++){
if(n2%2==0){
n2=0;
n2=n1*i;}
else{
n2=0;
n2=n1*i-1;}
}

console.log(n2);
