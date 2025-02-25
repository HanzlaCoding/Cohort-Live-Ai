# 🚀 JavaScript Essentials: Strings, Conditionals & Loops

## 🔤 String Methods

**`slice()`** - Extracts part of a string.
```js
"JavaScript".slice(0, 4); // "Java"
```

**`split()`** - Splits a string into an array.
```js
"a,b,c".split(","); // ["a", "b", "c"]
```

**`replace()`** - Replaces first occurrence.
```js
"Hello World".replace("World", "JS");
```

**`replaceAll()`** - Replaces all occurrences.
```js
"JS is JS".replaceAll("JS", "JavaScript");
```

**`includes()`** - Checks if a string contains a value.
```js
"Hello JS".includes("JS"); // true
```

**Template Literals** - Dynamic strings with backticks.
```js
`Hello, ${name}!`
```

---

## 🔀 Conditionals

**if-else**
```js
if (score > 90) console.log("A");
else console.log("B");
```

**Ternary Operator**
```js
let result = age >= 18 ? "Adult" : "Minor";
```

**Switch**
```js
switch(day) {
  case "Mon": console.log("Start"); break;
  case "Fri": console.log("Weekend"); break;
}
```

---

## 🔄 Loops

**for Loop**
```js
for (let i = 0; i < 5; i++) console.log(i);
```

**while Loop**
```js
let i = 0;
while (i < 5) console.log(i++);
```

**do-while Loop**
```js
let i = 0;
do console.log(i++); while (i < 5);
```

**for...of Loop**
```js
for (let num of [1,2,3]) console.log(num);
```

**for...in Loop** (Object properties)
```js
for (let key in obj) console.log(`${key}: ${obj[key]}`);
```

---

## ⏭️ Loop Control

**break** - Exit loop early.
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

**continue** - Skip current iteration.
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

---

## ⚡ Advanced Concepts

**Hoisting** - Variables & functions are moved to the top before execution.
```js
console.log(a); // undefined
var a = 10;
```

**Rest Parameter** - Collects multiple arguments into an array.
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

**IIFE (Immediately Invoked Function Expression)** - Runs immediately after definition.
```js
(function() {
  console.log("IIFE executed");
})();
```

**Higher Order Function** - A function that takes another function as a parameter or returns a function.
```js
function operate(fn, a, b) {
  return fn(a, b);
}
console.log(operate((x, y) => x + y, 5, 3));
```

**Callbacks** - A function passed into another function as an argument.
```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
greet("Alice", () => console.log("Callback executed"));
```

**Pure & Impure Functions**
- **Pure:** No side effects, same input always gives the same output.
```js
function add(a, b) {
  return a + b;
}
```
- **Impure:** Modifies external state.
```js
let total = 0;
function addToTotal(value) {
  total += value;
}
```

**Global Scope** - Accessible anywhere.
```js
var globalVar = "I am global";
```

**Local Scope** - Only accessible within a function.
```js
function test() {
  let localVar = "I exist only here";
}
```

**Closures** - Function with access to an outer function’s variables even after execution.
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

Minimal yet powerful. Master these and level up! 🚀