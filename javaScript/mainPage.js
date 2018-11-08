console.log(localStorage);
var userID = JSON.parse(localStorage.getItem('currentUser'));
console.log(userID);

// Help from Henrik - Fleamarket created as class
class Fleamarket {
    constructor(userID, name, location, lat, lng, date, image){
        this.id = userID;
        this.name = name;
        this.location = location;
        this.lat = lat;
        this.lng = lng;
        this.date = date;
        this.image = image;
        this.button = "<input type='button' class='addToList' name='add to list' data-object='" + JSON.stringify(this) + "' value='click' id='click'></input>";
        //this.note = "<input type='button' class='added' name='added to list' data-object='" + JSON.stringify(this) + "' value='added' id='click'></input>";
    }

// Fleamarket's userID is always the current User's email. When pushed to localStorage, attributed UserID is of course also pushed to local Storage
// When going to the wishlist, only display the fleamarkets in the local storage with the current UserID.
// also when checking if wishlist is already in the local storage, only check the fleamarkets in local storage with the User ID


//This function creates a row in table in html document - I am missing a function... ??
    createHTML(userEvents){
// loop through userEvents, if user has Event then display this note other this button 
      /*for(b = 0; b < list.length; b++){
            for (k<0; k < wishes.length; k++) {
                console.log(this);
                if (JSON.parse(this.dataset.object).name == wishes[k].name){
                     display = this.note;
                } else {
                    disply = this.button
                }
                     
            }
        }
        
        for(u=0; u < buttons.length; u++){
            buttons[u].addEventListener('click', function(e){
                console.log(this);
                for (j=0; j< wishes.length; j++) {
                    if (JSON.parse(this.dataset.object).name == wishes[j].name){
                        display = this.note
                    } else {
                        display = this.button
                    }
                
                    } 
                }
        
                // Save list to localstorage, but remember to parse it to json first
                //console.log(this);
            ); }*/
        //if fleamarket is in storage this.button = document.getElementIdby("Added to Wishlist")
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
    }
}


//new Fleamarkets pushed to array 
var list = [];
list.push(new Fleamarket(userID, "Nørrebro Loppemarked", "Nørrebro", 55.6918268, 12.549271207226749, new Date(2018, 11, 24, 10, 33, 30, 0), null));
list.push(new Fleamarket(userID, "Sydhavn Fleamarket", "Sydhavn", 55.654884, 12.537608, new Date(2018, 11, 25, 10, 33, 30, 0), null));
list.push(new Fleamarket(userID, "Frederiksberg Market", "Frederiksberg", 55.675378, 12.528474, new Date(2018, 11, 26, 10, 33, 30, 0), null));
list.push(new Fleamarket(userID, "Valby Market", "Valby", 55.666290, 12.514340, new Date(2018, 11, 27, 10, 33, 30, 0), null));
console.log(list)
//for every object in the array the function creatHTML is called
var html = "";
//when button is clicked add event to userEvents and store in local storage
var userEvents = [];

for(i=0; i < list.length; i++ ){
    html += list[i].createHTML(userEvents);
}

// The table body will contain the html plus objects that were run by the createHTML function
table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;


var buttons = document.getElementsByClassName('addToList');

// Get the list of wishes from localstorage and parse it from json to array. If local Storage is empty use empty array, 
var wishes;
if (localStorage.getItem('wishes') == null) { 
    wishes = []
    } else { 
    wishes = JSON.parse(localStorage.getItem('wishes'))
} 
console.log(wishes)

//TBD disable button if fleamarket already in local storage
for(s=0; s<list.length; s++){
    for(t=0; t < wishes.length; t++) {
        if (list[s].name == wishes[t].name && wishes[t].id.userName == userID[0].userName){
            document.getElementById("click").disabled = true;
           
        }
    }
}
console.log("is it working")

/*buttons.forEach(function(button){
    button.disabled = ture
})*/

//Alert ("already in wishlist") if fleamarket stored in local storage under the current user's user ID
for(u=0; u < buttons.length; u++){
    buttons[u].addEventListener('click', function(e){
        console.log(this);
        for (j=0; j< wishes.length; j++) {
            if (JSON.parse(this.dataset.object).name == wishes[j].name && userID[0].userName == wishes[j].id[0].userName){
                alert ("already in wishlist");
                return
            } 
        }

        /*for(u=0; u < buttons.length; u++){
            for (j=0; j< wishes.length; j++) {
                if (JSON.parse(this.dataset.object).name == wishes[j].name && userID[0].userName == wishes[j].id[0].userName){
                    document.getElementById("click").value = "added to Wishlist"
                    document.getElementById("added to Wishlist").disabled = true;
                    return 
                }
            } 
        }*/

        // Push wish to array and change button value
        wishes.push(JSON.parse(this.dataset.object));
        var listString = JSON.stringify(wishes);
        localStorage.setItem('wishes', listString);
        
       
       //document.getElementById("click").value = "added to Wishlist";

        // Save list to localstorage, but remember to parse it to json first
        //console.log(this);
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
// Create a loop to retrieve lat and lng (coordinates) from every fleamarket

// Create markers for all fleamarkets
var markers = [];
class marker {
    constructor(name, lat, lng){
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}
// function to create variable that includes information for map 
var createMarker = function(){
    markers.push(new marker(list[m].name, list[m].lat, list[m].lng)) 
    } 
for (m=0; m<list.length; m++ ){
    createMarker() 
    } 
console.log(markers);

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
    //td = tabel.getElementsByTagName('td');

    
    // Loop through all table rows, and hide those who don't match the search query
    /*for (i = 0; i < tr.length; i++) {
        //td = tr[i].getElementsByTagName("td")[0]; // This code only get the frist "TD" element
        tds = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            td = tds[j];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";*/
    
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

// Compare if Fleamarket is already in the localStorage. If yes, disable button to prevent duplicates.

//var storedWishes = JSON.parse(localStorage.getItem('wishes'));


//if (list[i] == storedWishes[i]) {
//    document.getElementById("click").disabled = true;
//
