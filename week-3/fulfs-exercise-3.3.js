/*
============================================
; Title: Exercise 3.3
; Author: Richard Krasso
; Date: 21 Janruary 2021
; Modified By: Perry Fulfs
; Description: The Singleton Pattern
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 3.3")); // updated content with actual name & assignment name

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function(){ // get instance from function  
    var instance;
    function createInstance(){
        var postgresDatabase = new Object("Database instance initialized!"); // constructor looking for values
        return postgresDatabase;
    }

    return {
        getInstance:function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }

})();


function databaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance(); // calls to database function
    var postgres = DatabaseSingleton.getInstance(); // calls to database function
    console.log("Same database instance? %s ", oracle === postgres); // 
}

databaseSingletonTest();


// end program