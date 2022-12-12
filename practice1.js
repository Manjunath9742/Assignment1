//let array1=[2,33.3,"hello",2,"hi"];
//let array2=["hello"];
//console.log(array1.split(array2));

// console.log(array1.length);
// console.log(array1[8]);
// console.log(array1[array1.length-1]);
// console.log(array1[array1.length-2]);
// console.log(array1[array1.length-3]);
// console.log(array1[array1.length-4]);
// console.log(array1[array1.length-5]);
// array1[0]="karnataka";
// console.log(array1);


// array11="hello friends how are you";
// const result=array11.split(" ");
// console.log(result);
// result.push('goodmorning')
// console.log(result);

// let word=result[1];

// console.log(word);




//includes
// let arr1=[1,2,3,4,"hello"]
// let arr2=[5,6,7,8,3];

// let arr3=arr1.concat(arr2);
// console.log(arr3);
// console.log(arr3.lastIndexOf(3)); 
// console.log(arr3.lastIndexOf(21));
// console.log(arr1.includes(4))



// let arr21=[1,2,21,"a","b","c",7,3,5];
// console.log(arr21.join(' -  '));
//console.log(arr21)
//console.log(arr21.slice(0,3)); //it includes the explicit value also

//console.log(res); 
//console.log(arr21.push(41));
//console.log(arr21)
// let a=arr21.splice(1,2,42,27)

// console.log(a)
// console.log(arr21.splice(1,3,27))
// arr21.push('india');
// console.log(arr21);
// arr21.pop();
// console.log(arr21);
// arr21.shift();
// console.log(arr21);
// console.log(arr21.reverse());

// let colors = ['green', 'yellow', 'blue', 'purple'];
// c1=colors.splice(0, 3);
// console.log(c1);





// function add(a=10,b=20){

//     console.log(a+b)
// }

// add(0,1)




// function add(a=10,b=20){
//     x=a+b                   //due to non-declaration of return keyword it display undifined as an output
    
// }

// x=add(12,20)
// console.log(x);




// x=100
// function add(a=100,b=200) //dout
// {
//  const x=a+b
//     return x
// }


// let y=20

//  y=add(10,50)
//   console.log(x,y)


//function gratest(a,b,c){

// if(a>b||a>c){
//     print("a is grater")


// }
// elseif()

// }


// gratest_of_three(100,300,200)




//check palidrome or not


// function is_palindrome( abc)
// {

//   y=abc.split('')
//   console.log(y)
//   console.log(y.reverse())
//   x=y.join('')

//   if(x===abc){
//     console.log('given input is Palindrome')
//   }
// else
// {
//   console.log('${0} given input is not a palindrome')
// }
 

// }
// is_palindrome("gadag")




//  function factorial(a){
//    var fact=1;
    
//      for(var i=1;i<=a;i++)
//     {
//          let  fact=fact*i;  
//         //   var fact=2;
//           console.log(fact)
//     }
//     console.log(fact)

// }
//  (factorial(5))




// let news=" too Today's weather is too rough"

// console.log(news.search('too'))
// console.log(news.lastIndexOf('too'))
// // console.log(news.firstIndexof('too'))

// console.log(news.search(/is/))
// console.log(news.indexOf('is'))

// let a='20'
// let b=20
// console.log(a===b)



//  function arr(abc)
//  {
//     z=[]
    
//     y=z.push(1,2,3,"a")
//      z.split()
//     return z
//  }

//  arr()
//  console.log(y)
//  console.log(z)


// let number=[1,2,3,4,54,"helllo"];
// var a=number.slice(0,2)         //if we want use slice methods we need to crete new variable to store after slicing and we call new var within console.log but in splice method  new variable not taking any values from splice method
// console.log(number)


// function x()
// {
//     for (y of [1 , 3 ,5])
//     {
//                console.log('The value of y is ${y}');
//                return y;                                     //due to declaring of returns cursor comes out of function
//                 } 
//     console.log('This function does nothing');
// }

// x()



//using continue

// function x()
// {
//     for (y of [1, 3 ,5])
//     {
//                console.log("The value of y is '${y}' ");      //dout
//              continue;                         
//                 } 
//     console.log('This function does nothing');
// }

// x()





// let z=[]
// number.splice(0,0,12,23,34)
// console.log(number)

// number.splice(2,1)
// console.log(number)





