//Creat submit for log-In and signup for Registration. Create amount of attempts for Log-In function
var signup = document.getElementById('signup');
var backToLogin = document.getElementById('backToLogin');
 
// On sign up page implement sign up form. 
signup.onclick = function(){

        var newUsername = document.getElementById("newUsername").value
        ValidateEmail(newUsername)
        var newPassword = document.getElementById("newPassword").value
        var repeatPassword = document.getElementById("repeatPassword").value

// Check for already existing User/Emailadress

for (let i = 0;i < userList.length; i++) {
    if (newUsername == userList[i].username) {
        alert ("Already existing user");
    } 
}
// Log-In if passwords match and Emailaddress valid.  
if (newPassword === repeatPassword && newPassword != "" && ValidateEmail == "true") {
    document.location.href = "mainPage.html" ; userList.push({username: newUsername, password: newPassword})
} 
if (newPassword != repeatPassword || newPassword == "") {
    alert ("Password invalid");
    }
}
/*Not shown on page, as login and registration are in one html now
backToLogin.onclick = function() {
    document.location.href = "LogIn.html"
};
*/
//Trigger Sign-up button when Enter key is pressed
document.getElementById("newUsername").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
document.getElementById("newPassword").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
document.getElementById("repeatPassword").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
// Check if email address is valid. All regular expretions start and end with slashes: / .. /
/*
Explanation for if argument: The sub-expression \w+([.-]?\w+)* is used to match the username in the email. 
It begins with at least one or more word characters including the underscore, 
equivalent to [A-Za-z0-9_]. , followed by . or - and . or - must follow by a word character (A-Za-z0-9_
*/
function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}

   