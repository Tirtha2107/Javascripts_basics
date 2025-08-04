// const arrayName=['arohi','tirtha','riya',1];
// console.log(typeof arrayName);
// console.log(arrayName);

// const arraName = new Array(1,2,3,4)
// console.log(typeof arraName);
// console.log(arraName);

// const arr=['arohi','tirtha',21]
// const arr1=[3,5]
// console.log(arr.length); //length
// console.log(arr.push(4)); //push
// console.log(arr);
// arr.pop(); //pop
// console.log(arr);

// console.log(arr.includes('arohi')); //include
// console.log(arr.indexOf(21)); //indexOf

//  console.log(arr.concat(arr1));
// // console.log([...arr,...arr1]); // spread operator
// let user1='tirtha'

// // to check whether array or not
// // console.log(Array.isArray(user1));
// console.log(Array.isArray(arr));

// console.log(Array.from(user1));


// let n1=10;
// let n2=23;
// let n3='45';
// console.log(Array.of(n1,n2,n3));

//slice
// let u=[10,20,30,40,50]
// console.log(u.slice(0,3));
// console.log(u.slice(-4,3));
// console.log(u);







// const a= (num1,num2) =>
//     {
//     console.log(num1);
//     console.log(num1+num2);
//     }
//     a(2,3)

    

// // slice do not modify only pass starting index 
// const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.slice(1)
// console.log('newArr',newArr);
// console.log('after',uuser);

// // slice do not modify
// const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.slice(1,4) //4,2 wrong it will give empty
// console.log('newArr',newArr);
// console.log('after',uuser);

// // slice do not modify
// const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.slice(-3)  //Negative Indexing
// console.log('newArr',newArr);
// console.log('after',uuser);

// slice do not modify
// const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.slice(-4,-1)  //Negative Indexing
// console.log('newArr',newArr);
// console.log('after',uuser);

// splice modifies
const uuser =[11,7,21,90,32]
console.log('before',uuser);
// const newArr = uuser.splice(3)
 const newArr = uuser.splice(1,3)
//const newArr = uuser.splice(1,2,60)
// const newArr = uuser.splice(1,2,89,90)
console.log('newArr',newArr);
console.log('after',uuser);


// Reduce Mathod
// const fruits=['apple','banana','apple','orange','banana'];
// const count=fruits.reduce((acc,fruit)=>
// {
//     acc[fruit]=(acc[fruit] || 0)+1;
//     console.log(acc);
//     return acc;
    
// },{});
// console.log(count);

const arr=[11,21,3,45,90];
const sum= arr.reduce((acc,arr)=> acc+arr,0);
console.log(sum);


// const add = arr.reduce((acc,currVal)=>{
//     console.log(acc);
//     return acc + currVal;
    
// })
// console.log(add);
