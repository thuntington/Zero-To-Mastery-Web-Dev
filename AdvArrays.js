// map, filter , reduce = Array methods
// FOREACH
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
    double.push(num * 2);
})

console.log(double);

// MAP

const mapArray = array.map(num => {
    return num * 2 // for map you always need to return something
});

console.log(mapArray);

/////////Another way of writing this
const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// FILTER 

const filterArray = array.filter(num => { //adds new items from array into a new array that are true to conditions set.
    return num > 5
}); 

console.log('filter', filterArray)

// REDUCE - filtering and mapping with reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0); //this number defines the accumulator's starting point. when iterating acc = 0 & num = number in array. 

console.log('reduce', reduceArray)
