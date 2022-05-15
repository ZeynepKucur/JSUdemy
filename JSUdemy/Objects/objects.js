const programmer = {
    name: "Zeynep",
    age:25,
    langs:"C,C#,JS,Dart",
    work:function(){
        console.log("Eager to learn and put what's learnt into work");
    }
}


//Array of objects
const programmers=[
    {
        name:"Zeynep",
        age:25,
        langs:["C","C#","JS","Dart"],
        address:{
            city:"Yalova",
            country:"Turkey"
        },
        work:function(){
            console.log("Eager to learn and put what's learnt into work");
        }
    },
    {
        name:"Ayhan",
        age:58,
        langs:["English","Turkish"],
        address:{
            city:"Yalova",
            country:"Turkey"
        }
    }
]
console.log(programmers[0].address.city);
console.log(programmers[1].address);
console.log(programmers[0]);
programmers[0].work();
programmer.work();


//date object and methods
const now = new Date();
console.log(now);