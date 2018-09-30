//Creat submit for log-In and signup for Registration. Create amount of attempts for Log-In function
var signup = document.getElementById('signup');
 
// On sign up page implement sign up form. 
signup.onclick = function(){

        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;
        var repeatPassword = document.getElementById("repeatPassword").value;

// CHECK: HOW DO I CHECK / REFER TO LIST IN LogIn.js ???

for (let i = 0;i < userList.length; i++) {
    if (newUsername == userList[i].username) {
        alert ("Already existing user");
    } 
}
if (newPassword === repeatPassword && newPassword != "") {
    alert ("You are signed up now"); userList.push({username: newUsername, password: newPassword})
} 
//CHECK: How do I implement a button in You are signed up alert saying " Go to
else {
    // TO BE IMPLEMENTED: can we make a red alert saying " password input doesnt match"
    alert ("Please enter password or repeat password");
    }
}


   