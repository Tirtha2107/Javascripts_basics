// const addNum=(num1,num2)=>
// {
//     let result= num1+num2;
//     return result
// }
// console.log(addNum(4,6));

// function showArgs()
// {
//     console.log(arguments);
// }
// showArgs(2,3,4)

// const show=()=>(arguments)
// console.log(show(2,3,6));

// const arr=[1,2,3,4,10,20,5,50]
// const arraName = [];
// for (const elem of arr)
// {
//     if (elem>4)
//     {
      
//        newArr.push(elem);
//     }
// }
//  console.log(newArr);

//  const arr=[1,2,3,4,10,20,5,50]
//  const newArr = arr.filter(function(val){
//     return val>4;
//  })
// console.log(newArr);


//  const arr=[1,2,3,4,10,20,5,50]
//  const newArr = arr.filter(function(val){
//     return val>4;
//  })
// console.log(newArr);

//  const arr=[1,2,3,4,10,20,5,50]
//  const newArr = arr.filter((val)=>(val>4));
  
// console.log(newArr);

// const stringnmae =["sai","ram","shyam","tirtha","siddhi"]
// const newstring = stringnmae.filter(function(val){
//   return val.length > 3;
// });

// console.log(newstring);



// const stringnmae =["sai","ram","shyam","tirtha","siddhi"]
// const newstring=stringnmae.filter((val)=>(val.length>3));
// console.log(newstring);

const arr=[1,2,3,4,5,6]
// const newA=[];
// for(const elem of arr)
// {
//     newA.push(elem*10)
// }
// console.log(newA);

const newArray = arr.map((val)=> (val*10));
console.log(newArray);

const stringnmae =["sai","ram","shyam","tirtha","siddhi"]
const newstring= stringnmae.map((val)=>(val.toUpperCase()));
console.log(newstring);
