//Fibbonacci Using While Loop

var num=prompt("Enter A NO: ");
num=parseInt(num);

var n1=0;
var n2=1;
console.log(n1);
console.log(n2);
var count=2;
while(count<num){
var n3=n1+n2;
console.log(n3);
n1=n2;
n2=n3;
count=count+1;
}
