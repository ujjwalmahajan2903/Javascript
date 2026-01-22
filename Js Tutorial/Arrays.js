let  arr = [2,4,6,8,5];

arr.forEach(function numsq(num)
{
    return console.log(`The sq of ${num} is ${num*num}`)
})


arr.forEach((num) =>
{
    return console.log(`The sq of ${num} is ${num*num}`)
})

let newArr = arr.map((val) => 
{
    return val*val;
});

console.log(newArr);

newArr = arr.filter((val) =>
{
    return val%2 == 0    
})

console.log(newArr);

let op = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
})

console.log ("the largest from array is "+ op)

let n = prompt("Enter a number")

let arr1= [];
for(let i = 1 ; i<=n ; i++)
{
    arr1[i-1] = i;
}
let sum = arr1.reduce((res,curr) =>
{
    return res+curr;
})

console.log(sum)

let product = arr1.reduce((prev,curr) =>
{
    return prev*curr
})

console.log(`The product is ${product}`)