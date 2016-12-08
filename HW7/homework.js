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

// console.log('#2: Hangman Lite'); 

// let newword = 'Clemson'
// let letter = 'm'
// let hangman = true //if the guess is right

// let (i=0; i < newword.length; i++) {
//     if (letter[0] !== newword.length[i]) {
//         hangman = false;
//     }
// }
/*

Take the guess and match it against my word
If the letter guessed does not exist in my word, 
UGH idk man...

*/

/* ------------------------------------------ */
console.log('#3: Cherokee Hare');

let startingPopulation = 0;
let birthRate = 0.1;
let numberOfWeeks = 5;
let population = true //idk what to run to make this work. I feel like my formula isn't SUPER far off, but yeah...

for (let index = 0; index < startingPopulation; index++) {
    if (birthRate[index] === numberOfWeeks[index]) {

    }
}
console.log(population);


// There will be x Cherokee Hares after y weeks" but replace x with the number of hares and y with the number of weeks.

/* ------------------------------------------ */
console.log('#4: Change Machine');

let amount = [20,10,5,1]

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