var storedWishes = JSON.parse(localStorage.getItem('wishes'));
console.log(storedWishes);

class Fleamarket {
    constructor(name, location, date, image){
        this.name = name;
        this.location = location;
        this.date = date;
        this.image = image;
        this.button = "<input type='button' class='removeFromList' name='remove from list' data-object='" + JSON.stringify(this) + "' value='Remove from Wishlist'></input>";
    }

    createHTML(){
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
    }
}


var list = [];
for(i=0; i < storedWishes.length; i++){
    list.push(new Fleamarket(storedWishes[i].name, storedWishes[i].location, new Date(storedWishes[i].date),storedWishes[i].image));
}
console.log(list);

var html = "";
for(i=0; i < list.length; i++ ){
    html += list[i].createHTML();
}

table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;


var buttons = document.getElementsByClassName('removeFromList');

// Get the list of wishes from localstorage, CHANGE CODE SO FLEAMARKET IS DELETED FROM LOCAL STORAGE
var wishes = [];

//or(u=0; u < buttons.length; u++){
    //buttons[u].addEventListener('click', function(e){
        //if (JSON.parse(this.dataset.object) === localStorage.getItem('wishes[i]');
        
       // localStorage.removeItem(JSON.parse(localStorage.getItem('wishes')));

 /*       
        // Push wish to array
        wishes.push(JSON.parse(this.dataset.object));
        var listString = JSON.stringify(wishes);
        localStorage.setItem('wishes', listString);

    // check if there are duplicates, etc.. 

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    }); */

    
    //buttons[u].addEventListener("mouseover", function(e){
     //   alert("CLEVER");
    //});
//}



//Search function for wishlist
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  };

var logout = document.getElementById('logout');
logout.onclick = function() {
    document.location.href = 'LogIn.html'; 
}

var backToPage = document.getElementById('backToPage');
backToPage.onclick = function() {
    document.location.href = 'mainPage.html'; 
}