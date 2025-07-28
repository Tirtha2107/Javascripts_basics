const studentInfo={
    userName:"Arohi",
    age:21,
    isLoggedIn:true
}
console.log(typeof studentInfo);
console.log(typeof {});
console.log(Object.keys(studentInfo));
console.log(Object.values(studentInfo));
console.log(studentInfo.userName);
studentInfo.userName="Tirtha";
studentInfo.email="tirtha@219.gmail.com";
console.log(studentInfo);
Object.freeze(studentInfo) // fixed cannot modify
studentInfo.age=23;
console.log(studentInfo);
console.log(studentInfo.hasOwnProperty('phone'));
console.log(Object.entries(studentInfo)); 

const studentInfoo={
    userNam:"Arohi",
    ag:21,
    isLoggedI:true
}
const combineobj=Object.assign(studentInfo,studentInfoo);
console.log(combineobj);
