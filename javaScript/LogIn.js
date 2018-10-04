//Create list of users (array) (hard code)
// PUT it in usersDB now 
var userList = [{username: "admin", password: "admin"},{username: "user", password: "user"}
];

//Creat submit for log-In and signup for Registration. Create amount of attempts for Log-In function
var submit = document.getElementById('submit');
var signup = document.getElementById('signup');
var attempt = 3;

// When clicking Submit button, retrieve input of username box ans password box
submit.onclick = function(){

    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

// If Username and Password equals an Element in userList array return Logged-In alert.
    for (let i = 0;i < userList.length; i++) { 
        let output = "";
        if (usernameInput == userList[i].username && passwordInput == userList[i].password) {
            document.location.href = "mainPage.html"; 
            return true;
        } 
    }
    
    // If input doesnt equalt array-elemnt inform user, show amount of left attempts to log in
    attempt--;
    alert("Username or password invalid or non-existent. You have " + attempt + " attempts left.");
    if (attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        alert ("access denied");
        return false;
    }
    //TO BE IMPLEMENTED: When access denied show sign up /register button and lead to registration page
    }
// TO BE IMPLEMENTED: Signup form. Create sign up button that leads to sign up page

// On sign up page implement sign up form. 
signup.onclick = function(){

        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;
        var repeatPassword = document.getElementById("repeatPassword").value;
// check if username already exists
for (let i = 0;i < userList.length; i++) {
    if (newUsername == userList[i].username) {
        alert ("Already existing user");
    } 
}
if (newPassword === repeatPassword && newPassword != "") {
    alert ("You are signed up now"); userList.push({username: newUsername, password: newPassword})
} else {
    // TO BE IMPLEMENTED: can we make a red alert saying " password input doesnt match"
    alert ("Please enter password or repeat password");
    }
}


   
