
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

const person=
{
    name: "tirtha",
    g: ()=>{
        return ("Hello," + this.name)
    }
}
console.log(person.g());