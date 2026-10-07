// ==========================================
// Question 1: Control Flow & Conditional Logic
// ==========================================

let score = 85;
let grade;

switch (true) {
    case score >= 90 && score <= 100:
        grade = "A";
        break;

    case score >= 80 && score <= 89:
        grade = "B";
        break;

    case score >= 70 && score <= 79:
        grade = "C";
        break;

    case score >= 60 && score <= 69:
        grade = "D";
        break;

    case score >= 0 && score < 60:
        grade = "F";
        break;

    default:
        grade = "Invalid score";
}

console.log("Score:", score);
console.log("Grade:", grade);

let result = score >= 60 && score <= 100 ? "Passed" : "Failed";

console.log("Result:", result);

// ==========================================
// Question 2: Type Conversion, Truthy & Falsy Values
// ==========================================

// Convert a string into a number
let stringInput = "25";
let numberInput = Number(stringInput);

console.log("Original value:", stringInput);
console.log("Converted value:", numberInput);
console.log("Converted type:", typeof numberInput);

// Test different truthy and falsy values
let values = [0, "", "hello", null, undefined, NaN];

for (let value of values) {
    if (value) {
        console.log(value, "is truthy");
    } else {
        console.log(value, "is falsy");
    }
}

// ==========================================
// Question 3: Functions & Logical Operators
// ==========================================

// Create the greetingBot function
function greetingBot(name, isMorning) {
    return (isMorning && `Good morning, ${name}!`) ||
           `Hello, ${name}!`;
}

// Test the function with different inputs
console.log(greetingBot("Freddie", true));
console.log(greetingBot("Kago", false));

// ==========================================
// Question 4: Objects & Methods
// ==========================================

// Create a social media post object
const post = {
    username: "Freddie Kwetsane",
    caption: "Learning JavaScript one step at a time!",
    likes: 10,
    comments: [
        "Great post!",
        "Keep learning JavaScript!"
    ],

    // Method to increase the like count by 1
    addLike() {
        this.likes++;
    }
};

// Display likes before adding a like
console.log("Likes before:", post.likes);

// Call the addLike method
post.addLike();

// Display likes after adding a like
console.log("Likes after:", post.likes);

// Use object destructuring to extract username and caption
const { username, caption } = post;

console.log("Username:", username);
console.log("Caption:", caption);

// ==========================================
// Question 5: Loops, Spread Operator & Pattern Printing
// ==========================================

// Create two arrays of numbers
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// Merge the arrays using the spread operator
const combinedNumbers = [...numbers1, ...numbers2];

console.log("Combined array:", combinedNumbers);

// Print the star pattern using a for loop
console.log("Star Pattern:");

for (let i = 1; i <= 5; i++) {
    let spaces = "  ".repeat(5 - i);
    let stars = "*   ".repeat(i);

    console.log(spaces + stars);
}

// Print numbers from 10 down to 1 using a while loop
console.log("Countdown:");

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}