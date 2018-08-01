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

// var a = [
//     '1',
//     '2',
//     '3',
//     '1',
//     '3'
// ];
// var b = new Set(a);
// console.log([...b].join('|'));
// console.log([...b].toLocaleString());
// //数组操作方法
// //new Set()//去重
// //join() 替换
// //push() 逐个添加到数组末尾
// //pop() 从数值末尾移除最后一项
// //shift() 移除第一项并返回该项
// //unshift() 能在数组前端添加任意个项并返回数组的长度----与pop()方法组合可以从相反的方向来模拟队列
// //reverse() 重排序
// //sort() 按升序排列
// //concat() 合并数组
// //slice() 截取数组
// //splice()  删除，插入和替换数组
// var colors = ['red', 'green', 'blue'];
// var removed = colors.splice(0,1);//删除第一项
// console.log(removed);//red 返回被删除的项
// console.log(colors);
// removed = colors.splice(1, 0, 'yellow', 'orange');//从位置1开始插入两项
// console.log(colors);
// console.log(removed);//返回一个空数组
// removed =colors.splice(1, 1, 'red', 'purple');//插入两项，删除一项，相当于用两项替换一项
// console.log(colors);
// console.log(removed);
// //数组位置方法 ---indexOf()和lastIndexOf()两种---接受2个参数（第一个为要查询的值，第二个位查询的开始位置）
// //indexOf() 从数组开头（位置0）开始向后查找
// //lastIndexOf() 从数组的末尾向前查找
// var number = [1,3,4,5,4,5,6,7,8];
// console.log(number.indexOf(3));//位置1处
// console.log(number.indexOf(4,3));//查询4从开头的第3个位置开始查询
// console.log(number.lastIndexOf(4));
// console.log(number.lastIndexOf(4,3));//查询4从末尾倒数第3个位置开始查询

// //迭代方法---共5个。每个方法都接受两个参数：要在每一项上运行的函数和（可选的）运行改函数的作用域对象---影响this的值。
// //every()
// //filter()
// //forEach()
// //map()
// //some()
// var numbers =  [1,2,3,4,5,4,3,2,1];
// var everyResult = numbers.every(function(item, index, array){
//     return (item > 2);
// });
// console.log(everyResult);//false
// var someResult = numbers.some(function(item, index, array){
//     return (item > 2);
// });
// console.log(someResult);//true
// var filterResult = numbers.filter(function(item, index, array){
//     return (item > 2);
// });
// console.log(filterResult);
// var mapResult = numbers.map(function(item, index, array){
//     return item * 2;
// });
// console.log(mapResult);

// //缩小方法---共2个 reduce()和reduceRight()
// //reduce() 从第一项开始
// var values = [1,2,3,4,5];
// var sum = values.reduce(function(prev, cur, index, array){
//     return prev + cur;
// });
// console.log(sum);
// //reduceRight() 与reduce()的方向相反，从最后一项开始
// var sumRight = values.reduceRight(function(prev, cur, index, array){
//     return prev + cur;
// });
// console.log(sumRight);


// //Date 类型
// var now = new Date();
// console.log(now);
// //Date.parse()
// var someDate = new Date(Date.parse("May 25, 2004"));
// console.log(now.valueOf());

// //RegExp类型

// //function 类型
// function creatComparisonFunction(propertyName){
//     return function(object1, object2){
//         var value1 = object1[propertyName];
//         var value2 = object2[propertyName];
//         if(value1 < value2){
//             return -1;
//         }else if(value1 > value2){
//             return 1;
//         }else{
//             return 0;
//         }
//     };
// }
// var data = [{name:"zanchary", age:28},{name:"Nicholas", age:29}];
// data.sort(creatComparisonFunction('name'));
// console.log(data[0].name);
// //函数的名字仅仅是一个包含指针的变量

// // function sum(num1, num2){
// //     num1 + num2;
// // }
// // function callSum(num1, num2){
// //     return sum.call(this, num1, num2);
// // }

// // console.log(callSum(10,10));

// //apply() call() bind()
//apply():调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法
//call():调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1, args2);即A对象调用B对象的方法
// //charAt() charCodeAt()
// var srtingValue = 'hello world';
// console.log(srtingValue.charAt(1));
// console.log(srtingValue.charCodeAt(1));
// //作为值得函数
// function callSomeFuction(someFuction, someArgument) {
//     return someFuction(someArgument);
// }
// function add10(num) {
//     return num + 10;
// }
// var result1 = callSomeFuction(add10, 10);
// console.log(result1);
// function getGreeting(name) {
//     return "Hello, " + name;
// }
// var result2 = callSomeFuction(getGreeting, "Nicholas");
// console.log(result2);

