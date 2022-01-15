let ArrayOne =[1,2,3,5,7,"Shaikh_md_007"];  
console.log("To Find Length of Array Total : ") ;
console.log(ArrayOne.length);

console.log("To Print Last Index of  An Array Using Storing in A Variable :");
let IndOfName=ArrayOne.length-1;
console.log(ArrayOne [IndOfName]);

console.log("length Position");
console.log(ArrayOne.length-1);

console.log("pick from Array lenght to Print that Index element")
console.log(ArrayOne[5]);

console.log("Find Index of A String ")
console.log(ArrayOne.indexOf("Shaikh_md_007"));

/* 4 Methods to edit */
console.log("Push")
ArrayOne.push("Added","Using Push")
console.log(ArrayOne);

console.log("Pop");

ArrayOne.pop();
console.log(ArrayOne)

console.log("shift")
ArrayOne.shift();
console.log(ArrayOne)

console.log("Unshift")
ArrayOne.unshift("Add From 1st Or From Start")
console.log(ArrayOne);

// (splice(fromIndexNumber, NumberOfElements to be deleted Select start N END))

ArrayOne.splice(3,4); 
console.log(ArrayOne);

