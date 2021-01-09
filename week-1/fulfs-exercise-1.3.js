/*
============================================
; Title: Exercise 1.3
; Author: Richard Krasso
; Date: 08 Janruary 2021
; Modified By: Perry Fulfs
; Description: Classes refresher - define classes in JavaScript
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 1.3")); // updated content with actual name & assignment name

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    // get info on phone
    this.getPrice = function()
    {
        return this.price;
    }

    this .getModel = function()
    {
        return this.model;
    }

    this.getDetails = function()
    {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + 
            "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}

var cellPhone = new CellPhone("Apple", "iPhone X", "Space Gray", "599.99");
console.log(cellPhone.getDetails());

// end program