// //对象属性排序
// function createComparisonFunction(propertyName) {
//     return function(object1, object2) {
//         var value1 = object1[propertyName];
//         var value2 = object2[propertyName];
//         if (value1 < value2){
//             return -1;
//         }else if(value1 > value2){
//             return 1;
//         }else{
//             return 0;
//         }
//     };
// }

// var data = [{name: "Zaachary", age: 28}, {name: "Nicholas", age: 29}];
// data.sort(createComparisonFunction("name"));
// console.log(data[0].name);
// data.sort(createComparisonFunction("age"));
// console.log(data[0].name);

// //阶乘函数
// //往上加的阶乘
// var number = function(n) {
//     if(n === 1){
//         return 1;
//     }else{
//         product = 1;
//         for (let i = 1; i < n; i++) {
//             product *= i;
//         }
//         return product;
//     }
// }
// var d = number(5);
// console.log(d);
// //往下减的阶乘
// var del = function(n) {
//     if(n <= 1){
//         return 1;
//     }else{
//         return n * del(n - 1);
//     }
// }
// var data = del(6);
// console.log(data);
// //arguments.callee 防止改动函数名
// function factorial(num) {
//     if(num <= 1){
//         return 1;
//     }else{
//         return num * arguments.callee(num - 1);
//     }
// }
// console.log(factorial(5));
// var trueFactorial = factorial;
// factorial = function() {
//     return 0;
// };
// console.log(trueFactorial(5));
// console.log(factorial(5));

// function outer() {
//     inner();
// }
// function inner() {
//     console.log(inner.caller);
// }
// outer();

// //取最大值
// var values = [1, 2, 3, 4, 5, 6, 7, 8];
// var max = Math.max.apply(Math, values);
// console.log(max);
// //舍入方法
// // Math.ceil()向上舍入
// // Math.floor()向下舍入
// // Math.round() 四舍五入
// console.log(Math.ceil(23.5));
// console.log(Math.floor(21.1));
// console.log(Math.round(2.6));
// // Math.random()
// console.log(Math.random());
// //随机规则
// // 值 = Math.floor(Math.random() * 可能值得总数 + 第一个可能值)

// //1-10随机数
// console.log(Math.floor(Math.random() * 10 + 1));
// //2-10随机数
// console.log(Math.floor(Math.random() * 9 + 2));
// //用函数计算可能值得总数和第一个可能值
// function selectFrom(lowerValue, upperValue) {
//     var choices = upperValue - lowerValue + 1;
//     return Math.floor(Math.random() * choices + lowerValue);
// }
// var num_Math = selectFrom(2, 10);
// console.log(num_Math); //介于2和10之间（包括2和10）的一个数值
// //从数值中取一项
// var colors = ['red', 'green', 'blue', 'yellow', 'black', 'purple', 'brown'];
// var color = colors[selectFrom(0, colors.length - 1)];
// console.log(color);


// //第6章  面向对象的程序设计

// //6.1 理解对象
// var person = new Object();
// person.name = "lifeng";
// person.age = 27;
// person.job = "Front-end Engineer";
// person.sayName = function(){
//     console.log(this.name);
// }
// person.sayName();
// //对象字面量语法
// var person = {
//     name: 'lifeng',
//     age: 27,
//     job: 'Front-end Engineer',
//     sayName: function () {
//         console.log(this.name);
//     }
// };

