// function greet()
// {
//     return new Promise((resolve,reject)=>{
//        resolve("Helllo world");
        
//     })
// }
//  console.log(greet());


// async function greet() 
// {
//     return "Hello World"; 
// }
// console.log(greet());



// const userLoggedInStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isUserLoggedIn = false; // condition is true

//     if (isUserLoggedIn) {

//       console.log("user is logged in !!!!!!");
//       resolve({userName: "saideep", age: 23});
//       // Resolve the promise with user data

//     } else {

//       console.log("user logged in error");
//       reject("something went wrong");
//       // Reject the promise with an error message

//     }
//   }, 3000);
// });

// async function testPromise(){
//     return  userLoggedInStatus;
    

// }
// console.log(testPromise());

// const userLoggedInStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isUserLoggedIn = false; // condition is true

//     if (isUserLoggedIn) {

//       console.log("user is logged in !!!!!!");
//       resolve({userName: "saideep", age: 23});
//       // Resolve the promise with user data

//     } else {

//       console.log("user logged in error");
//       reject("something went wrong");
//       // Reject the promise with an error message

//     }
//   }, 3000);
// });

// async function testPromise(){
//     try{
//         const res=await userLoggedInStatus;
//         return res;
//     }
//     catch (error){
//         console.log("error is ",error);
        
        
//     }
// }
// console.log(testPromise());

async function fetchapi() 
{
    try{
        const result= await fetch('https://jsonplaceholder.typicode.com/todos');
        const api=await result.json();
        console.log(api);
    }
    catch(error)
    {
        console.log("error is",error);
        
    }
   
    
    
}

console.log(fetchapi());
