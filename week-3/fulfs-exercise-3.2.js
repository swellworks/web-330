/*
============================================
; Title: Exercise 3.2
; Author: Richard Krasso
; Date: 20 Janruary 2021
; Modified By: Perry Fulfs
; Description: The  Factory Pattern
;===========================================
*/ 

var header = require('../fulfs-header.js'); // added file from root directory

console.log(header.display("Perry", "Fulfs", "Exercise 3.2")); // updated content with actual name & assignment name

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || "5.7"
}

function Oracle(properties) {
    this.username = properties.username || "admin"; //  property username & parameter username
    this.password = properties.password || "o-s3cret"; //  property password & parameter password
    this.server = properties.server || 'localhost:5454'; // property server & parameter server
    this.version = properties.version || '10g' // property version & parameter version 
}

function Informix(properties) {
    this.username = properties.username || 'admin'; // property username & parameter username 
    this.password = properties.password || 'in-s3cret'; // property password & parameter password 
    this.server = properties.server || 'localhost:3030'; // property server & parameter server 
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql'){
        this.databaseClass = MySql;
    }
// create if statemnent for Oracle & Informix
    if (properties.databaseType === 'Oracle') {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType == 'Informix') {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory(); // create instance that makes Oracle
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle', // add property strings for database, username, password
    username: 'admin',
    password: 'admin', 
});

var informixFactory = new DatabaseFactory(); // create instance that makes Informix
var informix = informixFactory.createDatabase({
    databaseType: 'Informix', // add property strings for database, username, password
    username: 'admin', 
    password: 'password'
});

console.log(oracle);
console.log(informix);




// end program