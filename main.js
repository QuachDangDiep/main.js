/**
 function writeLog(){
     var myString = ''
     for(var param of arguments) {
         myString += `${param} - `
     }
     console.log(myString)
 }
 
 writeLog('log 1', 'log 2', 'log 3');
 */

 // Return trong ham - javascript co ban
//  var isConfirm = confirm('Message?');

//  console.log(isConfirm);

// function cong(a, b){
//     return a.toString() + b.toString();
// }

// var result = cong(2, 8);

// console.log(result);

/*
Các loại function

1. Declaration function
2. Expression function
3. Arrow function

 */

// function showMessage() {
//     console.log('Declaration function');
// }

// var showMessage2 = function testName() {
//     console.log('Expression function');
// }

// var showMessage3 = function testName() {
//     console.log('Arrow function');
// }

// showMessage();

// showMessage2();

// showMessage3();                 

// setTimeout(function testName() {

// });

// var myObject = {
//     myFunction: function testName(){

//     }
// }


//Polyfill ? (30)
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) { start =0; }
        return this.indexOf(search,start) !== -1;
    };
}
