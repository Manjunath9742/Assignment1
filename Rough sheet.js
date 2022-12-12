


//example using spread and split operator

// function example(m)
// {   
//     console.log(m)
//     y=m.split('')
//     console.log(y)

    
     
// }
// example("100")

//...args(spred operator)
//if we want to push multiple values inside the array and also if we want to pass more than 2 argument we use ...args(args keyword is not predefined)
// function  example(...args)
// {
//    //console.log(args)
//     // for(a=0;a<args.length;a++)
//     // {    
//     //     console.log(args[3]) 
//     //     break;
//     // }
    
//     console.log(args[3])
// }
// example(1,2,3,4,5,3,2)



//call method

// let student={
//     student_name:"ramanand",
//     student_class:12,
//     display:function(age,gender) {

//        return  this.student_name+'  ' +this.student_class+'  ' +this.student_age+'  ' +this.student_gender;
//     }
// }

// let add_more_information={
//         student_name:"akshay",
//         student_class:10,
//         student_age:25,
//         student_gender:"male"

// }

// let y=student.display.call(add_more_information)

// console.log(y)


// let z=(i=>i*4)
// console.log(z(2))

// let student=function(callback ){

//      return  z()+20;
// }

// let y=student()

//y=['manju','akshay','guru',22]
// z=[2,4,6,8,10]
// //const a=y.map()

// let y=z.map(i=>i=4+i)
// console.log(y);


// filter method

// let a=[10,20,30,40]

// y=a.filter(a=>a>20)

// console.log(y)


//reduce method
// let a=[10,20,30]
// i=0;
// let y=a.reduce(i=>i+i)

// console.log(y)
let myfuction=( m)=>{

    
    console.log(m)
}

myfuction(50)

// let a=[3,4,5,4]
  
// console.log(...a)



let myfunction=(...args)=>{
    console.log(args)
} 

myfunction(2,4,5,6,7)