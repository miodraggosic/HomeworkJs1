console.log("hello world");

// Conditinal branching

let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");
let btn4 = document.getElementById("four");
let btn5 = document.getElementById("five");
let btn6 = document.getElementById("six");
let btn7 = document.getElementById("seven");
let btn8 = document.getElementById("eight");
let btn9 = document.getElementById("nine");

// 1. TASK

btn1.addEventListener("click", () => {
  let number = prompt("Please enter any number?");
  if (number > 0) {
    alert("1");
  } else if (number < 0) {
    alert("-1");
  } else {
    alert("0");
  }
});

// 2. TASK

btn2.addEventListener("click", () => {
  let number = prompt("Please enter any positive number?");
  if (number > 0 && number < 3) {
    alert("1-3");
  } else if (number >= 3 && number < 5) {
    alert("3-5");
  } else if (number >= 5) {
    alert("5-7");
  } else {
    alert("Number must be greater than 0");
  }
});

// 3. TASK

let result;
let a = 1;
let b = 2;

a + b < 5 ? (result = "Below") : (result = "Over");

console.log(result);

// 4. TASK

let birthYear;
let futureYear;
let old;

function yearsOld() {
  birthYear = prompt("Enter your birth year?");
  futureYear = prompt("Enter some year in the future?");
  old = futureYear - birthYear;

  console.log(`You will be either ${old} or ${old * -1} in ${futureYear}`);
}

btn3.addEventListener("click", () => yearsOld());

// 5. TASK

const questions = () => {
  let age = prompt("What is your age?");
  let name = prompt("What is your name?");
  let occupation = prompt("What is your occupation?");

  alert(`
    Username: ${name}
    Age: ${age}
    Occupation: ${occupation}`);
};

btn4.addEventListener("click", () => questions());

// Strings

let text;
let words;
let sentence = [];

// 1. TASK

const toUpper = () => {
  text = prompt("Enter some text");
  console.log(text.toUpperCase());
};

btn5.addEventListener("click", () => toUpper());

// 2. TASK

const toLow = () => {
  text = prompt("Enter some text");
  console.log(text.toLowerCase());
};

btn6.addEventListener("click", () => toLow());

// 3. TASK

const everyFirst = () => {
  text = prompt("Enter sentence");
  words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  console.log(words.join(" "));
};

btn7.addEventListener("click", () => everyFirst());

// 4. TASK

const longestWord = () => {
  text = prompt("Enter sentence with 5 words or more");
  words = text.split(" ");

  let maxLetters = 0;
  let longestWord;

  words.forEach((word) => {
    if (word.length > maxLetters) {
      maxLetters = word.length;
      longestWord = word;
    }
  });

  console.log(maxLetters, longestWord);
};

btn8.addEventListener("click", () => longestWord());

// 5. TASK

const reverseWord = () => {
  text = prompt("Enter word to reverse caracters");
  let newWord = "";

  for (let i = text.length - 1; i >= 0; i--) {
    newWord += text[i];
  }

  console.log(newWord);
};

btn9.addEventListener("click", () => reverseWord());

// Loops
console.log("LOOPS");

const numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const superheroes = [
  {
    name: "Bruce Wayne",
    alias: "Batman",
    powerLevel: 50,
  },
  {
    name: "Wade Wilson",
    alias: "Deadpool",
    powerLevel: 90,
  },
  {
    name: "Peter Parker",
    alias: "Spiderman",
    powerLevel: 70,
  },
  {
    name: "Kristin Wells",
    alias: "Superwoman",
    powerLevel: 99,
  },
  {
    name: "Barry Allen",
    alias: "The Flash",
    powerLevel: 80,
  },
  {
    name: "Diana Prince",
    alias: "Wonder Woman",
    powerLevel: 90,
  },
  {
    name: "Ororo Munroe",
    alias: "Storm",
    powerLevel: 85,
  },
  {
    name: "Helen Parr",
    alias: "Elastigirl",
    powerLevel: 70,
  },
];

let quote =
  "There are times in life when people must know when not to let go. Balloons are designed to teach small children this.";

// 1. TASK

let arrNum = [];

for (let i = 0; i < 16; i++) {
  arrNum.push(i);
}
console.log("TASK 1", arrNum);

// 2. TASK

let arrWhile = [];
let i = 12;

while (i < 25) {
  arrWhile.push(i);
  i++;
}
console.log("TASK 2", arrWhile);

// 3. TASK

let arrEven = [];

for (let i = 0; i < numDaysInMonth.length; i++) {
  if (numDaysInMonth[i] % 2 == 1) {
    arrEven.push(numDaysInMonth[i]);
  }
}
console.log("TASK 5", arrEven);

// 4. TASK

let arrOdd = [];

for (let i = 10; i >= -20; i--) {
  if (i % 2 == 0) {
    arrOdd.push(i);
  }
}
console.log("TASK 4", arrOdd);

// 5. TASK

daysInWeek.forEach((day) => {
  console.log(day);
});

// 6. TASK

let sum = 0;

for (let number of numDaysInMonth) {
  sum += number;
}

console.log("TASK 6:", sum);

// 7. TASK

let powerHero = 0;

for (let hero in superheroes) {
  if (superheroes[hero].powerLevel > 90) {
    powerHero++;
  }
}

console.log("TASK 7: ", powerHero);

// 8. TASK

// 1. example

let date = new Date().getDay();

switch (date) {
  case 1:
    console.log(daysInWeek[1]);
    break;
  case 2:
    console.log(daysInWeek[2]);
    break;
  case 3:
    console.log(daysInWeek[3]);
    break;
  case 4:
    console.log(daysInWeek[4]);
    break;
  case 5:
    console.log(daysInWeek[5]);
    break;
  case 6:
    console.log(daysInWeek[6]);
    break;

  default:
    console.log(daysInWeek[0]);
    break;
}

// 2. exaple

for (let i = 0; i < daysInWeek.length; i++) {
  if (i == date) {
    console.log(`Today is ${daysInWeek[i]}`);
  }
}

// 9. TASK

let eCount = quote.match(/e/gi);
console.log(`There are ${eCount.length} letters 'e' in the quote`);
