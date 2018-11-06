//var userList = [{username: "admin", password: "admin"},{username: "user", password: "user"}
//];

class userDatabase {
    constructor(userId, userName, password){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
       
//This function creates a row in table in html document - I am missing a function... ??
    }
}

var userList = [];
    userList.push(new userDatabase (0, "admin", "admin"));
    userList.push(new userDatabase(1, "user", "user"));
    console.log(userList);


//Display hardcoded useres in console
var userListString = JSON.stringify(userList)
console.log(userListString)
localStorage.setItem("User", userListString)
