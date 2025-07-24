// // for loop

// for (let i=2;i<=10;i+=2)
// {
//     console.log(i);
    
// }
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// // for loop

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


let sum = 0;
for (let i = 1; i <= 4; i++) {
  sum += i;
}
console.log(sum); //output=10

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// // while loop

// let count = 3;
// while (count > 0); {
//   console.log(count);
//   count--;
// }

// do..while loop

let x = 10;
do {
  console.log("Value of x:", x);
  x++;
} while (x < 5);
