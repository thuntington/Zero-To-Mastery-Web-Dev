var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];
// for (var i = 0; i < todos.length; i++) {
//     todos[i]= todos[i] + "!";
// }
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//     todos.pop();
// }

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne++
// }
// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0)


var todosLength = todos.length;
// for (var i = 0; i < todos.length; i++) {
//     console.log(i);
// }
function logTodos(todos, i) {
    console.log(todo, i);
}

todos.forEach(function(i){
    console.log(i);
})


todos.forEach(logTodos);
todosImportant.forEach(logTodos);