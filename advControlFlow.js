// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access Denied"; 

// var automatedAnswer = "Your Account # is " + (isUserValid(false) ? "1234" : "not available")

// function condition() {
//     if(isUserValid(ture)) {
//         return "You may enter"
//     } else {
//         return "Access Denied"
//     }
// }

// var answer2 = condition();

// function moveCommand(direction) {
//     var whatHappens;
//     switch(direction) {
//         case "forward":
//             whatHappens = "You encounter a monster";
//             break;
//         case "back":
//             whatHappens = "You arrived home";
//             break;
//         case "right":
//             whatHappens = "You found a river";
//             break;
//         case "left":
//             whatHappens = "You run into a troll";
//             break;   
//         default:
//         whatHappens = "please enter a valid direction" 
//     }
//     return whatHappens;
// }

// console.log(moveCommand("forward"));


function shootBullet(direction) {
    var target;
    switch(direction){
        case "forward":
            target = "You hit a civilian";
            break;
        case "back":
            target = "You hit a zombie";
            break;
        case "left":
            target = "You hit a cat";
            break;
        case "right":
            target = "You hit a oil truck";
            break;
        default:
            target = "You shot yourself";
    }
    return target;
}

console.log(shootBullet("right"))