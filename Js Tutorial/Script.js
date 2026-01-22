// let sum = 0;
// for(let count = 1; count<= 5 ;count++)
// {
//     sum += count
// }
// console.log("sum :" + sum)

// let str = "Ujjwal";
// let size = 0;
// for (let i of str)
// {
//     console.log("i :"+i)
//     size++;
// }
// console.log("the size is :"+size)

// for(let i = 0;i <= 100; i++)
// {
//     if(i % 2 != 0)
//     {
//         console.log(i);
//     }
// }

let gameNumber = 25;
let guess = prompt("Guess the number!")
while(guess != gameNumber)
{
    guess = prompt("You entered wrong number!")
}
console.log("Congrtulation you guess the right number")

