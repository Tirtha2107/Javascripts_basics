// console.log("1" +"2");
// console.log(1+2+"2");
// console.log("1" +2+2);
// console.log(1 + 1 +"2");
// console.log("1" +2 +2);


// //Increament Decreament
// let x=3;
// y=x++;
// console.log(x); // postfix first it will assign and then increament
// console.log(y);

// let=x=3;
// y=++x;
// console.log(x); // prefix first increament and then assign
// console.log(y); 

// let=x=4;
// y=x--;
// console.log(x); // postfix first it will assign and then increament
// console.log(y);

// let a = 10;
// console.log(a++ + ++a);



// // Assignment 

// // x=x+3
// //x+=3

// let result = 5+3*2/(4-2)
// console.log(result);

// // Comparison
// console.log(3 == "3"); // checks value
// console.log(3 ==="3"); // checks value+ type

// console.log(0 == false);
// console.log(0 === false);
// console.log(null == undefined);
// console.log(null === undefined);

// if else if statement
// let marks = 88;
// if (marks>=90)
// {
//     console.log("Grade A");
    
// }
// else if (marks >= 75)
// {
//     console.log("Grade B");
    
// }
// else
// {
//     console.log("Grade C");
    
// }

// // ternary operator

// let age = 56;
// let result = (age>18) ? "Adult" :"Minor";
// console.log(result);

// // Switch case

// let day = 3;
// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;    

//     default:
//         console.log("bye");
              
// }



// nullish coalesing operator
let num= undefined ?? 10;
console.log(num);

function addNum(num1, num2){
    return num1 + num2;
    console.log("i am here");
    
}
console.log(addNum(10,20));