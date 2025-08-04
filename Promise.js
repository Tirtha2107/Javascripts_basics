// function greet (callback)
// {
//     console.log("hello");
//     callback();
// }
// function saybye()
// {
//     console.log('bye');
    
// }
// greet(saybye)

// let greet = new Promise((resolve,reject)=>
// {
//     console.log('hello');
//     resolve();

    
// });
// greet.then(()=>{
//     console.log('bye');
    
// })

// const fromData={
//     name:"Arohi",
//     age:21,
//     email:"arohi@21gmail.com"
// };
// const isLoggedInStatus = new Promise((resolve,reject)=>{
//     setTimeout(()=>{                        //async code
//         let isLoggedIn = false;
//         if(isLoggedIn)
//         {
//             console.log(`${fromData.name} is logged`);
//             resolve(fromData);  //condition fullfill
            
//         }
//         else{
//             console.log("user is not logged");
//             reject("not details");
            
//         }
//     },3000)
// })
// isLoggedInStatus.then((user) =>{
//     console.log("success");
    
// }).catch((err) =>{
//     console.log(err);
    
// }).finally(() =>{
//     console.log("all done");
    
// })

const Promise1 =new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("task 1 complete");
    },1000);
});

const Promise2 =new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("task 2 complete");
    },1000);
});

const Promise3 =new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("error");
    },1500);
});

Promise.all ([Promise1,Promise2,Promise3])
  .then((results) => {
    console.log("All promises resolved:");
    console.log(results);
})

.catch((error) => {
    console.log("one of the promises rejected:",error);
    
});