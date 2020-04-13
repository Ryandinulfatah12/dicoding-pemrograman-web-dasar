// Penjumlahan,kali,bagi,kurang di js
let a = 12;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let user = {
    firstName: "Harry",
    lastName: "Potter",
    isMuggle: false,
    age: 18,
    friend: ["Hermione","And More"]
};

console.log('Hello My name is '+user.firstName+' '+user.lastName);
console.log('my age is '+user.age);

// SHORTCUT
let x = 10;
let y = 5
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;
 
console.log(x);

// IF/ELSE STATEMENT
let nilai = 100;
 
if(nilai > 70) {
    console.log(nilai);
} else if(nilai === 100){
    console.log("Nilainya adalah 100")
} else {
    console.log("Nilai kurang dari 70");
}

let language = "English";
let greeting = "Selamat Pagi!"
 
if(language === "English") {
    greeting = "Good Morning!";
}
 
console.log(greeting);

// LOOP/PERULANGAN
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const myArray = ["Harry", "Ron", "Hermione", "DarkLORD"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    
}

let myArrays = ["Harry", "Ron", "Hermione", "Tom"];
 
for(const arrayItem of myArrays) {
    console.log(arrayItem)
}
// FUNCTION
function menyapa(nama, bahasa) {
    if (bahasa === "English") {
        console.log("Hello "+ nama);
    } else if(bahasa === "French"){
        console.log("Bonjour "+ nama);
    } else {
        console.log('Hai '+ nama);
    }
}

let salam = menyapa("Harry", "French");
