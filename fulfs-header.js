/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   25 June 2017
; Modified By: <Your name>
; Author: Professor Krasso
; Date:   28 October 2020
; Modified By: Perry Fulfs
; Description: Displays a formatted header
===========================================
*/

/*
Params: firstName, lastName, assignment
Response: output
Description: Returns a well-formatted string header
*/

exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\n' +
	new Date().toLocaleDateString('en-US') + "\n"

	return output

}
