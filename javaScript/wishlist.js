//Display what's in the local storage
//console.log(localStorage);
// Retrieve information with key "wishes" from local storage and change it back into an array of objects with parse

var listItems = [];
listItems.push(JSON.parse(localStorage.getItem("wishes")));
console.log(listItems);


function createHTML(){
  return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
}

// ISSUE : listItmes not a function - do I have to assign var listItems to a class ( see mainPage)?
var html = "";
for(i=0; i < listItems.length; i++ ){
    html += "<tr><td>"+ listItems[i].name + "</td><td>" + listItems[i].location + "</td><td>" + listItems[i].date + "</td><td>" + listItems[i].button + "</td></tr>";
};
console.log(html);

table = document.getElementById('myTable');
tbody = table.getElementsByTagName('tbody');
tbody[0].innerHTML = html;


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
