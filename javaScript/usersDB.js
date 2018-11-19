
// For user database: check if any user already exist in local storage. If not create User and push to user list. 
if(localStorage.getItem('User') == null) {
    var userList = [];
        userList.push(new User ("admin", "admin"));
        userList.push(new User("user", "user"));
        userList.push(new User("ingrid", "ingrid"));
        userList.push(new User("caroline", "caroline"));
        userList.push(new User("isabella", "isabella"));


        //Then save to userlist in local storage, stringify first
        var userListString = JSON.stringify(userList)
        localStorage.setItem('User', userListString)
        // if local storage not empty, user list equals the users already in the local storage.
} else {
    var userList = JSON.parse(localStorage.getItem('User'))
}

// Local Storage only accepts strings