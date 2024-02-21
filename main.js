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

// for (var i = 100; i > 0; i += 5){
//     console.log(i);
// } 

/*
Array methods:
for Each()
every()
some()
find()
filter()
map()
reduce()
*/

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 250
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     }
// ];

// courses.forEach(function(course, index) {
//     console.log(index, course);
// });


// var isFree = courses.every(function(course, index){
//     console.log(index);
//     return course.coin === 0;
// });
// console.log(isFree);

// var isFree = courses.some(function(course, index){
//     return course.coin === 0;
// });
// console.log(isFree);

// var course = courses.find(function(course, index){
//     return course.name === 'Ruby';
// }); (chả về chỉ một phần tử)

// console.log(course);

// var ListCourses = courses.filter(function(course, index){
//     return course.coin === 0;
// }); (chả về một hoặc nhiều phần)

// console.log(ListCourses);
// function courseHandler(course, index, originArray){
//     //console.log(course);
//     // return {
//     //     id: course.id,
//     //     name: `Khoa hoc: ${course.name}`,
//     //     coin: course.coin,
//     //     coinText: `Gia: ${course.coin}`,
//     //     index: index,
//     //     originArray: originArray,
//     // };
//     return`<h2>${course.name}</h2>`;
// }

// var newCourses = courses.map(courseHandler);

// console.log(newCourses,join(''));

// 1. Dễ hiểu
// 2. Ngắn gọn
// 3. Hiệu năng

// // Biến lưu chữ
// var totalCoin = 0;

// // Lặp qua các phần tử
// for (var course of courses){

//     // Thực hiện việc lưu trữ
//     totalCoin += course.coin;
// }

// console.log(totalCoin);

// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {

//     i++;

//     var total = accumulator + currentValue.coin;

//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ': currentValue.coin,
//         'Tích trữ được: ': total
//     });

//     return accumulator + currentValue.coin;
// }

// var totalCoin = courses.reduce(coinHandler, 0);// initial value

// console.log(totalCoin);

// // Viết gọn hơn
// var totalCoin = courses.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.coin;
// }, 0);
// console.log(totalCoin); 

// var i = 0;

// var totalCoin = courses.reduce(function(total, course){
//     i++;

//     // console.log(i, total, course);

//     return total + courses.coin;
// }, 0);// intial value

// console.log(totalCoin);

// var numbers = [250, 200, 250, 400, 500];

// var totalCoin = numbers.reduce(function(total, numbers){
//     return total + numbers;
// }, 0);

// console.log(totalCoin);


// Flat - "làm phẳng mảng từ Depth array - "Mnagr sâu "
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);

// }, []);

// // console.log(flatArray);


// // Lấy ra các khóa học đưa vào 1 mảng mới
// var topics = [
//     {
//         topics: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             },
//         ]
//     },
//     {
//         topics: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "NodeJS"
//             },
//         ]
//     },
// ];

// var newCourses = topics.reduce(function(courses, topic){
//     return courses.concat(topic.courses);
// }, []);

// console.log(newCourses);


// var html = newCourses.map(function(course){
//     return`
//     <div>
//         <h2>${course.title}</h2>
//         <p>ID: ${course.id}<p>
//     </div>    
//     `;
// });

// console.log(html.join(''));


// includes method

// var title = 'Responsive wed design'; (dạng chuỗi)

// console.log(title.includes('Responsive', 0));

// var courses = ['Javascript','PHP', 'Dart']; (dạng mảng)

// // 3 + -1
// console.log(courses.includes('Javascript'));

/*

Math object

- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
 */
/*var random = Math.floor(Math.random() * 100);

// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ];

// console.log(bonus[random]);

if (random < 5){
    console.log('Đập thẻ thành công!');
}*/


// console.log(Math.max(-100, 1, 90, 50, 40));

/*
* Callback?

- Là hàm (function) được truyền qua đối số 
- khi gọi hàm khác 

- 1. Là hàm 
- 2. Được truyền qua đối số
*/

// function myFunction(param){
//     // if(typeof param === 'function'){
//         param('Học lập trình');
//     // }
//     // console.log(typeof param);
// }

// function myCallback(value){
//     console.log('Value: ', value);
// }

// myCallback(123);

// myFunction(myCallback);

// Callback - Phần 2

// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)
/*
Array.prototype.map2 = function(Callback){
    var output =[], arrayLength = this.length;

   for(var i = 0; i < arrayLength; ++i){
    var result = Callback(this[i], i);
    output.push(result);
   }
   return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.map2(function(course, index){
    return`<h2>${course}</h2>`;
});
console.log(htmls.join(''));
*/
// courses.map(function(course){
//     console.log(course);
// });

