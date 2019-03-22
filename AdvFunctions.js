//Closures - a function ran, the function executed. The child scope always has access to the parent scope.

const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "bobby";
        alert(greet)
    }
    return second;
}

const newFunc = first();
newFunc();

//Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); //now have a function that multiples by 5

multiplyBy5(10) // 50 
multiplyBy5(11) // 55

// console.log(curriedMultiply(3)(4)); //12

// COMPOSE 

const compose = (f, g) => (a) => f(g(a)); // => sum(sum(5)) num = 5 so .... sum(5+1) ......sum(6) .......num + 1  num + 6 = 7

const sum = (num) => num + 1; 

compose(sum, sum)(5); //gives you 7

//Avoiding side effects and functional purity. 

//Determinism no matter what if my inputs go through the function the return value will always be the same.

