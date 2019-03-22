var database = [
    {
        username: "Tom",
        password: "supersecret"
    },
    {
        username: "Harry",
        password: "123456"
    },
    {
        username: "Matty",
        password: "666"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning."
    },
    {
        username: "Sally",
        timeline: "Javascript is sooo coool!"
    }
];

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++){
        if(database[i].username === user && database[i].password === pass) {
            return true;
        } 
    }
    return false;
}
    
function signIn(user, pass) {
    // console.log(isUserValid(username, password));
    if (isUserValid (username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!")
    }
}
signIn(userNamePrompt, passwordPrompt);