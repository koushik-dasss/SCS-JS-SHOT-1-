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





















