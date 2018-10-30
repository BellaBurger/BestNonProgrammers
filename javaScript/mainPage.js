// Help from Henrik - Fleamarket created as class
class Fleamarket {
    constructor(name, location, lat, lng, date, image){
        this.name = name;
        this.location = location;
        this.lat = lat;
        this.lng = lng;
        this.date = date;
        this.image = image;
        this.button = "<input type='button' class='addToList' name='add to list' data-object='" + JSON.stringify(this) + "' value='click'></input>";
    }
//This function creates a row in table in html document
    createHTML(){
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
    }

// This function creats a marker in te map for each fleamarket
    createMarker (){
        return new google.maps.Marker({position: this.lat + "," + this.lng, map: map})
    }
}

//new Fleamarkets pushed to array 
var list = [];
list.push(new Fleamarket("Flmrkt1", "Nørrebro", 55.6918268, 12.549271207226749, new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket("Flmrkt2", "Sydhavn", 55.654884, 12.537608, new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket("Flmrkt3", "Frederiksberg", 55.675378, 12.528474, new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket("Flmrkt4", "Valby", 55.666290, 12.514340, new Date(2018, 11, 24, 10, 33, 30, 0), null));
//for every object in the array the function creatHTML is called
var html = "";
for(i=0; i < list.length; i++ ){
    html += list[i].createHTML();
}

// The table body will contain the html plus objects that were run by the createHTML function
table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;


var buttons = document.getElementsByClassName('addToList');

// Get the list of wishes from localstorage and parse it from json to array
var wishes = [];

for(u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e){

        // Push wish to array
        wishes.push(JSON.parse(this.dataset.object));
        var listString = JSON.stringify(wishes);
        localStorage.setItem('wishes', listString);

    // check if there are duplicates, etc.. 

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    }); 
    //buttons[u].addEventListener("mouseover", function(e){
     //   alert("CLEVER");
    //});
}

var wishlist = document.getElementById('wishlist');
wishlist.onclick = function() {
    document.location.href = 'Wishlist.html'; 
} 

var logout = document.getElementById('logout');
logout.onclick = function() {
    document.location.href = 'LogIn.html'; 
}

var map;
function initMap() {
    var cph = {lat: 55.676098, lng: 12.568337}
    var nrbr = {lat: 55.6918268, lng: 12.549271207226749}
    var shvn = {lat: 55.654884, lng: 12.537608}
    var fbrg = {lat:55.675378, lng: 12.528474}
    var vlb = {lat: 55.666290, lng: 12.514340}
    map = new google.maps.Map(document.getElementById('map'), {
    center: cph,
    zoom: 8
    });
    var marker1 = new google.maps.Marker({position: nrbr, map: map});
    var marker2 = new google.maps.Marker({position: shvn, map: map});
    var marker3 = new google.maps.Marker({position: fbrg, map: map});
    var marker4 = new google.maps.Marker({position: vlb, map: map});
    //return displayMarkers
}
    /*
    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = list.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });
}

  var displayMarkers = function(){
      for(y=0; y < list.length; y++ ){
     list[y].createMarker();
    }
  }
console.log()
*/

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
  }

