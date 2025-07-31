const person={
    userName :"tirtha",
    age:18,
    greet:function greeting()
    {
        console.log(this);
        return(`hello ${this.userName}`);
        
    }

}
console.log(person.greet());

// const person={
//     userName :"tirtha",
//     age:18,
//     greet:()=>
//     {
//         console.log(this);
//         return(`hello ${this.userName}`);
        
//     }

// }
// console.log(person.greet());