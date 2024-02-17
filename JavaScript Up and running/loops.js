// For loop
//          When you know the number of time loop run.
// for(var i=0; i<10 ;i++){
//     console.log("Namaste duniya !")
// }


// In javaScript semi-colon(;) is always optional


// While loop
//          Execution is based on condition
// let i=0
// while(i<10){
//     console.log("Namaste duniya");
//     i++;
// }


// Continue and break statement
// for(var i=1;i<=50;i++){
//     if(i%2!=0){
//         continue;
//     }
//     console.log(i);
// }


// Nesting of loop with the use of continue
// for(var i=0;i<=10;i++){
//     for(var j=1;j<=10;j++){
//         if(j%2!=0){
//             continue;
//         }
//         console.log(j);
//     }
// }


/**
 * Break
 */
for(var i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log("Hey ",i,"let's date !");
}
