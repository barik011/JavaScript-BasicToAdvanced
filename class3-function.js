// Task 1
// Create a simple function with name firstFunction().
// and store the value in console ('This is my first function')
// and call the function firstFunction().

function firstFun(){
    console.log("This is my First Function")
}
firstFun();

// Task 2
// Create a function with name square().
// The function square() takes one parameter and parameter name is num.
// Return the parameter (num) multiplied by itself.
// Example like (num * num)
// and call the function square() and store the result in console.

function sqaure(num){
    return num*num;
}
var result = sqaure(2);
console.log(result);
var result = sqaure(5);
console.log(result);

// Task 3
// Create one function with name as Addition()
// The function Addition() takes Four parameter like num1,num2,num3,num4.
// take a one variable in function that is result and stored the addition of this four paramater in the result
// Return the result variable under the function
// and now call the Addition() function

function addition(num1,num2,num3,num4){
    var result = num1+num2+num3+num4;
    return console.log(result);
}
addition(1,2,3,4);

// Advance Task
// Task 1
// Create a function which has a parameter where we can send a word as parameter.
// And converts the first letter of word into upper case and Return New String.

function convertUpperCase(word){
    var firstLetterUpper = word.charAt(0).toUpperCase() + word.slice(1);
    return firstLetterUpper;
}
var resultCap = convertUpperCase("hello");
console.log(resultCap);
var resultCap = convertUpperCase("hello javascript");
console.log(resultCap);

// Task 2
// Create a function which has a parameter and converts the first letter of each word 
// into upper case and Return New String

function allFirstLetterUpperCase(str){
    var newStr = str.split(' ');
    for(var i=0; i < newStr.length; i++){
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1)
    }
    return newStr.join(' ');
}
var resultAllCaps= allFirstLetterUpperCase('please make all first letter in upper case');
console.log(resultAllCaps);

// Task 3
// Create a function which accept any no of parameter - it should return sum all parameeter.
// Ex: testFun(1,3) output: 4, testFun(1,3,2,3) output: 9
function acceptAllParameter(){
    //debugger;
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum= sum + arguments[i];
    }
    return sum;
}
var resultSum = acceptAllParameter(1,3);
console.log(resultSum);
var resultSum = acceptAllParameter(1,3,4,5,6,7,8);
console.log(resultSum);

//*******************************************
// Task 4
// create 2 Buttons
// => "Button 1" => "Button 2"
// we need to record how many times user has click both buttons and show clicked counter 
// in the p tag
// **********************************************/
var buttonIdFirst = document.getElementById('button1');
var buttonIdSecond = document.getElementById('button2');
var buttonFirstResult = document.getElementById("firstOutput");
var buttonSecondResult = document.getElementById("secondOutput");
var buttonFirstCount=0;
var buttonSecondCount=0;

buttonIdFirst.addEventListener('click',function (){
    buttonFirstCount++;
    buttonFirstResult.textContent = buttonFirstCount;
});

buttonIdSecond.addEventListener('click', function (){
    buttonSecondCount++;
    buttonSecondResult.textContent = buttonSecondCount;
})

// function countButtonFirstClick(){
//     buttonFirstCount++;
//     buttonFirstResult.textContent = buttonFirstCount;
// }

// function countButtonSecondClick(){
//     buttonSecondCount++;
//     buttonSecondResult.textContent = buttonSecondCount;
// }

// function countButtonClicked(buttonId){
//     debugger;
//     if(buttonId ==='button1'){
//         buttonFirstCount++;
//         buttonFirstResult.textContent = buttonFirstCount;
//     }
//     else if(buttonId ==='button2'){
//         buttonSecondCount++;
//         buttonSecondResult.textContent = buttonSecondCount
//     }
// }


//********************************
// Task 5
// Create a function with a parameter which will tell you DataType
//  of any parametr value you passed to the function
// Ex: testFun("Chetan") output: string, testFun(12) output: number, 
// testFun({}) output: object, testFun([]) output: array
//  ********************************/

function findDataType(param){
    return typeof(param);
}
var dataTypeResult = findDataType('aa');
console.log(dataTypeResult);

var dataTypeResult = findDataType(123);
console.log(dataTypeResult);

var dataTypeResult = findDataType(false);
console.log(dataTypeResult);

var dataTypeResult = findDataType(['a','b','c']);
console.log(dataTypeResult);

var dataTypeResult = findDataType({name:'barique',city:'purnea'});
console.log(dataTypeResult);


