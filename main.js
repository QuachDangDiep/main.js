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
// if (!String.prototype.includes) {
//     String.prototype.includes = function(search, start) {
//         'use strict';

//         if (search instanceof RegExp) {
//             throw TypeError('first argument must not be a RegExp');
//         }
//         if (start === undefined) { start =0; }
//         return this.indexOf(search,start) !== -1;
//     };
// }

// For loop
// var myArray = [
//     'Javascript',
//     'PHP',
//     'Java',
//     'Dart',
//     'Ruby',
//     'Python'
// ];

// // console.log(myArray[0]);
// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

// For/in loop  1
 
// var myInfo = {
//     name: 'Dang Diep',
//     age: 18,
//     address: 'Bac Ninh, VN'
// };

// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

// var languages = [ 2
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Java'
// ];

// for (var key in languages) {
//     console.log(languages[key]);
// }

// var languages = 'Javascript';  3

// for (var key in languages) {
//     console.log(languages[key]);
// }

// For/of loop

// var languages = [ 1 mang
//     'Javascript',
//     'PHP',
//     'Java'
// ];

// for (var value of languages) {
//     console.log(value);
// }

// var languages = 'Javascript'; 2 chuoi

// for (var value of languages) {
//     console.log(value);
// }

// var myInfo = {
//     name: 'Dang Diep',
//     age: '18',
//     address: 'Bac Ninh, VN'
// };

// // console.log(Object.values(myInfo));
// // console.log(Object.keys(myInfo))

// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }


// while loop

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// var i = 0;

// while (i < myArray.length) {
//     console.log(myArray[i]);
//     i++;
// }

// do/while loop

// var i = 0;
// var isSuccess = false;

// do{
//    i++;

//    console.log('Nạp thẻ lần' + i);

//    // Thành công
//    if(false) {
//       isSuccess = true;
//    }

// } while (!isSuccess && i <= 3);

// Break & Continue in Loop

// for (var i = 0; i < 10; i++) {

//     /* if(i%2 !== 0){
//         continue;
//     }
// */
//     console.log(i);

//     /* if(i >= 5){
//         break;
//     }
// */    
// }

// Vòng lặp lồng nhau - Nested loop

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (var i = 0; i < myArray.length; i++){
//     for(var j = 0; j < myArray[i].length; j++){
//         console.log(myArray[i][j]);
//     }
// }

// Loop

// for (var i = 100; i > 0; i--) {
//     console.log(i);
// }

// for (var i = 0; i <= 100; i += 5){
//     console.log(i);
// }

for (var i = 100; i > 0; i += 5){
    console.log(i);
} 