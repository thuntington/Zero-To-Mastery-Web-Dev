//Pass By Value vs Pass By Reference

var a = 5;
var b = a; 

b++;

let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj); // let clone = obj //this would change the object c to 5;
let clone2 = {...obj}

obj.c = 5;

console.log(obj)
console.log(clone)
console.log(clone2) 



