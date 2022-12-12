// let program = function()
// {
//    first_name="manjunath"
//    last_name="sheshagiri"
//   return  first_name+' '+last_name;
 

// }



 var first_name="Sachin"
 var last_name="chouvan"
function person(first_name,last_name){
    this.first_name=first_name;
    this.last_name=last_name;
    this.displayname=function(){
        console.log('name:${this.first_name} ${this.last_name}');
    }
}

let person1=new person('raju','kittur');
person1.displayname();



// function spread(...m){
 
//     console.log(m)
// }

// spread(12,23,4,2312,12,12)



let x=100
function display()
{
    x=200
    console.log(x)
}
console.log(this.x)
display()