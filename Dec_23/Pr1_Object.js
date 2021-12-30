console.log("Here Given The List Of Students Name Which Have Who Got.. Greater Than Marks Have Defined In The Code. ");
var Geekster={
'Name':"Dec21WebFundamentals",
'Instructor':{
'Name':"Ayush Sinha",
'Subject':"MERN"
},
'Students':[{
'Name':"Shaikh MD",
'Marks':"92"
},
{
'Name':"Suraj Gupta",
'Marks':"91"
},
{
'Name':"Suleman",
'Marks':"84"
},
{
'Name':"Sudhir",
'Marks':"70"
},
{
'Name':"Ashraf",
'Marks':"65"
},
{
'Name':"Akbar",
'Marks':"86"
}
],
};
for(var i=0;i<Geekster.Students.length;i++)
{
 if(Geekster.Students[i].Marks>=85)
 console.log(Geekster.Students[i].Name);
}
