// rest parameter
// ye extra parameters ko ek array me convert kar deta hai
function restParameter(a, b, ...c) {
    console.log(a, b, c);
}

restParameter(1, 2, 3, 4, 5);
// hoisting
// hoisting me function ko upar le jata hai aur variable ko upar le jata hai but uska value nahi le jata hai
// isliye function ko upar le jata hai toh hum function ko pehle bhi call kar sakte hai aur baad me bhi call kar sakte hai but variable ko upar le jata hai toh uska value nahi le jata hai isliye hum variable ko pehle call nahi kar sakte hai
hoisting();
function hoisting() {
    console.log(a);
    var a = 10;
    console.log(a);
}

// iife
(function iife() {
    console.log("I am iife");
})();
// higher order function
// jb koi function as a parameter accept ho ya return ho.
function hof() {
    return function () {
        hof();
    }
}

hof()();
// callbacks
// jb function ko call krte waqt ek function ko parameter me pass krte hai toh usko callback function bolte hai
// pure and impure function
// pure function - jo function kisi bhi external variable ko change nahi karta hai aur kisi bhi external variable ka use nahi karta hai usko pure function bolte hai aur jo function kisi bhi external variable ko change karta hai ya kisi bhi external variable ka use karta hai usko impure function bolte hai 
// global scope
var a = 12;
function globalScope() {
    console.log(a);
}
// local scope
function localScope() {
    var a = 12;
    console.log(a);
}
// closures
// jb function ke andar ik variable ho or us variable ko returned function me use kiya jaye usy closure kehte hen.