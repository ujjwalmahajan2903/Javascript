// let arr = new Array(5);


// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt("Enter a values"))
    
// }
// console.log(arr);

// let arr = [10,20,800,40,50,20,80,20];
// let sum = 0;

// for(let i = 0 ;i<arr.length; i++)
// {
//     sum += arr[i]

// }
// console.log(arr)
// let max = 0;
// let find  = 10;
// for(let i = 0;i < arr.length;i++)
// {
//     arr[i] > max ? max = arr[i] : max = max;

// }
// console.log("The max value is: "+ max)

//Find number of occurences
// let counter = 0;
// for(let i = 0;i<arr.length;i++){
//     arr[i] == find ? counter++ : counter;
// }
// console.log(`${find} occured ${counter} times`)

//Find 2nd max
// let arr = [10,20,800,40,50,20,80,20];
// let secdmax = Math.min(arr[0], arr[1])
// let max = Math.max(arr[0], arr[1])
// for(let i = 2;i<arr.length;i++){
//     if(max < arr[i]){
//        secdmax = max;
//        max = arr[i]
//     }
//     else if(arr[i] > secdmax && max != arr[i])
//     {
//         secdmax = arr[i]
//     }
// } 
// console.log("second max is: "+secdmax)

// let arr = [10,20,800,40,50,200];

// for(let i = arr.length-1;i<arr.length; i--)
// {
//     for(let j = 0 ;j==i;j++)
//     {
//         temp = arr[j]
//         arr[j] = arr[i]
//         arr[i] = temp
//     }
// }
        // let i = 0 ,j = arr.length-1;
        // while(i!=j){
        //     let temp = arr[i]
        //     arr[i] = arr[j]
        //     arr[j] = temp
        //     i++;
        //     j--;
        // }
        // console.log(arr)

// let arr = [0,1,0,1,1,0,1,0,0]
// let j = 0;
// for(let i = 0 ;i<arr.length;i++)
// {
//     if(arr[i] == 0){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
    
// }
// console.log(arr)