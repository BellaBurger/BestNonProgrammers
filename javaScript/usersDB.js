//var userList = [{username: "admin", password: "admin"},{username: "user", password: "user"}
//];

class userDatabase {
    constructor(userId, userName, password){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
       
//TO BE IMPLEMENTED: User ID should equal the index in array
    }
    if (userID = null) {
        userID = indexOf(this.dataset.object)
    }
}

if(localStorage.getItem('User') == null) {
    var userList = [];
        userList.push(new userDatabase (0, "admin", "admin"));
        userList.push(new userDatabase(1, "user", "user"));
        //console.log(userList);
        
        var userListString = JSON.stringify(userList)
        localStorage.setItem('User', userListString)
} else {
    var userList = JSON.parse(localStorage.getItem('User'))
}



//Display hardcoded useres in console
//console.log(userListString)
