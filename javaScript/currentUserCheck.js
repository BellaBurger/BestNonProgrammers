if (JSON.parse(localStorage.getItem('currentUser')) == null){
    alert("Please log-in first");
    document.location.href = 'LogIn.html';
} 