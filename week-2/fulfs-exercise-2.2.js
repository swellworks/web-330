/*
============================================
; Title: Exercise 2.2
; Author: Richard Krasso
; Date: 11 Janruary 2021
; Modified By: Perry Fulfs
; Description: prototypes
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 2.2")); // updated content with actual name & assignment name

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person = // create an object
{
    getAge: function () // create an age function
    {
        return this.age; // constructor of age 
    }
};

var robert = Object.create(person, {  // this is the object constructor
    "age": // add a property for age
    {
        "value": "46"
    },
    "fullname": // add a property for name
    {
        "value": "Robert Schumann"
    }
});

robert.getAge(); // call the getAge for robert

console.log("The person's full name is '%s'", robert.fullname);
console.log("The person's age is '%s'", robert.age);

// end program

