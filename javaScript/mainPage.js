var userID = JSON.parse(localStorage.getItem('currentUser'));

//New Fleamarkets created and pushed to list (List is an Array??)
var list = [];
list.push(new Fleamarket(userID, "Books & Bags", "Nørrebro", 55.6918268, 12.549271207226749, new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket(userID, "Vintage Jewelry", "Sydhavn", 55.654884, 12.537608, new Date(2018, 11, 25, 10, 33, 30, 0), null));
list.push(new Fleamarket(userID, "Coats & Mittons", "Frederiksberg", 55.675378, 12.528474, new Date(2018, 11, 26, 10, 33, 30, 0), null));
list.push(new Fleamarket(userID, "Designer Classics", "Valby", 55.666290, 12.514340, new Date(2018, 11, 27, 10, 33, 30, 0), null));

//for every object in the array the function createHTML is called
var html = "";

//when new fleamarket is created, an html readable format is created as array (userEvents) and added to the html string (above)
var userEvents = [];

for(i=0; i < list.length; i++ ){
    html += list[i].createHTML(userEvents);
}

// The table body will contain the html string plus objects that were added by the createHTML function
table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;

// Create variable the retrieves button from every fleamarket object
var buttons = document.getElementsByClassName('addToList');

// Create wishes variable. Get the wishes from local storage and parse it from json to array. If wishes in local Storage is empty, use empty array for wishes. 
var wishes;
if (localStorage.getItem('wishes') == null) { 
    wishes = []
    // if local storage wishes not empty, set var wishes to local storage
    } else { 
    wishes = JSON.parse(localStorage.getItem('wishes'))
} 

//Add event listener for click on event. 
for(u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e){
        console.log(this);
        for (j=0; j< wishes.length; j++) {
            //Alert ("already in wishlist") if fleamarket stored in local storage under the current user's user ID
            if (JSON.parse(this.dataset.object).name == wishes[j].name && userID[0].userName == wishes[j].id[0].userName){
                alert ("already in wishlist");
                return
            } 
        }
    

        // Push button information to wishes array and save to local storage
        wishes.push(JSON.parse(this.dataset.object));
        var listString = JSON.stringify(wishes);
        localStorage.setItem('wishes', listString);
        window.location.reload();

    }); 
}
//Forward to whishlist html when button is clicked
var wishlist = document.getElementById('wishlist');
wishlist.onclick = function() {
    document.location.href = 'Wishlist.html'; 
} 
//Forward to LogIn html when button is clicked
var logout = document.getElementById('logout');
logout.onclick = function() {
    document.location.href = 'LogIn.html'; 
}

// Create markers for all fleamarkets
var markers = [];

// Create function that creates markers. Marker includes fleamarket's information from the list and push to markers array
var createMarker = function(){
    markers.push(new Marker(list[m].name, list[m].lat, list[m].lng)) 
    } 
// Create a loop to create marker for every fleamarket
for (m=0; m<list.length; m++ ){
    createMarker() 
    } 

//initialize map
var map;
var cph = {lat: 55.676098, lng: 12.568337}
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: cph,
        zoom: 8
    });
    //Loop to display markers on map
    for (n=0; n < markers.length; n++){
        new google.maps.Marker({position: {lat: markers[n].lat, lng: markers[n].lng},map: map})
    }
}

//Implement search function that loops through table rows
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