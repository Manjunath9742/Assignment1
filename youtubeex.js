//filter method
// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array
  //const age=[21,20,35,44,34,65,76,53,60,70,80,90]
// let canDrink=[];
// for (let i=0;i<=age.length;i++)
// {
//          if(age[i]>30){
//     canDrink.push(age[i]);
//          }

// }   
// console.log(canDrink);

//same using filter method

// const candrink=age.filter(function(age){

//     return(age>=30)
    
// })

// console.log(candrink);



//using arrow function
// const candrink=age.filter(age=>age>=30);
// console.log(candrink)


//another example for arrow
// let example=()=>
// {
//     console.log('hello friends goodmorning');
// }
// example()






//For example, let's attempt to display 5 names in the console after 2 seconds each – that is, the first name appears after 2 seconds, the second after 4 seconds, and so on...
//This above example will work, but it will be difficult to comprehend, debug, or even add error handling to. This is referred to as"Callback Hell".  Callback hell is a big issue caused by coding with complex nested callbacks.
//The primary reason for using promises is to prevent callback hell. With Promises, we may write asynchronous code in a synchronous manner.
// setTimeout(() => {
//   console.log("Joel");
//   setTimeout(() => {
//       console.log("Victoria");
//       setTimeout(() => {
//           console.log("John");
//           setTimeout(() => {
//               console.log("Doe");
//               setTimeout(() => {
//                   console.log("Sarah");
//               }, 10000);
//           }, 10000);
//       }, 10000);
//   }, 10000);
// }, 10000);


setTimeout(()=>{
  console.log('hello')
  setTimeout(()=>{
    console.log('Friends')
    setTimeout(()=>{
      console.log('how')
      setTimeout(()=>{
        console.log('are')
        setTimeout(()=>{
          console.log('you')
},10000)

},10000)

},10000)

},10000)

},10000)