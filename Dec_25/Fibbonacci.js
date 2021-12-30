//Fibbonacci .
var n1=0;
var n2=1;
var n3=0; 
var num=prompt("Enter A Number: ");
console.log(" "+n1);
console.log(" "+n2);
  for(var i=2;i<num;i++){
        n3=n1+n2;
        console.log(" "+n3);
        n1=n2;
        n2=n3;
  }