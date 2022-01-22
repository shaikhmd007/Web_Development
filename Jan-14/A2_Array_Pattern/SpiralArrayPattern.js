var spiMatrix=[
    [1,16,15,14,13],
    [2,17,24,23,12],
    [3,18,25,22,11],
    [4,19,20,21,10],
    [5,6,7,8,9]

];
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        document.write(spiMatrix[i][j]+" ");
    }
       document.write("<br>");
}
    
document.write("Solution Of Spiral Array Matrix:<br><br>")

var row=5;
var col=5;
var RS = 0;
var CS = 0;

while (RS < row && CS < col) {
    for (i = CS; i < col; ++i) {
        document.write(spiMatrix[i][RS] + ' ');
    }
    RS++;
    for (i = RS; i < row; ++i) {
        document.write(spiMatrix[col-1][i] + ' ');
    }
    col--;
    if (RS < row) {
        for (i = col - 1; i >= CS; --i) {
            document.write(spiMatrix[i][row-1] + ' ');
        }
        row--;
    }
    if (CS < col) {
        for (i = row - 1; i >= RS; --i) {
            document.write(spiMatrix[CS][i] + ' ');
        }
        CS++;
    }
}