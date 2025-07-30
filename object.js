// const studentInfo={
//     userName:"Arohi",
//     age:21,
//     isLoggedIn:true
// }
// console.log(typeof studentInfo);
// console.log(typeof {});
// console.log(Object.keys(studentInfo));
// console.log(Object.values(studentInfo));
// console.log(studentInfo.userName); // to access value
// studentInfo.userName="Tirtha";
// studentInfo.email="tirtha@219.gmail.com";
// console.log(studentInfo);
// Object.freeze(studentInfo) // fixed cannot modify
// studentInfo.age=23;
// console.log(studentInfo);
// console.log(studentInfo.hasOwnProperty('phone'));
// console.log(Object.entries(studentInfo)); 


const fromData={
    name:"Arohi",
    age:21,
    email:"arohi@21gmail.com"
};

const googleData={
    email:"hina@21gmail.com",
    profie:"gjg",
    googleId:"123457"
};
const googleData1={
    name:"Ram",
    age:30
};

// Date-29/07/2025
// const completUserProfile=Object.assign(fromData,googleData1,googleData)
// console.log(completUserProfile);

// const spread_op={
//     ...fromData,...googleData,...googleData1
// }
// console.log(spread_op);

const{name,age,email}=fromData // object destructuring
console.log(age);
console.log(name);

