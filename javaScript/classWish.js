class Wish {
    constructor(name, location, date, image, /*fleamarketID*/){
        this.name = name;
        this.location = location;
        this.date = date;
        this.image = image;
        //this.fleamarketID = fleamarketID;
        this.button = "<input type='button' class='removeFromList' name='remove from list' data-object='" + JSON.stringify(this) + "' value='Remove from Wishlist'></input>";
    }

    createHTML(){
        return "<tr><td>"+ this.name + "</td><td>" + this.location + "</td><td>" + this.date + "</td><td>" + this.button + "</td></tr>";
    }
}
