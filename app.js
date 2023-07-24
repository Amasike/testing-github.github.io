let a = 'hello world';
console.log(typeof a);

let x = 7;
console.log(typeof x);

let y = true;
console.log(typeof y);

let c = 8;
let o = '4';
o = parseInt(o, 10);

let e = c + o;
console.log('Answer = ' + e);

let r = parseInt('doe', 10);
console.log(r);

let i = isNaN(r)
console.log(i);

let k = 1;
k++;
console.log(k);
k++;
console.log(k);
console.log(++k);

let f = [23, 21, 74, 30, 33, 40];
console.log(f[1]);

let h = [6, 'hate', true];
console.log(typeof h[0]);
console.log(typeof h[1]);
console.log(typeof h[2]);

console.log(f.length); //length of the array "f"
f[2] = 60;
console.log(f[2]) //change the third element of the array "f" from 74 to 60

/*f[15] = 44; //creating a sparse array
console.log(f); //sparse array
console.log(f.length); //the length of tbhe sparse array*/

f.push(22); //adding an element at the end of the array element
console.log(f);
console.log(f.length);

f.pop(); //removing an element from the end of the arrray element
console.log(f);
console.log(f.length);

f.pop();//removing element twice from the end of the array element
f.pop();
console.log(f);
console.log(f.length);

f.unshift(99); //adding an element "99" from the front of the array
console.log(f);
console.log(f.length);

f.shift(); // removing an element from the beginning of the array
console.log(f);
console.log(f.length);

f.shift(); // removing element twice from the beginning of the array
f.shift();
console.log(f);
console.log(f.length);

function sayHello(){
    console.log('***************************************');
    console.log('Hello!!!!');
    console.log('***************************************');
}
sayHello(); //first way to call up a function

let t = sayHello; //second way to call up a function
t();
t();
t();

function sayHello(name){
    console.log('***************************************');
    console.log('Hello ' + name + '!!!!!!!!!!.......');
    console.log('***************************************');
}

sayHello('Ekene'); //third way to call up a function
sayHello('Udochukwu');
sayHello('Emeka');
sayHello('Mmesoma');

function calculateTax(amount){
    let result = amount * 0.024;
    return result;
}

let tax = calculateTax(100);
console.log(tax);

/*using handlers to call up functions
the following code will run after 3 seconds
setTimeout(function () {
    console.log('I waited 3 seconds')
}, 3000);
*/

/*let counter = 0; //this code will keep on counting or executing until "ctrl + C" is pressed to stop
function timeOut () {
    setTimeout (function () {
        console.log('I just counted ' + counter++);
        timeOut();
    }, 2000);
}
timeOut();
*/

(function (){ // this is how to invoke a function immediately. These types of functions are called IIFE (immediately invoked function expressions)
    console.log('I am invoked immediately!!!')
}) ();

//Decision statement: If
let q = 6;
if (q == 3) {
    console.log('q is 3');
}
else if (q > 3) {
    console.log('q is greater than 3')
}
else if (q < 3) {
    console.log('q is less than 3')
}
else {
    console.log('q is not a number')
}

//Decision statement: switch
let superHero = 'superman';//this code runs hierachically from top too bottom with the topmost having all the qualities of the superheroes, the break function is added to give each superhero its perculiar abilities without hierachical flow
switch (superHero) {
    case 'superman' :
        console.log('super strength');
        console.log('super vision');
        console.log('heat vision');
        break;
    case 'batman' :
        console.log('super rich');
        console.log('intelligence');
        console.log('combat skills');
        break;
    default :
        console.log('a member of the Justice League America');
}

//ternary operator
//to check equality
let v = 2; u = '2';
let result = (v == u) ? 'equal' : 'inequal';
console.log(result); 
//console.log((v == u) ? 'equal' : 'inequal'); This can also be used to execute the codes above
/*
//to check strict equality
let v = 2; u = '2';
let result = (v === u) ? 'equal' : 'inequal';
console.log(result); 
//console.log((v === u) ? 'equal' : 'inequal'); This can also be used to execute the codes above
//to check inequality
let v = 2; u = '2';
let result = (v != u) ? 'equal' : 'inequal';
console.log(result); 
//console.log((v != u) ? 'equal' : 'inequal'); This can also be used to execute the codes above
//to check strict inequality
let v = 2; u = '2';
let result = (v !== u) ? 'equal' : 'inequal';
console.log(result); 
//console.log((v !== u) ? 'equal' : 'inequal'); This can also be used to execute the codes above
*/

// for loop
for (b = 0; b < 10; b++) {
    console.log(b);
}

let d = [34, 45, 23, 56, 67];
for (i = 0; i < d.length; i++) {
    console.log(d[i]);
}

// while loop
let g = 1;
while (g < 10) {
    console.log(g++);
}

let j = 1;
while (j < 10) {
    console.log(j++);
    if (j == 6) {
        break;
    }
    // if (j == 6) break; this can be used as a shortcut for the break in the above code
}

//returning a function from a function
function one (){
    console.log('one')
}
 let value = one;
 console.log(typeof value);


 function three() {
    return function () {
        return 'three';
    }
 }
 console.log(three()());