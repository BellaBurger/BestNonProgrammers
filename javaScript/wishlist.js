var storedWishes = JSON.parse(localStorage.getItem('wishes'));
console.log(storedWishes);

var currentUser = JSON.parse(localStorage.getItem('currentUser'));

var wishlist = [];

for(i=0; i < storedWishes.length; i++){
        if (storedWishes[i].id[0].userName == currentUser[0].userName) {
            console.log('if condition true')
        wishlist.push(new Wish(storedWishes[i].name, storedWishes[i].location, new Date(storedWishes[i].date),storedWishes[i].image));
}}
console.log(wishlist);

var html = "";
for(i=0; i < wishlist.length; i++ ){
    html += wishlist[i].createHTML();
}

table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;


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

    
    //buttons[u].addEventListener("mouseover", function(e){
     //   alert("CLEVER");
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

var logout = document.getElementById('logout');
logout.onclick = function() {
    document.location.href = 'LogIn.html'; 
}

var backToPage = document.getElementById('backToPage');
backToPage.onclick = function() {
    document.location.href = 'mainPage.html'; 
}