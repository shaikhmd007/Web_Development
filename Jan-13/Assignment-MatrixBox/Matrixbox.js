const matrix=[
    [4, 3, 2, 4],
    [9, 1, 5, 6],
    [2, 7, 9, 8],
    [8, 5, 2, 0],
];
    var n1=0;
    var n2=0;
for(i=0;i<4;i++){
    for(j=0;j<4;j++){
        if(i==j){
            n1=n1+matrix[i][j];
        }
        if(i==4-j-1){
            n2=n2+matrix[i][j];
        }
        document.write(matrix[i][j]+" ");
    }
    document.write("<br>");
}
document.write("<br>");
document.write(n1-n2);