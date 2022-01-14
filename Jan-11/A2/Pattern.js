var n=prompt("Enter A No. To Print The Pattern: ")
n=parseInt(n);
let p=" ";
for(i=0;i<=n;i=i+1){
    for(j=1;j<=i;j=j+1){
       p+=" * ";
    }
    p+="<br>";
}
document.write(p);