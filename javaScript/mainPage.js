var wishlist = document.getElementById('wishlist');
var logout = document.getElementById('logout');

// Help from Henrik - still need to implement data-json-object for button
class Fleamarket {
    constructor(name, location, date, image){
        this.name = name;
        this.location = location;
        this.date = date;
        this.image = image;
        this.button = "<input type='button' class='addToList' name='add to list' data-object='" + JSON.stringify(this) + "' value='click'></input>";
    }

    createHTML(){
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
    }
}


var list = [];
list.push(new Fleamarket("Flmrkt1", "Nørrebro", new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket("Flmrkt2", "Nørrebro", new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket("Flmrkt3", "Nørrebro", new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket("Flmrkt4", "Nørrebro", new Date(2018, 11, 24, 10, 33, 30, 0), null));

var html = "";
for(i=0; i < list.length; i++ ){
    html += list[i].createHTML();
}

table = document.getElementById("myTable");
tbody = table.getElementsByTagName("tbody");
tbody[0].innerHTML = html;


var buttons = document.getElementsByClassName("addToList");

// Get the list of wishes from localstorage and parse it from json to array
var wishes = [];


for(u=0; u < buttons.length; u++){
    buttons[u].addEventListener("click", function(e){

        // Push wish to array
        wishes.push(JSON.parse(this.dataset.object));
        var listString = JSON.stringify(wishes);
    localStorage.setItem("wishes", listString);

    // check if there are duplicates, etc.. 

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    }); 
    //buttons[u].addEventListener("mouseover", function(e){
     //   alert("CLEVER");
    //});
}

wishlist.onclick = function() {
    document.location.href = "Wishlist.html"; 
} 

logout.onclick = function() {
    document.location.href = "LogIn.html"; 
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.676098, lng: 12.568337},
    zoom: 8
    });
}

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

