// //For each method
// //The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.
// x=[1,2,3,4,5]
// y=x.forEach(i=>console.log(i*5))


// //Map method
// //
// x=[10,20,30,40,50]
// y=x.map(i=>i+i)
// console.log(y)


// //Filter method


// x=[20,40,50,60,70,55,40]

// y=x.filter(i=>i>50)
// console.log(y)





// //Reduce method
// x=[10,20,30,40,50]
// y=x.reduce((total,i)=>total+i)
// console.log(y)


// //every method

// x=[10,20,30,40,50]

// y=x.every(i=>i>30)
// console.log(y)


// //some method

// x=[10,20,30,40,50]
// y=x.some(i=>i>30)
// console.log(y)


// //Call method


// let Student={
//     //    age:27,
//     //    gender:"male",
//         student_details:function(age,gender)
//         {
//               return  this.Student_name+' '+this.Student_lastname+' '+age+' '+gender;;
//           }
    
//     }
//     let student_information={
//      Student_name:"Raju",
//      Student_lastname :"gondi"
//     }
//     // let student_information2={
//     //     Student_name:"pooja",
//     //     Student_lastname :"agarwal"
//     //    }
    
//     console.log(Student.student_details.call(student_information, 21, "male"))


    //Settimeoput method within self invoking method
    
setTimeout(()=>{
    console.log("Goodmorning")
},10000); 




