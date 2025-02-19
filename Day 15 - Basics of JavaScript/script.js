// const age = Number(prompt('Enter your age in numbers. E.g 13,12,11 etc...'));

// if (age > 18) {
//     alert("You're 18.")
// }
// else {
//     alert("You're not 18.")
// }

const bijliKaUnits = Number(prompt('Enter your units'));

if (bijliKaUnits >= 100) {
    const ans = bijliKaUnits * 10;
    alert(ans)
}
else if (bijliKaUnits >= 50) {
    const ans = bijliKaUnits * 8;
    alert(ans)
}
else if (bijliKaUnits < 50) {
    const ans = bijliKaUnits * 5;
    alert(ans)
}
else {
    const ans = alert("Invalid Input")
}