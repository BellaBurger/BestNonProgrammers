var wishlist = document.getElementById('wishlist');
var logout = document.getElementById("logout");

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
