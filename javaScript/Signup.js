//Signup is variable for signup button
var signup = document.getElementById('signup');
// Variable that refers to Users that are already in local storage
var existingUser = JSON.parse(localStorage.getItem('User'));
// If there are now existing Users, new User array is empty. Otherwise it equaly the locally stored Users
var newUser;
if (existingUser == null) { 
  newUser = []
} else { newUser = JSON.parse(localStorage.getItem('User'))
};

// Variable current User is an empty array. Se below: On sign-up, email addressinput is pushed to current user and stored in local storage
var currentUser =[];
 
// On sign up page implement sign up form. 
signup.onclick = function(){
        var newUsername = document.getElementById("newUsername").value
        var validMail = ValidateEmail(newUsername)
        var newPassword = document.getElementById("newPassword").value
        var repeatPassword = document.getElementById("repeatPassword").value
        var validPassword = ValidatePassword(newPassword)

    // Check for already existing User/Emailadress
    // TBD : dont log-in when user exists
    for (let i = 0;i < existingUser.length; i++) {
    if (newUsername == existingUser[i].userName) {
        alert ("Already existing user");
        return false;
        } 
    }

    // Sign in if passwords match and Emailaddress valid.  
    if (newPassword === repeatPassword && validPassword == true && validMail == true) {
        document.location.href = "mainPage.html" ; 
         //Push to an array wish then refreshes the localStorage for userDatabase
         newUser.push({userName: newUsername, password: newPassword})
         currentUser.push({userName: newUsername})
    } 
    console.log(newPassword)
    console.log(repeatPassword)
    console.log(ValidateEmail)

    //Push newUser list to localStorage
    var userListString = JSON.stringify(newUser);
    localStorage.setItem('User', userListString);
    console.log(localStorage);

    //Push currentUser list to localStorage
    var IDListString = JSON.stringify(currentUser);
    localStorage.setItem('currentUser', IDListString);
    console.log(localStorage); 
}
//Trigger Sign-up button when Enter key is pressed
document.getElementById("newUsername").addEventListener("keyup", function(event) {
    //event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
document.getElementById("newPassword").addEventListener("keyup", function(event) {
    //event.preventDefault();
    if (event.keyCode == 13)
        signup.click();
});
document.getElementById("repeatPassword").addEventListener("keyup", function(event) {
    //event.preventDefault();
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

// Validate password for upper/ lower case letters, length and numbers
function ValidatePassword(password) {
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password)){
    return (true)
  }
  alert("You have entered an invalid password!")
  return (false)
}

// Display password information box when clicking on password field. Checkmark
var myInput = document.getElementById("newPassword");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  s}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  
}