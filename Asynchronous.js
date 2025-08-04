// console.log('start');
// setTimeout(()=>{
//     console.log('timers');
    
// },5000)
// console.log('end');



// console.log("1");
// setTimeout(()=>{
//     console.log("Ram");
    
// },4000);

// setTimeout(()=>{
//     console.log("Lakshman");
    
// },2000);

// console.log("4");

// setInterval(()=>
// {
//     console.log("Hello"); //to print hello on every 2sec
    
// },2000)

// let count=0;
// const c=setInterval(()=>{
//     console.log(`count ${count}`);
//     count++;
//     if(count>10)
//     {
//         clearInterval(c);
//     }
    
// },2000);


// function greet()
// {
//     console.log("hello");
    
// }
// setTimeout(greet,4000)


function sayHello(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 3000);
}

function askHowAreYou(callback) {
  setTimeout(() => {
    console.log("How are you?");
    callback();
  }, 1000);
}

function sayGoodbye(callback) {
  setTimeout(() => {
    console.log("Goodbye");
    callback();
  }, 1000);
}

// Nested callbacks — callback hell
sayHello(() => {
  askHowAreYou(() => {
    sayGoodbye(() => {
      console.log("Conversation ended.");
    });
  });
});