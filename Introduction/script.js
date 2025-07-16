// ✅ Keywords vs Identifiers
// Keywords are reserved words in JS with special meaning (let, const, var, if, else, etc.)
// Identifiers are user-defined names (like variable names).

// ✅ Variables store values in memory for reuse during program execution.
// Primitives store direct values; Objects/arrays store references.

// ✅ var, let, const – Key Differences

// var (ES5)
// - Function-scoped.
// - Hoisted and initialized as undefined.
// - Redeclaration allowed.
// - Reassignment allowed.
// - Should be avoided in modern JS.

var a;      // declaration (undefined due to hoisting)
a = 12;     // first assignment (initialization)
var a = 12; // redeclaration (allowed)
a = 13;     // reassignment (allowed)

// let (ES6)
// - Block-scoped.
// - Hoisted but in Temporal Dead Zone (TDZ).
// - Redeclaration NOT allowed in the same scope.
// - Reassignment allowed.

let b;    // declaration
b = 12;   // first assignment (initialization)
b = 14;   // reassignment (allowed)
// let b = 20;  // ❌ Error: no redeclaration in same scope

// const (ES6)
// - Block-scoped.
// - Hoisted but in TDZ.
// - Must declare and initialize in the same line.
// - No redeclaration.
// - No reassignment.

const c = 13;
// const c = 15;  // ❌ Error: cannot redeclare or reassign
// c = 15;        // ❌ Error: assignment to constant variable

// For const objects/arrays:
const obj = { name: "Koushik" };
obj.name = "Das";  // ✅ Allowed (object content mutable)

var d = 12;
// whenever we make a variable with var :- 


// it is added to window , which means when it is declared actually outside a function , where it is not function scopeed , it will acvtually become a part of the global scope , which is it will become a property of the global object thats window , it cvan be accessed as windows.variable name which can result in getting overwritten by other scripts or getting into bugs. 

// global objects basically means getting accessed by windows , the global varibale become the properties of the global object 

// will always be function scoped , will be able to be accessed within a function in which is it declared , and wont be able to be accessed outside of the function 

// can be redeclared and will not given an error 

var aa = 12 ;
var  aa = 14; // no error 
let bb = 14;
// let bb = 15; error 

console.log(g); //undefined  - top of scope 
var g ; 
g = 12 ; 

console.log(h); // ref error , cannot access let before initialization (TDZ)
let h = 13 ; 

console.log(i); // ref error , cannot access const before initialization (TDZ)
const i = 4 ;













