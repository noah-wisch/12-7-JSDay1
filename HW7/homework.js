console.log('#1: The Tallest Mountain');

let height = [8611, 8568, 8516, 8848, 8485];
let tallest = 0;

for (let i = 0; i < height.length; i++) {
    // console.log(i);

// if height of current item is bigger than height of tallest seen
    if (tallest < height[i]) {
        tallest = height[i];
    }
}
console.log(tallest);

/* ------------------------------------------ */

console.log('#2: Hangman Lite'); 

let newWord = 'Salad'
let letter = 'S'
let occurances = 0; //number used for counting the # of appearances 

/*
1. Iterate over the word to see if the letter is in the word
2. If the current letter is 'a' add one to the occurances 
3. Print out 'it exists x times' if occurances > 0 
4. If occurances === 0 print 'not here'
*/

for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === letter) { //this is step 2 from above
        occurances++;
    }
}

if (occurances > 0) {
    console.log('it exists ' + occurances + ' times');
} else {
    console.log('Nope, not here');
}

/* ------------------------------------------ */
console.log('#3: Cherokee Hare');

let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;
// let population = true //idk what to run to make this work. I feel like my formula isn't SUPER far off, but yeah...

// for (let index = 0; index < startingPopulation; index++) {
//     if (birthRate[index] === numberOfWeeks[index]) {

//     }
// }
// console.log(population);


// After one week, 200 x 1.1
// 1. Add solution from above to the startingPopulation
// 2. Repeat numberOfWeeks times

let finalPop = startingPopulation;
for (let i = 0; i < numberOfWeeks; i++) {
    finalPop = finalPop + (finalPop * birthRate);
}

finalPop = Math.floor(finalPop);

console.log('Rabbit horde size' + finalPop);

/* ------------------------------------------ */
console.log('#4: Change Machine');

let amount = 66;

// [20,10,5,1]

// Number of complete 20s we can pull out
let twenties = Math.floor(amount / 20);
// Bills left to provide change for 
amount = amount % 20;

let tens = Math.floor(amount / 10);
amount = amount % 10;

let fives = Math.floor(amount / 5);
amount = amount % 5;

let ones = amount;

let change = [twenties, tens, fives, ones];
console.log(change)


/* Okay, for starters, I know I need to use Modulus...
I think I need to assign values of 0-3 for 20s, 10s, 5s and 1s. 

/* ------------------------------------------ */

console.log('#5: Palindromes');

let word = "amma"
let end  = word.length - 1
let palindrome = true //whether the word is a palindrome

//start the index at 0 and as long as the index is shorter than the length of the word, we will increase the index by 1
for (let index = 0; index < word.length; index++) {
    // if '0 from the front' is not equal to '0 from the back' this word is not a palindrome (index increases each loop)
    if (word[index] !== word[end - index]) {
        palindrome = false;
    }
}   

console.log(palindrome)

/* 
Tips: Palindrome Example

    1. start from the beginning and look at each letter.
    2. compare first letter to last letter.
    3. compare the second to the second to last.
    4. etx (loop).
    5. If any of them do not match, not a palindrome.
*/