function sayHello(){
    console.log('Hello');
}
sayHello();

function sing(song) {
    console.log(song)
}

sing("helllooooooo is it me??");
sing('your looking for!!');


// function multiply(a, b) {
//     a * b
// }
// multiply(5, 10); //doesnt work

function multiply(a, b) {
    return a * b
}
multiply(5, 10); 

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return 'Thats too hard'
    } else {
        return a * b
    }
}
multiply(5, 10); 


