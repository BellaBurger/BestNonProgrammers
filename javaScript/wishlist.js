// retrieve wishes from local storage
var storedWishes = JSON.parse(localStorage.getItem('wishes'));
//retrieve current logged in user from local storage
var currentUser = JSON.parse(localStorage.getItem('currentUser'));
// create empty array where wishes from local storage can be pushed to
var wishlist = [];
// Push wishes to wishlist array which IDs match the username. 
for(i=0; i < storedWishes.length; i++){
        if (storedWishes[i].id[0].userName == currentUser[0].userName) {
        wishlist.push(new Wish(storedWishes[i].name, storedWishes[i].location, new Date(storedWishes[i].date),storedWishes[i].image));
}};
//then create HTML for each item in the array.
var html = "";
for(i=0; i < wishlist.length; i++ ){
    html += wishlist[i].createHTML();
}
// push html string to main page HTML table
table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;

// create remove button that filters fleamarkets and then overrights local storage to remove selected fleamarket
var buttons = document.getElementsByClassName('removeFromList');

// On click, wish is removed from the list by updating the storedWishes variable which is then updated in the local storage
for (u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e){
        var name = JSON.parse(this.dataset.object).name;
        storedWishes = storedWishes.filter(function (item) {
            if(item.id[0].userName == currentUser[0].userName) {
                return item.name !== name;
            } else {
                return item
            }
        
        });
        
        var listString = JSON.stringify(storedWishes);
        localStorage.setItem('wishes', listString);

        //automatically refresh after click
        onClick=ManualRefresh()
        function ManualRefresh(){
            window.location.reload();
        }

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    }); 
};

//Search function for wishlist
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    th = table.getElementsByTagName('th');
    
    // Loop through all table rows, and hide those who don't match the search query 
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = 'none';
        for(var j=0; j<th.length; j++){
            td = tr[i].getElementsByTagName('td')[j];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break
                } 
            }
        }
    }
}
// Logout button. Redirect to login page
var logout = document.getElementById('logout');
logout.onclick = function() {
    document.location.href = 'LogIn.html'; 
}
// redirect to main page
var backToPage = document.getElementById('backToPage');
backToPage.onclick = function() {
    document.location.href = 'mainPage.html'; 
}