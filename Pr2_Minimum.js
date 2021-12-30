// Q.2 -> Program To Take 3 inputs from the user And Show Minimum Of 3 Numbers: 
var n1;
var n2;
var n3;
n1=prompt("Enter 1st  Number ");
n2=prompt("Enter 2nd  Number ");
n3=prompt("Enter 3rd Number ");

if(n1<n2 && n1<n3){
alert(+n1+" is Less Than In All These Numbers!!");
}
else if(n2<n1 && n2<n3)
{
alert(+n2+ " is Less Than In All These Numbers!!");
}
else{
alert(+n3+" is Less Than In All These Numbers!!");
}