//SPRED OPERATOR
//  mul=(...args)=>{
//     console.log(args) // if we want pass multiple value within a function in es6 we used spread operator

//     for(i=0;i<args.length;i++)
//     {
//         console.log(args[2])
//        var  sum=args[i]+1
//         console.log(sum)
//     }
// }
// mul(2,3,4,5,4)


// add=(...args)=>{
// console.log(args)
// for(var a=1;a<=args.length;a++){
//     args=args+a;
//     console.log(args)
// }

// }

// add(10,1,20)





//fibonacci series

// function fibonacci(num){
//    a=0
//    b=1     
//    console.log(a)
//    console.log(b)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//   for(let i=3;i<=num;i++)
//   {
//     res=a+b;
//       a=b;
//       b=res;
//       console.log(res)
//   }
 
// }
// fibonacci(10)







// // amstrong value
// function ams_value(num)
// {
//   var temp_value=0;
//   var a=0;
//   var res=0;
//   temp_value=num;
  
//   while(num>0)
//   {
    
//       a=num%10; 
//       res=a*a*a+res;
//      num=parseInt(num/10); 
               
//   }
//  if(temp_value==res){

//         console.log('Given number is  amstrong number')
//  }
//  else{   
//   console.log('Given number is   not an amstrong number')
//  }
// }

// ams_value(153)




// function example(a)
// {
//    y=a.split('')
//     console.log( y)
// }

// example("121")                        


//this keyword


// let name="manjunath";
// let age=50;



// const  example  = {
//      First_name:"akshay",
//      Last_name:"sheshagiri",
//       sum :function(){

//           console.log("First_name.value"+ +"Last_name.value")
       
//      } 
// }
// console.log(example.sum())



// first_name ="amar";
// last_name  ="rajaput";
// let fullname = function()
// {

//     return(first_name+" "+last_name)
// }

// console.log(fullname());





// (function(){
//     var a=0
//     var b=0
//     console.log(a+b)
// })(10,20)




// let program=
//  {

//      student_name : "manjunath ",
//        last_name  :  "sheshagiri",
//       "fullname" : function(){
//         return student_name +  +last_name
//       }

// }
 

// console.log(program.fullname())



//Self invoking function
// function x(m){
//      console.log(m)
// }x(10)


// let  first_name="manjunath"
// let last_name="sheshagiri"

// var program =
// {
//       'first_name' : "manjunath",
//       'last_name' : "sunagar",
//        'full_name'  : first_name+'   '+ last_name
      

// }
// console.log(program.first_name)






//call callback and



// let student={

//     fullname:function(){

//             return this.First_name+'  '+this.Last_name;
//     }
// }


// let student_details={
//     First_name:"akshay",
//     Last_name:"sunagar"
// }


// console.log(student.fullname.call(student_details))



// let Student={
//        Student_name:"manjunhath",
//       Student_lastnmae:"sheshagiri",
//        student_details:function()
//        {
//              return  this.Student_name+' '+this.Student_lastname;
//          }

// }


// let student_information={
//     Student_name:"Raju",
//     Student_lastname :"gondi"
// }


// console.log(Student.student_details.call(student_information))


//second type of functionality with call mathod


// let Student={
// //    age:27,
// //    gender:"male",
//     student_details:function(age,gender)
//     {
//           return  this.Student_name+' '+this.Student_lastname+' '+age+' '+gender;;
//       }

// }
// let student_information={
//  Student_name:"Raju",
//  Student_lastname :"gondi"
// }
// let student_information2={
//     Student_name:"pooja",
//     Student_lastname :"agarwal"
//    }

// console.log(Student.student_details.call(student_information, 21, "male"))


//Apply method
// only difference between call  and apply method is  apply  method takes the argument through array and call takes the argument sapareltly
//Example
// console.log(Student.student_details.apply(student_information2,[30,"Female"]))



//set timeout
// setTimeout(()=>{
//     console.log("Goodmorning")
// },10000); 


//Higher Order Function
 
// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter;}
//   })();
  
//   function myFunction(){
//     document.getElementById("demo").innerHTML = add();
//     document.getElementById("demo").innerHTML = add();
//   }




//arrow function

// let sqr1=n=>  n**2;
// console.log(sqr1(10))




//passing multiple argument using spread method

// function  example(...args){

// console.log(args)

// }

// example(1,2,3,4)


