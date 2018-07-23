'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// function displayInfo(args){
//     var output = '';
//     if(typeof args.name == 'string') {
//         output += "Name:"+args.name+"\n";
//     }
//     if(typeof args.age == 'number') {
//         output += "Age:"+args.age+"\n";
//     }
//     console.log(output);
// }

// displayInfo({
//     name: 'Nichilas',
//     age: 29
// });
// displayInfo({
//     name: "Greg"
// });


// var colors = ['red', 'blue', 'green'];
// console.log(colors.toString());
// console.log(colors.valueOf());
// console.log(colors);

// var person1 = {
//     toLocaleString : function () {
//         return "Nikolaos";
//     },
//     toString : function() {
//         return "Nicholas";
//     }
// };
// var person2 = {
//     toLocaleString : function () {
//         return "Grigorios";
//     },
//     toString : function(){
//         return "Greg";
//     }
// };

// var people = [person1, person2];
// console.log(people);
// console.log(people.toString());
// console.log(people.toLocaleString());

// var colors = ['red', 'green', 'blue'];
// console.log(colors);
// console.log(colors.join(','));
// console.log(colors.join('||'));

// var colors = new Array();
// var count = colors.push('red', 'green');
// console.log(colors);
// count = colors.push('black');
// console.log(colors);
// var item = colors.pop();
// console.log(item);
// console.log(colors);
// var items = colors.shift();
// console.log(items);
// console.log(colors);

// function compare(value1, value2){
//     if(value1 < value2){
//         return 1;
//     }else if(value1 > value2){
//         return -1;
//     }else {
//         return 0;
//     }
// }

// var values = [0, 1, 5, 10, 15];
// values.sort(compare);
// console.log(values);

// (function(){
//     return typeof arguments;
// })();
// var a = NaN;
// console.log(a!=NaN);

// function point(x, y){
//     if(typeof x === 'undefined'){
//         x=320;
//     }
//     if(typeof y === 'undefined'){
//         y=240;
//     }
//     return {x: x, y: y};
// }
// point(0,0);
// console.log(point());

// function toYMD(date){
//     var y = date.getYear() + 1900,
//         m = date.getMonth() + 1,
//         d = date.getDate();
//     return y
//         + '/' + (m < 10 ? '0' + m : m)
//         + '/' + (d < 10 ? '0' + d : d);
// }
// console.log((new Date()).getYear());

// function sandwichMaker(){
//     var magicIngredient = 'peanut butter';
//     function make(filling){
//         return magicIngredient + 'and' + filling;
//     }
//     return make;
// }
// var f = sandwichMaker();
// console.log(f('jelly'));

// function sandwichMaker(magicIngredient){
//     return function(filling){
//         return magicIngredient + ' and ' + filling;
//     };
// };
// var f = sandwichMaker('a');
// console.log(f('b'));

// function box(){
//     var val = undefined;
//     return{
//         set: function(newVal) { val = newVal;},
//         get: function() { return val;},
//         type: function() { return typeof val;}
//     };
// }
// var b = box();

// function warpElements(a){
//     var result = [];
//     for(var i =0, n=a.length; i<n; i++){
//         (function(){
//             var j = i;
//             result[i] = function(){
//                 return a[j];
//             };
//         })();
//     }
//     return result;
// }

var a = ['1', '2', '3', '1', '3'];
var b = new Set(a);
console.log([].concat(_toConsumableArray(b)));
console.log([].concat(_toConsumableArray(b)).toLocaleString());