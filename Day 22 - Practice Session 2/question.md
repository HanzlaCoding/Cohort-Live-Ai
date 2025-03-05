
## **3️⃣ Loops (5 Questions)**

**11\. Write a for loop to print numbers from 10 to 1 in reverse.** for (let i \= 10; i \>= 1; i--) {

    console.log(i);

}

**12\. Use a while loop to print multiples of 3 from 3 to 30\.** let num \= 3;

while (num \<= 30\) {

    console.log(num);

    num \+= 3;

}

**13\. Write a program to calculate the sum of numbers from 1 to 100 using a loop.** let sum \= 0;

for (let i \= 1; i \<= 100; i++) {

    sum \+= i;

}

console.log("Sum:", sum); // Output: 5050

**14\. Create a nested loop to print a star pattern.** for (let i \= 1; i \<= 5; i++) {

    let stars \= "";

    for (let j \= 1; j \<= i; j++) {

        stars \+= "\*";

    }

    console.log(stars);

}

**15\. Use a for...of loop to iterate over the string "JavaScript".** let str \= "JavaScript";

for (let char of str) {

    console.log(char);

}