// let sqrl=(n)=> n+n;
// //let sqrl=n=>n+n;
// console.log(sqrl(10))




//console.log(sqrl(20))


// let cube=(abc,n)=>
// {
//     return n ;                                                                                                                                                                                                                                                                                                                                            
// } 
// //console.log(cube(0,100))
// //console.log(cube(500,100))
// console.log(cube(10,20,30))



// function print_something(){
//     return "hello friends,";
// }
// let cube=(callback,n)=>
// {
//     return  callback+"how are you"
// }

// console.log(cube(print_something))
 

// let print_something=n=>n**2

// let cube=(callback,n)=>
// {
//     return (callback)*n
//  }
//  let x=cube(print_something(),2)
//  console.log(x) 


// let a=['hello',63,51,32];

// // Z=a.includes(11)
// //z=a.indexOf(1)

// //console.log(a.indexOf(63))
// z=a.fill(30)
// console.log(z)




//map
// x=[1,2,4,5,3]
// y=x.map(i=>i*2)
// console.log(y)





//another way using map

// let a=[1,2,3,5,4]

// function doubled(x){

//     return x*3
// }

// let result=(a.map(doubled));
// console.log(result)


// console.log(a.length)
// var i;
// console.log(a[i])



// for (let i=0;i<=a.length;i++)
//{
    //let b=[];
//      result=a[i]*2;
//    let r=(b.map(result))
//     console.log( b);

// y=a.map(i=>i*2)
// console.log(y)
// }

// y=a.filter(i=>i>3)
// console.log(y)

// y=a.reduce((total,i)=>total+i);
// console.log(y)


// y=a.every(i=>i>3)
// console.log(y)

// y=a.some(i=>i>3)
// console.log(y)

// y=a.fill(20,30)
// console.log(`fill ${y}`)


// function tripled(x){
//     return x*3;
// }

// y= a.map(tripled)

// console.log(y)


// let z=a.map(i=>i*2)
// console.log(z)

// y=a.reverse()

// console.log(y)
// y=a.sort()
// console.log(y)


//array destructuring
//let arr1=['majunath',25,'haveri','mechanical']
// console.log(a)


// for(let i=0;i<a.length;i++){

//     console.log(a[i])
// }




// const [a,b,c]=arr1
// console.log(a+' '+b+' '+c)
// console.log(b)
// console.log(c)

// const [a,...b]=arr1
// console.log(a)
// console.log(b)




// let arr1=[{student_id:1,name:"akshay",class:"12",college:"bms college",district:"bengalore"},{student_id:2,name:"sachin",class:"11",college:"bit college",district:"Davangere"},{name:"santhosh",class:"12",college:"sdm college",district:"Dharawad"}]
// //console.log(a)

// const [{name}, ,{district}]=arr1
// console.log(name)





//call

// let student_info={
//        student_name:"akshay",
//         student_age:25,
//          student_details:function(age,){
//               this.student_name+' '+this.age+' '+this.student_class+' '+this.gender;
//          }

// }                                           
// let all_information={
//      student_name:"Raju",
//      student_age:28,
//      student_class:"12th", 
//      student_gender:'male',
// }

// console.log(student_info.student_details.call(all_information))


// console.log("hello-world")

// const key=["emial","phone_number","address",'gender']

// const person={
//      name:"akshay",
//      age:25,
//      person_hobbies:["guiter","sleeping"]   
// }
// person["emial"]="manjuns2012@gmail.com"
// person["phone_number"]="9742980886"
// person.address="manjunathnager,haveri"
// person.gender="male"
// console.log(person);


// var z=[21,23,32,43]

// var [a,b,...c]=z;

// console.log(a)
// c.push(45)
// console.log(c)

// //reduce method
// y=c.filter(i=>i>50)
// console.log(y)

//map
/*
y=c.map(i=>i*2)

console.log(y)


//reduce method
y=c.reduce((total,i)=>total+i)
console.log(y)

y=c.some(i=>i>30)
console.log(y)

y=c.every(i=>i>100)
console.log(y)

y=c.map(i=>i*1000)
console.log(y)
*/

// a='20'
// b=20

//console.log(a!=b)
// console.log(a!=b)
// console.log(a!===b) 


//clouser
function x()
{
   let a=10
    return function y() {
        var a=20;
    console.log(a)
    }
   
    console.log(a)

}
 y=x();
 console.log(y)