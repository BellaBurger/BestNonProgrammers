var storedWishes = JSON.parse(localStorage.getItem('wishes'));
console.log(storedWishes);

class Fleamarket {
    constructor(name, location, date, image){
        this.name = name;
        this.location = location;
        this.date = date;
        this.image = image;
        //this.button = "<input type='button' class='addToList' name='add to list' data-object='" + JSON.stringify(this) + "' value='click'></input>";
    }

    createHTML(){
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
    }
}


var list = [];
for(i=0; i < storedWishes.length; i++){
list.push(new Fleamarket(storedWishes[i]));
}
console.log(list);

var html = "";
for(i=0; i < list.length; i++ ){
    html += list[i].createHTML();
}

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