// function myFunction(course) {
//     console.log(course);
// }

// courses.map(myFunction);

// var htmls = courses.map2(function(course){
//     return`<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

//*** */ forEach, find, filter, some, every, reduce

// var courses = new Array(10, 12);

// courses.push('Javascript', 'PHP');

// console.log(courses);

// // console.log(courses);

// for (var index in courses) {
//     console.log(courses[index]);
// }

// forEach2
// Oject prototype
// for in

// Array.prototype.forEach2 = function(Callback){
//     for(var index in this){
//         if (this.hasOwnProperty(index)){
//             Callback(this[index], index, this);
//         }
//     }
// }


//  var courses = new Array(100);

//  courses.push('Javascript', 'Ruby');

// //  console.log(courses);

// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array);
//  });

/**  filter2*/

// Array.prototype.filter2 = function(callback){
//     var output = [];

//     for(var index in this) {
//         if (this.has0wnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if(result) {
//                 output.push(this[index])
//             }
//         }
//     }
//     return output;
// } 

/** some2 */
// Array.prototype.some2 = function(callback){
//     var output = false;

//     for(var index in this){
//         if(this.has0wnProperty(index)){
//             if(callback(this[index], index, this)){
//                 output = true;
//                 break;
//             };
//          }
//     }
//     return output;
// }

/**every: true / false */
// Array.prototype.every2 - function(callback) {
//     var output = true;

//     for (var index in this) {
//         if (this.has0wnProperty(index)){
//             var result = callback(this[index], index)
//                 if (!result) {
//                     output = false;
//                     break;
//             }
//         }
//     }
//     return output;
// }

/*
var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];
*/

/**filter2 */
// var filterCourses = courses.filter2(function(course, index, array){
//     // console.log(course, index, array);
//     return course.coin > 700;
// });

// console.log(filterCourses);

/**some2 : true false*/


// var result = courses.some2(function(course, index, array){
//     return course.isFinish;
// });

// console.log(result)

/**every: true / false */

// var everyCourses = courses.every2(function(course, index, array){
//     return course.coin > 500; 
// });

// console.log(everyCourses);


// var array = ['a', 'b', 'c', 'a', 'b', 'c'];

// console.log([...(new Set(array))]);

/**de Quy */
// 1. Xác định được điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

// 3 * 2 * 1 = 6
// 6 * 5 * ... * 1 = 720

// function giaithua(number) {
// //     var output = 1;
// //     for (var i = number; i > 0; i--){
// //         output = output * i;
// //     }
// //     return output;
//        if(number > 0){
//           return number * giaithua(number - 1);
//        }
//        return 1;
// }

// console.log(giaithua(3));

// function countDown(num) {
//     if(num < 0){

//         // loop
//         console.log(num);

//         return countDown(num - 1);
//     }
//     return num;
// }

// countDown(10);

/*function loop(start, end, cb) {
    if(start < end){
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length, function(index) {
    console.log(array[index]);
}); */

// HTML DOM

// có 3 thành phần

/**
 * 1. Element: ID, class, tag name, CSS selector, HTML collection
 * 2. Atribute
 * 3. Text
 */

// Node

// ---------------------------------------------

// Javascript: Browser | Server (NodeJS)

// Application programming interface

// Browser: HTML -> DOM -> DOM API, WEB AP
///**Element */
/*Id */
// var headingNode = document.getElementById('heading');

// console.log(headingNode);
// /*class */
// var headingNodes = document.getElementsByClassName('heading');

// console.log(headingNodes);
// /*Tag name */
// var headingNodes = document.getElementsByTagName('p');

// console.log(headingNodes);

// /*CSS Selector */
// var headingNodes = document.querySelectorAll('.box .heading-2')

// console.log(headingNodes[0]);

/*HTML collection */
// console.log(document.forms.testFrom);
// console.log(document.forms['form-2']);
// console.log(document.anchors);
/*Cách 2 */
// var boxNode = document.querySelector('.box-1');

// // Công việc 1: sử dụng tới `boxNode`
// //...
// console.log(boxNode);

// // Công việc 2: sử dụng tới các li elements
// // là con của '.box-1'

// console.log(boxNode.getElementsByTagName('li'));
// console.log(boxNode.querySelector('p'));


///*DOM Attribute  */

var headingElement = document.querySelector('h1');

// headingElement.setAttribute('data', 'test data');
headingElement.title = 'Title test';

// console.log(headingElement.getAttribute('class'));
alert(headingElement.title);
