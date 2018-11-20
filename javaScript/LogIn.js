//Create submit for log-In and signup for Registration. Create amount of attempts for Log-In function
var submit = document.getElementById('submit');
var signup = document.getElementById('signup');
var attempt = 3;
var existingUser = JSON.parse(localStorage.getItem('User'));
var currentLogIn = [];


// When clicking Submit button, retrieve input of username box and password box
submit.onclick = function(){

    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

// Check if username and password match with already existing user. Redirect to main page
    for (let i = 0;i < existingUser.length; i++) { 
        if (usernameInput == existingUser[i].userName && passwordInput == existingUser[i].password) {
            //Push username to curren user local storage
            currentLogIn.push({userName: usernameInput})
            document.location.href = "mainPage.html"; 
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString);
            return true;
        } 
    }

    // If input doesnt equal array-elemnt inform user, show amount of left attempts to log in
    attempt--;
    alert("Username or password invalid or non-existent. You have " + attempt + " attempts left.");
    if (attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        alert ("access denied, please register as new user");
        return false;
    }
}

//Press Enter key to submit login from
document.getElementById("username").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        submit.click();
});
document.getElementById("password").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        submit.click();
});