// //1.数据属性
// // Configurable 表示是否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。默认为true
// // Enumerable 表示能否通过for-in循环返回属性。默认为true
// // Writable 表示能否修改属性的值。默认为true
// // Value 包含这个属性的值。默认为undefined
// // 修改属性默认的特性的方法 Object.defineProperty()
// var person = {};
// Object.defineProperty(person, 'name',{
//     writable: false,
//     value: 'feng'
// });
// console.log(person.name);
// person.name = 'li';
// console.log(person.name);
// //2.访问器属性
// // Configurable 表示是否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。默认为true
// // Enumerable 表示能否通过for-in循环返回属性。默认为true
// // Get 在读取属性时调用的函数。默认为undefined
// // Set 在写入属性时调用的函数。默认为undefined
// //定义方法 Object.defineProperty()
// var book = {
//     _year: 2017,
//     edition: 1
// };
// Object.defineProperty(book, 'year', {
//     get: function(){
//         return this._year;
//     },
//     set: function(newValue){
//         if(newValue > 2017) {
//             this._year = newValue;
//             this.edition += newValue - 2017;
//         }
//     }
// });
// book.year = 2018;
// console.log(book.edition);
// //定义多个属性的方法 Object.defineProperties()
// var book = {};
// Object.defineProperties(book, {
//     _year: {
//         value: 2017
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get: function() {
//             return this._year;
//         },
//         set: function(newValue) {
//             if(newValue > 2017) {
//                 this._year = newValue;
//                 this.edition += newValue - 2017;
//             }
//         }
//     }
// });
// //可以取得给定属性的描述符方法 Object.getOwnPropertyDescriptor()
// var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
// console.log(descriptor.value);
// console.log(descriptor.configurable);
// console.log(typeof descriptor.get);
// var descriptor = Object.getOwnPropertyDescriptor(book, 'year');
// console.log(descriptor.value);
// console.log(descriptor.configurable);
// console.log(typeof descriptor.get);

// //工厂模式
// function createPerson(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function () {
//         console.log(this.name);
//     }
// }
// var person1 = createPerson('lifeng', 27, 'Front-end Engineer');
// var person2 = createPerson('feng', 26, 'Doctor');
// //取对象的原型 getPrototypeOf()

// //hasOwnProperty()方法可以检测一个属性是存在实例中还是存在于原型中
// function Person() {
// }
// Person.prototype.name = 'lifeng';
// Person.prototype.age = 27;
// Person.prototype.job = 'Front-end Engineer';
// Person.prototype.sayName = function () {
//     console.log(this.name);
// };
// var person1 = new Person();
// var person2 = new Person();
// console.log(person1.hasOwnProperty('name'));
// person1.name = 'feng';
// console.log(person1.name);
// console.log(person1.hasOwnProperty('name'));
// console.log(person2.name);
// console.log(person2.hasOwnProperty('name'));
// delete person1.name;
// console.log(person1.name);
// console.log(person1.hasOwnProperty('name'));

// //Object.keys() 获取对象上所以可枚举的实例属性
// var keys = Object.keys(Person.prototype);
// console.log(keys);
// var p1 = new Person();
// p1.name = 'feng';
// p1.age = 22;
// var p1keys = Object.keys(p1);
// console.log(p1keys);
// var _keys = Object.getOwnPropertyNames(Person.prototype);
// console.log(_keys);
// //如果对constructor属性重要，写法如下
// function Person() {
// }
// Person.prototype = {
//     name: 'lifeng',
//     age: '27',
//     job: 'Front-end Engineer',
//     sayName: function () {
//         console.log(this.name);
//     }
// };
// //重设构造函数，只适合兼容ES5的浏览器
// Object.defineProperty(Person, 'constructor',{
//     enumerable: false,
//     value: Person
// });
//实例中的指针仅指向原型，而不指向构造函数
// function Person() {

// }
// var friend = new Person();
// Person.prototype = {
//     constructor: Person,
//     name: 'lifeng',
//     age: 27,
//     job: 'Front-end Engieer',
//     sayName: function () {
//         console.log(this.name);
//     }
// };
// friend.sayName();//报错

// //组合使用构造函数模式和原型模式
// // 构造函数用于定义实例属性，而原型模式用于定义方法和共享的属性
// // 具备各自的实例副本，也同时共享着对方法的引用，并节省了内存，还支持向构造函数传递参数
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.friends = ['Shelby', 'Court'];
// }
// Person.prototype = {
//     constructor: Person,
//     sayName: function () {
//         console.log(this.name);
//     }
// };
// var person1 = new Person('lifeng', 27, 'Front-end Engieer');
// var person2 = new Person('Greg', 22, 'Doctor');
// person1.friends.push('Van');
// console.log(person1.friends);
// console.log(person2.friends);
// console.log(person1.friends === person2.friends);
// console.log(person1.sayName === person2.sayName);

// //动态原型模式
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     if( typeof this.sayName != "function"){
//         Person.prototype.sayName = function () {
//             console.log(this.name);
//         }
//     }
// }
// var friend = new Person('lifeng', 27, 'Front-end Engieer');
// friend.sayName();
// //寄生构造函数模式
// function SpecialArray() {
//     //创建数组
//     var values = new Array();
//     //添加值
//     values.push.apply(values, arguments);
//     //添加方法
//     values.toPipedString = function () {
//         return this.join('|');
//     };
//     //返回数组
//     return values;
// }
// var colors = new SpecialArray('red', 'blue', 'green');
// console.log(colors.toPipedString());


// //继承（接口继承和实现继承）
// //接口继承只继承方法签名，而实现继承则继承实际的方法
// //然而，函数没有签名，在ECMAScript中无法实现接口继承。ECMAScript只支持实现继承，而且其实现继承主要是依靠原型链来实现的

// //----原型链
// function SuperType() {
//     this.property = true;
// }
// SuperType.prototype.getSuperValue = function () {
//     return this.property;
// };
// function SubType() {
//     this.subproperty = false;
// }
// //继承了SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// };
// var instance = new SubType();
// console.log(instance.getSuperValue());
// //原型链中 确定原型和实例的关系方法有 instanceof操作符和isPrototypeOf()方法
// //借用构造函数
// function SuperType() {
//     this.colors = ['red', 'blue', 'green'];
// }
// function SubType() {
//     //继承了SuperType
//     SuperType.call(this);
// }
// var instance1 = new SubType();
// instance1.colors.push('black');
// console.log(instance1.colors);
// var instance2 = new SubType();
// console.log(instance2.colors);

// //组合继承----常用继承模式
// function SuperType(name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }
// SuperType.prototype.sayName = function () {
//     console.log(this.name);
// };
// function SubType(name, age) {
//     //继承属性
//     SuperType.call(this, name);
//     this.age = age;
// }
// //继承方法
// SubType.prototype = new SuperType();
// SubType.prototype.sayAge = function () {
//     console.log(this.age);
// };
// var instance1 = new SubType('lifeng', 27);
// instance1.colors.push('black');
// console.log(instance1.colors);
// instance1.sayName()
// instance1.sayAge()
// var instance2 = new SubType('feng', 27);
// console.log(instance2.colors);
// instance2.sayName();
// instance2.sayAge();

// //原型式继承
// function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }
// var person = {
//     name: 'lifeng',
//     friends: ['shelby', 'court', 'van']
// };
// //var anoterPerson = object(person);
// var anoterPerson = Object.create(person);//Object.create()---ES5新增方法
// anoterPerson.name = 'feng';
// anoterPerson.friends.push('rob');
// //var yetAnotherPerson = object(person);
// var yetAnotherPerson = Object.create(person);
// yetAnotherPerson.name = 'li';
// yetAnotherPerson.friends.push('barbie');
// console.log(person.friends);

// //寄生式继承
// function object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }
// function createAnother(original) {
//     var clone = object(original);
//     clone.sayHi = function () {
//         console.log('hi');
//     };
//     return clone;
// }
// var person = {
//     name: 'lifeng',
//     friend: ['shelby', 'court', 'van']
// };
// var  anotherPerson = createAnother(person);
// anotherPerson.sayHi();

// //寄生组合式继承



// //第7章 函数表达式
//     //匿名函数（拉姆达函数）
//     var functionName = function (arg0, arg1, arg2) {
//     //函数体
//     };

// // 7.1 递归
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// //arguments.callee是一个指向正在执行的函数的指针，因此可以用它来实现对函数的递归调用，但是不能再严格模式下使用，否则会报错
// //针对这个问题可以使用命名函数表达式来解决----如下
// var factorial = (function f(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * f(num-1);
//     }
// });

// //7.2闭包
// function creatFunctions() {
//     var result = new Array();
//     for (var i=0; i < 10; i++){
//         result[i] = function () {
//             return i;
//         };
//     }
//     return result;
// }
// function creatFunctions(){
//     var result  = new Array();
//     for (var i = 0; i<10; i++){
//         result[i] = function (num) {
//             return function () {
//                 return num;
//             };
//         }(i);
//     }
//     return result;
// }
// //7.2.2 关于this对象
// var name = 'The Window';
// var object = {
//     name : 'My Object',
//     getNameFunc : function () {
//         var that = this;
//         return function () {
//             return that.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());
// //7.2.3内存泄漏
// function assignHandler() {
//     var element = document.getElementById('someElement');
//     var id = element.id;
//     element.onclick = function () {
//         console.log(id);
//     };
//     element = null;
// }

// //7.3模仿块级作用域
// //私有作用域
// (function () {
//     //块级作用域
// })();

//7.4 私有变量
function MyObject() {
    //私有变量和私有函数
    var privateVariable = 10;
    function privateFunction() {
        return false;
    }
    //特权方法
    this.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }
}
//7.4.1 静态私有变量