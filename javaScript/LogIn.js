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
    
    // If input doesnt equal array-elemnt inform user, show amount of left attempts to log in
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

/* IMPLEMENT: Press Enter key to submit Sign-in and Sign-up from
usernameInput.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        submit.click();
});
   */
