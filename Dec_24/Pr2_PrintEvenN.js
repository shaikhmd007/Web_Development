//Check And Print All The Prime Number Upto the No. have Entered !!..
console.log("Prime Numbers ..!!");

var num;
var p=true;
num=prompt("Enter A Number To Print ALL Prime No.: ");
for(var i=2;i<=num;i++)
{
p=true;
  for(var j=2;j<i;j++)
 {
  if(i%j==0){
     p=false;
  }
 }
if(p==true){
console.log(i);
}

}