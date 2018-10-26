var userList = [{username: "admin", password: "admin"},{username: "user", password: "user"}
];

//Display hardcoded useres in console
var userListString = JSON.stringify(userList)
console.log(userListString)
localStorage.setItem("User", userListString)
