// function addNum(num1, num2)
// {
//     return num1 + num2;
//     console.log("i am here");
    
// }
// console.log(addNum(10,20));

// function addNum(num1, num2){
//     num1=Number(num1);
//     num2=Number(num2);
//     console.log(isNaN(num1));
//     console.log(isNaN(num2));
//     return num1 + num2;
    

//     console.log("i am here");
    
// }
// console.log(addNum(10,"20abc"));

// let n=8
// console.log(isNaN(n));

// function addNum(num1, num2){
//     num1=Number(num1);
//     num2=Number(num2);
//     if (isNaN(num1) || isNaN(num2))
//     {
//         return("Enter a proper number")
//     }
//     return num1 + num2;
    
    
// }
// console.log(addNum(10,"20abc"));

// function add(num1,num2)
// {
//     console.log(num1+num2);
    
// }
// add(5,8)

// n=int(input("enter number:"))
// factorial=1
// if n>=1:
//     for i in range(1,n+1):
//         factorial*=i
//     print(factorial)  


// let num=5;
// let factorial=1;

// if (num>1){
//     for(let i=1;i<=num;i++ ){
//         factorial*=i;
//     }
// }  
// console.log(factorial);

// const fact = (num) => {
//     let factorial = 1;
//     if (num > 1) {
//         for (let i = 1; i <= num; i++) {
//             factorial *= i;
//         }
//     }
//     return factorial;
// };

// console.log(fact(5));  

// function printArray(arr) {
//   for (let item of arr) {
//     console.log(item);
//   }
// }

// const myArray = [1, 2, 3, 4];
// printArray(myArray); 


// function showUser({ username, age }) {
//   console.log(`Username: ${username}`);
//   console.log(`Age: ${age}`);
// }

// const user = {
//   username: "Tirth",
//   age: 20
// };

// showUser(user);

// function display(user) {
//   console.log(user.name);
//   console.log(user.age);
  
// }
// display({ name: "Tirth",age:21 });



// function r(arr)
// {
//     for(const elem of arr){
//         console.log(elem);
        
//     }
// }
// arr([1,2,3])


// Callback

// function greet(callback)
// {
//     console.log("hello");
//     callback();
    
// }
// function saybye()
// {
//     console.log("Tirtha");
    
// }
// greet(saybye);

function greet(name,callback)
{
    console.log(name);
    setTimeout(callback,1000)
}

function d()
{
    console.log("Good morning");    
}
greet('Arohi',d); 