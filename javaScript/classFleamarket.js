class Fleamarket {
    constructor(userID, name, location, lat, lng, date, image){
        this.id = userID;
        this.name = name;
        this.location = location;
        this.lat = lat;
        this.lng = lng;
        this.date = date;
        this.image = image;
        
    }

// Fleamarket's userID is always the current User's email. When pushed to localStorage, attributed UserID is of course also pushed to local Storage
// When going to the wishlist, only display the fleamarkets in the local storage with the current UserID.
// also when checking if wishlist is already in the local storage, only check the fleamarkets in local storage with the User ID


//This function creates a row in table in html document - I am missing a function... ??
    createHTML(userEvents){
// loop through userEvents, if user has Event then display this note other this button 
      
            var storedWishes;
            var button = "<input type='button' class='addToList' name='add to list' data-object='" + JSON.stringify(this) + "' value='click' id='click'></input>";
            var note = "<input type='button' class='added' name='added to list' data-object='" + JSON.stringify(this) + "' value='added' id='click'></input>";
            if (localStorage.getItem('wishes') == null) {

                storedWishes = []
                // if local storage wishes not empty, set var wishes to local storage
                } else { 
                storedWishes = JSON.parse(localStorage.getItem('wishes'))
            } 

            var currentUser = JSON.parse(localStorage.getItem('currentUser'));

            var wishlist = [];
            
            for(var i=0; i < storedWishes.length; i++){
                    if (storedWishes[i].id[0].userName == currentUser[0].userName) {
                        console.log('if condition true')
                    wishlist.push(new Wish(storedWishes[i].name, storedWishes[i].location, new Date(storedWishes[i].date),storedWishes[i].image));
            }}

            var display = button;
            for (var k=0; k < wishlist.length; k++) {
                console.log(this);
                if (this.name == wishlist[k].name){
                     display = note;
                     { break; }
                } else {
                    display = button
                }
            }
        
        
        /*for(u=0; u < buttons.length; u++){
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
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + display + "</td></tr>";
    }
}