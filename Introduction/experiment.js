let a ; 
console.log(a);
let b = null ; 
console.log(b);
console.log(typeof(a)); // undefined 
console.log(typeof(b)); // object 
console.log(typeof(NaN)); // number
console.log(NaN===NaN); // false 
console.log(typeof NaN === "number"); // true 
console.log(2==2);
console.log(2=="2");
console.log(2==="2");
console.log(2!=2);
console.log(2!="2");
console.log(2!=="2");
console.log(2>"2");
console.log(2>2);


console.log(2>3 && 3>2); //false
console.log(2<3 && 3<2); //false
console.log(2>3 && 3<2); //false
console.log(2>1 && 3>2); //true

console.log(2>3 || 3>2); //true
console.log(2<3 || 3<2); //true
console.log(2>3 || 3<2); //false
console.log(2>1 || 3>2); //true


console.log(3>2 ? "true" : "false");

console.log(typeof NaN); // number(NaN)
console.log(typeof []); // object(array)
console.log(typeof {}); //object (object)
console.log(typeof null); //object(null)
console.log(typeof function() {}); //function(function)

let array = [];
console.log(typeof array);

console.log(array instanceof Array);

let object = {};
console.log(typeof object);

console.log(b instanceof Object);


let n = null ; 
console.log(typeof n);

let number = NaN ; 
console.log(typeof number);

console.log(number instanceof  Number ); // false , doesn't work for primitives and only for references 


let x = 3 ; 
switch (x) {
    case 1:
        console.log("Hello 1 ");
        break;
    case 2:
        console.log("Hello 2 ");
        break;
    case 3 :
        console.log("Hello 3 ");
        break;
    default:
        break;
}





let y = 1 ; 
switch (y) {
    case 1:
        console.log("Hello 1 ");
        // no break here 
    case 2:
        console.log("Hello 2 ");
        // no break here 
    case 3 :
        console.log("Hello 3 ");
        // no break here 
    default:
        console.log("Hello 4 ");
        // no break here 
// everything is getting printed if the break statement is not used at the right place  
}

function rps(user, computer){
    if(user==computer) return "draw";
    if((user=="rock" && computer=="scissor")
        || (user=="scissor" && computer=="paper")|| (user=="paper" && computer=="rock")) return "user win";
    return "computer win";

}
console.log(rps("paper", "rock"));


let i = 21 ; 
do{
    console.log(i);
    i++;
}while(i<20);




















