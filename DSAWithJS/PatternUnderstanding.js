let prompt = require('prompt-sync')();
let n = prompt("Enter a number ")
// let a = n;
// for(let j=1;j<=n;j++){
//         let ascii = 65;
//         for(let i=1;i<=n-j+1;i++)
//         {
//             process.stdout.write(String.fromCharCode(ascii)+" ")
//             ascii++;
//         }
//         console.log();
    
// }

// for(let j=1;j<=n;j++){
//         let ascii = 65;
//         for(let i=n;i>=j;i--)
//         {
//             process.stdout.write(String.fromCharCode(ascii)+" ")
//             ascii++;
//         }
//         console.log();
    
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = n; j > i; j--) {
//          process.stdout.write("  ")
        
//     }
//     for(let k = 1;k <= i;k++){
//         process.stdout.write("*   ")
//     }
//     console.log();
    
// }

for (let i = 1; i <=n; i++) {
   
    for (let j = 1; j <=2*n-1; j++) {
        if(i == j || i+j == 10)
            process.stdout.write("* ")
        else 
             process.stdout.write("  ")
    }
    console.log()
}