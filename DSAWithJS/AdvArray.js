//left rotation by 1
// let arr = [1,2,3,4,5]

// let copy = arr[0]

// for(let i = 0;i< arr.length-1;i++){
//     arr[i] = arr[i+1]
    
// }
// arr[arr.length-1] = copy
// console.log(arr)

//Right rotation by 1
// let arr = [1,2,3,4,5]

// let copy = arr[arr.length-1]

// for(let i = arr.length-1;i> 0 ;i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = copy
// console.log(arr)

//  let arr = [1,2,3,4,5]
//  let k = Number(prompt("Enter k value"))
//  k = k%arr.length
//  for(let j = 0 ; j<k; j++)
//  {
//         let copy = arr[0]
//         for(let i = 0;i< arr.length-1;i++){
//             arr[i] = arr[i+1]
            
//         }
//         arr[arr.length-1] = copy
//  }

//  console.log(arr)

//Left rotation in nth time complexity
//  let arr = [1,2,3,4,5]
// let k = Number(prompt("Enter k value"))
// k = k% arr.length
// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)
// function reverse(i,j){
//     while(i<j)
//     {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
// }
// console.log(arr)

// let arr1 = [2,5,6]
// let arr2 = [1,3,4,8]
// let merge = Array(arr1.length+arr2.length)
// let i = j =k =0
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge[k++] = arr1[i++]
//     }else {
//         merge[k++] = arr2[j++]
//     }
// }

// while(j<arr2.length){
//     merge[k++] = arr2[j++]
// }


// while(i<arr1.length){
//     merge[k++] = arr1[i++]
// }
// console.log(merge);
    
//buy sell stokes 2
//     let prices = [1,2,3,4,5]
//     let maxProfit = 0;
//    let isPurchased = false;
//     min = prices[0];

//     for(let i = 0 ;i<prices.length;i++){
//         if(prices[i] <= min){
//             min = prices[i]
//             isPurchased = true;

            
//         }else
//             {
//                 let profit = prices[i]- min
//                 if(isPurchased ){
//                     min = profit;
//                     isPurchased = false;
//                     maxProfit += profit
//                 }
//         }
        
//     }
//     console.log(maxProfit);
    
//Sort color
    // let nums = [2,0,1]
    // let i = 0;
    // let j = 0;
    // let k = nums.length-1;
    // while(i<=k){
    //     if(nums[i] == 0){
    //         let temp = nums[i];
    //         nums[i] = nums[j];
    //         nums[j] = temp;
    //         j++;
    //         i++;
    //     }else if(nums[i] == 2){
    //         let temp = nums[i];
    //         nums[i] = nums[k];
    //         nums[k] = temp;
    //         k--;
    //     }else i++;
    // }

    // console.log(nums);
    
    //kedans algorith Max subArray
    // let nums = [-2,1,-3,4,-1,2,1,-5,4]
    // let sum = 0;
    // let max = -Infinity;
    // for(let i= 0;i<nums.length;i++)
    // {
    //     sum += nums[i]
    //     max =Math.max(max,sum)
    //      if(sum<0) sum =0
    // }
    // console.log(max);
    
// Moore’s Voting Algorithm Majority element
nums = [10,9,9,9,10]
let cnt = 1;
    let ans = nums[0]
    for(let i = 1;i< nums.length;i++){
        if(cnt == 0){
            ans = nums[i]
            count = 1;
        }else if(ans == nums[i]) cnt++;
        else cnt--;
      
    }
    console.log(ans);
    