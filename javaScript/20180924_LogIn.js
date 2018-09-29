
var userList = [{username: "abc@gmail.com", password: "abc"},{username: "dfg@gmail.com", password: "dfg"}
    //hard code users
];

var submit = document.getElementById('submit');
var signup = document.getElementById('signup');
var attempt = 3;

submit.onclick = function(){

    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    for (let i = 0;i < userList.length; i++) { 
        let output = "";
        if (usernameInput == userList[i].username && passwordInput == userList[i].password) {
            alert ("logged in"); 
            return true;
        } 
    }
    attempt--;
    alert("Username or password invalid or non-existent. You have " + attempt + " attempts left.");
    if (attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        alert ("access denied");
        return false;
    }
    }

signup.onclick = function(){

        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;
        var repeatPassword = document.getElementById("repeatPassword").value;
// check if username already exists
for (let i = 0;i < userList.length; i++) {
    if (newUsername == userList[i].username) {
        alert ("Already existing user");
    } 
    /*else {
        alert ("please enter password");*/
    }
if (newPassword === repeatPassword && newPassword != "") {
    alert ("You are signed up now"); userList.push({username: newUsername, password: newPassword})
} else {
    alert ("Please enter password or repeat password");
}
    //userList.push({username: newUsername, password: newPassword});
}


    //login();

/*console.log(userList);


var submit = document.getElementById('submit');

submit.onclick = function(){
  console.log("Button is clicked");
//check value using id for both username and password
 


for (i = 0; ;i++) {
     if va
 }




};

//1. Name empty boxes - done

//2. Type in email


for (i = 0; ;i++) {
    var user = 20180924_indx.html.getElementById("username").value;
    var password = 20180924_index.html.getElementById("password").value;
} 


// a) email is incorrect
//--> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
//b) email is not part of the list
// --> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
// c) mail is correct
// --> log in

//3. Type in password
// a) password is incorrect
//--> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
//b) password is not part of the list
// --> output: email or password is incomplete if email is incorrect/missing or password is incorrect/missing
// c) password is correct
// --> log in

// 4. Implement a signup button
// _> if person signs up push email to userList and password to passwordList

//5. Limit tries

*/