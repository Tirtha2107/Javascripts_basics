
// function greet() {
//     return "Hello!";
// }

// Arrow Function
// const greet =() => "Hello!";
// console.log(greet());



// function square(num)
// {
//     return num*num
// }
// console.log(square(2));

// const squ=(num)=> num*num
// console.log(squ(5));

// function add(a,b)
// {
//     return a + b;
// }

// const add = (a,b) => a+b;
// console.log(add(2,3));

// function isEven(num)
// {
//     if (num%2===0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(isEven(3));

// const isEven=(num)=> num%2===0;
// console.log(isEven(3));

    




// const name ="Tirtha";
// const a=()=>
// {
//     return "Hello"+name;
// }
// console.log(a());


// function isPositive(num)
// {
//     if(num>0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(isPositive(8));

// const isPositive=(num)=> num>0;
// console.log(isPositive(9));


// const greet=(name)=> 
// {
//     console.log("Hello,"+ name);
    
// }
// greet("tirtha");


// function getUser(name,age)
// {
//     return{
//         name:name,
//         age:age
//     };
// }
// console.log(getUser("tirtha",18));

// const getUser = (name, age) => ({
//     name: name,
//     age: age
// });

// console.log(getUser("tirtha", 18)); 


// function welcome(user="Guest")
// {
//     return "Welcom, "+ user;
// }
// console.log(welcome());


// const welcome=(user="Guest")=>
// {
//     console.log("Welcome,"+ user);
// }
// welcome();

// const person =
// {
//     name: "Tirtha",
//     greet: function(){

//         return ("Hello:"+this.name);
        
//     }
    

// }
// console.log(person.greet())

// const person=
// {
//     name: "tirtha",
//     g: ()=>{
//         return ("Hello," + this.name)
//     }
// }
// console.log(person.g());

// const fruits=['apple','banana','cherry'];
// for (const fruit of fruits)
// {
//     console.log(fruit.toUpperCase());
    
// }

// const student=["Ravi","Priya","Amit"];
// for(const elem of student)
// {
//     console.log(`Welcom,${elem}!`);
// }


const scores =[80,90,100];
for(const index of scores)
{
    console.log(index*2);
    
}

const numbers=[11,22,33,44,55];
numbers.forEach((num)=>{
    if(num%2==0)
    {
        console.log("Even number",num);
    }
    
});

const firstNames=["Asha","Vikram"];
const lastNames=["Singh","Sharma"];

for(let [index,firstName] of firstNames.entries())
{
    console.log(firstName+ ' ' + lastNames[index]);
}