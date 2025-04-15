/* 
string + string = string (concatenation)
string + int = string (concatenation)
int + int = int (arithmatic operation)
2 operand or 1 operator
+ => addition & concatenation
*/




// Question 1
let i = 11;
// i = 11 + 13
i = i++ + ++i;
console.log(i);

// Question 2
let a = 11; b = 22;
// c = 11 + 22 + 11 + 22 + 13 + 23
let c = a + b + a++ + b++ + ++a + ++b;
console.log(c);

// let a = 1;
// let b = a++;