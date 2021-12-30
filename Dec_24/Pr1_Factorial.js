console.log("Finding Factorial Of Number: ");

var n;
var fact=1;
n=prompt("Enter A No. To FInd Factorial: ");
n=parseInt(n);
for(var i=1;i<=n;i=i+1){
fact=fact*i;
}
alert("Factorial Of "+n+"! is "+fact);