var newUsers=[{
    username: "Pamela",
    password: "six"
},
{
    username: "Peter",
    password: "pan"
},
{
    username: "two",
    password: "one"
}]

console.log(newUsers)

var text = "Hi my name is "

function accessName(randomword){
text += randomword
}
accessName(newUsers[1].username)
console.log(text)


var submit = document.getElementById("submit")
var resultSpan = document.getElementById("loginResult")

submit.onclick = function() {
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    for (let i=0; i<newUsers.length; i++){
    if(username == 0 || password == 0){
        resultSpan.innerText = "You need to enter a username and password in order to use our system"
        } 
        
    else if (username!==newUsers[i].username){
        resultSpan.innerText = "The username is incorrect"
            }
        
    else if (password!==newUsers[i].password){
        resultSpan.innerText = "The password is incorrect"
            }

    else if (username==newUsers[i].username && password==newUsers[i].password){
        resultSpan.innerText = "You are logged in as "+ newUsers[i].username
        }
    
        
    }
}