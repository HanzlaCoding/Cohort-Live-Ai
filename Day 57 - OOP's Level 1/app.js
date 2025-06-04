// Ye oops kia ha
// objects ko create krna jo sirf data hold na kren unki functionality bhi hold kren, aur aise object ko create karna with blueprint model
// krna kia hota ha
// Kyu krna hota ha
// Kaise krte hen
// functional form mein classes ki mimic krna
// classes bnana
// objects bnana
// purpose


// Old way me objects bnaneka ek constructor function se jab js me class nahi thi
// Old tarika
function Ghar(city, type) {
    this.city = city;
    this.type = type;
}

var home1 = new Ghar("lahore", "apartment");
console.log(home1);

// New Tarika
class Home {
    constructor(city, type) {
        this.city = city;
        this.type = type;
    }
}

var home2 = new Ghar("lahore", "apartment");
console.log(home2);

// OOP Level 2
// / jab bhi constructor banaaoge aur kuchh aisa mil gaya jop ki sabmein same hai to usey kabhi bhi direct constructor mein banana galat tareeka hota hai, par sahi tareeka hai prototype ka use karna kyuki prototype mein save karne par jitne bhi new ke saath instance banaaoge wo saare instance by default tumhaari proto ki value ko hold karege


// prototype is a shared value
// prototype objects ka hota ha js me sb kch prototype ha

Toffee.prototype.price = 10;


function Toffee(name, price) {
    this.name = "#)" + name;
    this.price = price;
    this.printMyName = function () {
      console.log(this.name);
    };
  }
  
  let t1 = new Toffee("kachha aam", 2);
  let t2 = new Toffee("mango bite", 1);