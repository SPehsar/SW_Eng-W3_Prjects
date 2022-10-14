// /* I. Variables & Datatypes
// 1. How do we assign a value to a variable? 
//     A. With the assignment operator
// 2. How do we change the value of a...
//     A. Using assignment operator assign the new variable the new value
// ...
// */

// /*
// A. Q + A
// How do we assign a value to a variable?
//     A.  With the assignment operator.
// How do we change the value of a variable?
//     A.  Using assignment operator assign the new variable the new value
// How do we assign an existing variable to a new variable?
//     A.  Using an assognment variable:
//         let a = 2 //exsiting variable
//         let b = a
// Remind me, what are declare, assign, and define?
//     A.  declare: save a memory location for the variable
//         define declare and assign value
//         assign is to put value in the reserved space for the variable during code running

// What is pseudocoding and why should you do it?
//     A.  It is not actual code; but flow of the process from begining to the end to get the result.      
//         It is in more natural speaking language.
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//     A. 80 to 20:  That is 80 prcent in thinking and 20 pecent in writting the code.  This way all the isses are being worked out.
//         If there is any issue, we can deal with it then, instead of dealing with huge amount of issues.
// */


// /*
// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
//     A. 8
// Create a variable called yourNameand set it equal to your name as a string. Then, 
// write an expression that takes the string "Hello, my name is " and the variable yourNameso 
// that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
// */
// console.log("\n*********   B. Strings *********");
// let firstVariable = "Hello World";
// console.log("\nvalue of firstVariable is " + firstVariable + ".");
// firstVariable = 8;
// console.log("\nNew numeric value of firstVariable is " + firstVariable + ".");
// let secondVariable = firstVariable;
// console.log("\nvalue of secondVariable is " + secondVariable + ".");
// secondVariable = " Any String"
// console.log("\nNew numeric value of secondVariable is " + secondVariable + ".");
// console.log("\nWhat is the value of firstVariable?  It is " + firstVariable + ".");
// let yourNameand = "Cyrus";
// let concatenatedStringWithYourName = "Hello, my name is "  + yourNameand;
// console.log("\n" + concatenatedStringWithYourName);

// /*
// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
// */
// console.log("\n*********   C. Booleans  *********");
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a != a != d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');

//   /*
//   D. The farm
//   Declare a variable animal. Set it to be either "cow" or something else
//   Write code that will print out "mooooo" if the it is equal to cow
//   Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//   Commit.
//   */
// console.log("\n*********   D. The farm  *********");
//  let animal;
//  animal = "cow";

//  if(animal === "cow"){
//     console.log("\nmooooo");
//  } else {
//     console.log("\nHey! You're not a cow.");
//  }

//  animal = "cat";

//  if(animal === "cow"){
//     console.log("\nmooooo");
//  } else {
//     console.log("\nHey! You're not a cow.");
//  }

// /*
// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, 
// if the age is younger than 16, a message should print "Sorry, you're too young."
// */

// console.log("\n*********   E. Driver's Ed  *********");
// let yourAge;
// yourAge = 16;

// if(yourAge >= 16){
//     console.log("\nHere are the keys!");
//  } else {
//     console.log("\nSorry, you're too young");
//  }

//  yourAge = 10;

// if(yourAge >= 16){
//     console.log("\nHere are the keys!");
//  } else {
//     console.log("\nSorry, you're too young");
//  }

//  /*
//  II. Loops
// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)
// */
// console.log("\n*********   II  *********");
// /*
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
// */
// console.log("\n*********   A. The basics  *********");
// console.log("\nAll the numbers from 0 to 10, inclusive.");
// for( let i = 0; i <=10; i++){
//     console.log(i)
// };
// console.log("\nAll the numbers from 10 up to and including 400.");

// for( let j = 10; j <= 400; j++){
//     console.log(j);
//  };

//  console.log("\nEvery third number starting with 12 and going no higher than 4000.");
// let counter1= 3;
// let counter2 = 0;
// let counter3 = counter2 - counter2;
// for( let j = 12; j <= 4000; j++){
//     counter2++
//     counter3 = counter2 - 3;
//     if(counter3 === 0 ){
//         console.log(j)
//     };
//  }; // ...

 /*
 B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
// console.log("\n*********    B. Get even  *********");
// for( let i = 1; i <=100; i++ ){
//     if( i%2 === 0){
//         console.log(i + "<-- is an even number")
//     } else {
//         console.log(i)
//     }
// }

/*
C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
*/

// 1. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// console.log("\n*********   C. Give me Five  *********");
// for( let i = 0; i <=100; i++ ){
//     if( i%5 === 0 && i !=0){
//         console.log("I found a number. " + i + ". High five!");
//     } 
// }
// // For numbers divisible by both three and five, be sure your code prints both messages
// for( let i = 0; i <=100; i++ ){
//     if( i%3 === 0 && i%3 === 0 && i !=0){
//         console.log("I found a number. " + i + ". High 3 and 5 :)!");
//     }
//     else if( i%5 === 0 && i !=0 ){
//         console.log("I found a number. " + i + ". High five!");
//     }
// }


/*
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/
// console.log("\n*********   D. Savings account  *********");

// let bank_account = 0;
// // for( let i= 1; i <= 10; i++){
// //     bank_account +=i;
// // }
// // console.log("\nYour bank_account have $" +  bank_account + " in it.")

// for( let i= 1; i <= 100; i++){
//     bank_account +=i *2;
// }
// console.log("\nYour bank_account have $" +  bank_account + " in it.")

// III. Arrays & Control flow

/*
A. Talk about it:
What are the things in an array called?
    A. Elements of array
Do Arrays guarantee those things will be in order?
    A. Yes (based on the inices)
What real-life thing could you model with an array?
    A. the best I remember is Checker boards (Chess)
*/

/*
B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes
*/
// console.log("\n*********   B. Easy Does It  *********");
// const arrayOfQuotes = ["The purpose of our lives is to be happy.", "You only live once", "Life is too short"]
// console.log(arrayOfQuotes)

/*
C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

1. How do you access the 1st element in the array?
    A. randomThings[i], we can loop through i upto array size - 1
2. Change the value of "Hello"to "World"
    A. randomThings[2] = "world"
3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
    A. It replaceds value inside array using assignment operator.
*/
// console.log("\n*********   C. Accessing elements  *********");
// const randomThings = [1, 10, "Hello", true];
// for(let i=0; i<randomThings.length; i++){
//     console.log("\nArray at index " + i + " is " + randomThings[i])
// };

// randomThings[2] = "world";
// for(let i=0; i<randomThings.length; i++){
//     console.log("\nArray at index " + i + " is " + randomThings[i])
// };

/*
D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

1. What would you write to access the 3rd element of the array?
    A. ourClass[2]
2. Change the value of "Github" to "Octocat"
    A. ourClass[4] = "Octocat"
3. Add a new element, "Cloud City" to the array
    A. ourClass.push("Cloud City")
*/
// console.log("\n*********   D. Change values  *********");
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log[ourClass];
// console.log("\nArray at index 2 is " + ourClass[2]);
// ourClass[4] = "Octocat";
// console.log[ourClass];
// ourClass.push("Cloud City");
// console.log[ourClass[0]];


/*
E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
    A. mute means that it will not be reassigned and change.  When we put const, we mute array.  The array elements can change; 
        but the array would not be reassigned (over written.)
*/

// console.log("\n*********   E. Mix It Up  *********");
// const myArray = [5, 10, 500, 20]
// console.log(myArray)
// myArray.push("Aegon");
// myArray.push("My Choice");
// console.log(myArray)
// myArray.shift()
// console.log(myArray)
// myArray.unshift("Bob Marley")
// console.log(myArray)
// myArray.pop()
// console.log(myArray)
// myArray.reverse()
// console.log(myArray)

/*
F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.
*/
// console.log("\n*********   F. Biggie Smalls  *********");
// let myVariable = 4;
// if(myVariable < 100){
//     console.log("\n" + myVariable + " little number")
// } else {
//     console.log("\n" + myVariable + " big number")
// }

// myVariable = 444;
// if(myVariable < 100){
//     console.log("\n" + myVariable + " little number")
// } else {
//     console.log("\n" + myVariable + " big number")
// }

/*
G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".
*/

// console.log("\n*********   G. Monkey in the Middle  *********");
// let myNum = 444;
// if(myNum < 5){
//     console.log("\n" + myNum + " little number")
// } 
// else if(myNum > 10){
//     console.log("\n" + myNum + " big number")
//     } 
// else {
//     console.log("\n" + myNum + " big  Monkey")
// };


// myNum = 2;
// if(myNum < 5){
//     console.log("\n" + myNum + " little number")
// } 
// else if(myNum > 10){
//     console.log("\n" + myNum + " big number")
//     } 
// else {
//     console.log("\n" + myNum + " Monkey")
// };

// myNum = 5;
// if(myNum < 5){
//     console.log("\n" + myNum + " little number")
// } 
// else if(myNum > 10){
//     console.log("\n" + myNum + " big number")
//     } 
// else {
//     console.log("\n" + myNum + " big  Monkey")
// };

/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
// console.log("\n*********   H. What's in Your Closet?  *********");
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
/*
1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
*/
// console.log("\nKristyn is rocking that wearing " + kristynsCloset[2] + " today!");

/*
2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
    arrayName.splice(index, 0, item); will insert item into arrayName at the specified index (
    deleting 0 items first, that is, it's just an insert).
*/

// kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);

// /*
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// */
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);

// /*
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// */
// console.log(thomsCloset[0][0]);

// /*
// 5. In the same way, access one item from Thom's pants array.
// */
// console.log(thomsCloset[1][0]);

// /*
// 6. Access one item from Thom's accessories array..
// */
// console.log(thomsCloset[2][2]);

// /*
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// */
// console.log("\nThom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + " and " + thomsCloset[2][2]+"!");

// /*
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// */
// thomsCloset[1][2] = "Footie Pajamas";
// console.log("\nThis coming winter, Thom is looking to wear " + thomsCloset[1][2] + " as his PJ!");


/*
A. printGreeting
Do you think you could write a function called printGreetingwith a parameter namethat returns a 
greeting with the argument interpolated into the greeting?

Like so?
*/

// console.log("\n*********   IV. Functions  *********");
// console.log("\n*********   A. printGreeting  *********");

// function printGreeting(name){
//  return"\nHello there, " + name + "!"
// }
// console.log(printGreeting("Slimer"));

/*
B. printCool
Write a function printCool that accepts one parameter, name as an argument. 
The function should print the name and a message saying that that person is cool.
*/

// console.log("\n*********   B. printCool  *********");

// function printGreeting(name){
//  return"\n" + name + " is cool."
// }
// console.log(printGreeting("Captain Reynolds"));

/*
C. calculateCube
Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
*/

// console.log("\n*********   C. calculateCube *********");
// function calculateCube(aNumber){
//     return aNumber**3
// }
// console.log(calculateCube(5));

/*
D. isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 
In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
*/
// console.log("\n*********   D. isVowel *********");
// //vowels = 'aeiou'
// function isVowel(aCharacter) {
//         if (aCharacter.toLowerCase() === "a" || aCharacter.toLowerCase() === "i" ||aCharacter.toLowerCase() === "o" || aCharacter.toLowerCase() === "u" || aCharacter.toLowerCase() === "e") {
//             return true;
//         } else {
//             return false;
//         }
//    };
// let myChar ="a";
// console.log("\nis \"" + myChar + "\" a vowel? " + isVowel(myChar))
// myChar ="h";
// console.log("\nis \"" + myChar + "\" a vowel? " + isVowel(myChar))
// myChar ="i";
// console.log("\nis \"" + myChar + "\" a vowel? " + isVowel(myChar))


/*
E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). 
The function should return an array of numbers where each number is the length of the corresponding string.
*/
// console.log("\n*********   E. getTwoLengths *********");
// function getTwoLengths (string1, string2){
//        return [string1.length, string2.length]
// }

// console.log(getTwoLengths("Hello", "me"));

/*
F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string.
*/
// console.log("\n*********   F. getMultipleLengths *********");
// function getMultipleLengths(stringArray){
//     const arrayOfStringLength = [];
//     for(let i = 0; i< stringArray.length; i++){
//         arrayOfStringLength.push(stringArray[i].length)
//     } 
//     return arrayOfStringLength
// }

// console.log(getMultipleLengths(["Hello", "me", "she"]));

/*
G. maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. 
If all numbers are the same, it doesn't matter which one is returned. 
If the two largest numbers are the same, one of them should be returned. Be sure to test it with 
larger values in each of the three locations.
*/

// console.log("\n*********   G. maxOfThree *********");
// function maxOfThree(x, y, z) {
//     if (x >= y) {
//         if (x >= z) {
//             return x;
//         } else {
//             return z
//         }
//     } else if (y >= z) {
//       return y;
//     } else {
//         return z
//     }
//   }

//   console.log(maxOfThree(3, 8, 10));  // output is 10
//   console.log(maxOfThree(3, 10, 8));  // output is 10
//   console.log(maxOfThree(10, 8, 3));  // output is 10
//   console.log(maxOfThree(3, 4, 4));  // output is 4
//   console.log(maxOfThree(8, 8, 8));  // output is 8

/*
H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. 
The method should return the longest word in the array. In case of a tie, 
the method should return the word that appears first in the array.
*/

// console.log("\n*********   H. printLongestWord *********");
// function printLongestWord(strArray){
    
//     // const printLongestWord = (strArray) => {

//         let longestStringLength = 0;
//         let longestString = ""
//         for (let i = 0; i < strArray.length; i++) {
//             if(  strArray[i].length > longestStringLength){
//                 longestStringLength = strArray[i].length
//                 longestString = strArray[i]
//             }
//         }
//         return longestString;
//       }
      
// console.log(printLongestWord(["me", "they", "you", "Hello", "yelow"]));   // Hello
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));   // Output is 0

/*
Let's set up an object data structure. Let's say we have a website that sells products, 
and we have a user of our website, and we want to store that user's data. 
The object data structure is a good way to organize the data from our user.
*/
// // console.log("\n*********   Objects *********");

// /*
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchased to an empty array []. Set the other values to whatever you would like.
// */
// console.log("\n*********   A. Make a user object *********");
// const user = { // Dot notation
//     name: "John Giltum",
//     age: 45,
//     email: "JohnG@yahoo.com",
//     purchased: [],
//     updateUserkey:function updateUser(){
//         this.age++
//         this.name = this.name.toUpperCase()
//     },
    
//     oldAndLoud(person){
//         person.age++
//         person.name = person.name.toUpperCase()
//     }
//   }
// console.log(user.name)
// console.log(user.email)
// console.log(user)

// /*
// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the email value to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
// */
// console.log("\n*********   B. Update the user *********");
// user.email = "johng@gmail.com";
// console.log(user.name)
// console.log(user.email)
// console.log(user.name)
// console.log("User's age last year was " + user.age);
// //  Here we want to increase the age
// console.log(user.age);
// user.updateUserkey()
// console.log(user.age);
// console.log(user);

// // /*
// // C. Adding keys and values
// // You have decided to add your user's location to the data that you want to collect.
// // Without changing the original userobject, add a new key locationto the object, 
// // and give it a value or some-or-other location (a string).
// // */
// console.log("\n*********  C. Adding keys and values  *********");
// user["location"] = "10 Downing St, New York, NY 10014, USA";
// console.log(user);

// // // /*
// // // D. Shopaholic!
// // // 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// // // 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// // // 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// // // 4. Console.log just the "Merino jodhpurs" from the purchasedarray.
// // // */
// console.log("\n*********  D. Shopaholic! *********");
// user.purchased.push("carbohydrates");
// user.purchased.push("peace of mind");
// user.purchased.push("Merino jodhpurs");
// console.log(user.purchased);  // to see whole array
// console.log(user.purchased[2]);

// /*
// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.
// */

// console.log("\n*********  E. Object-within-object  *********");
// user.friend = {
//     name: "Jill Smith",
//     age: 32,
//     purchased: [],
//     location: "26 Nowhere Street, VA, 20228"
// }
// console.log(user.friend.name);
// console.log(user.friend.location);
// console.log(user.friend);
// user.friend.age = 55;
// user.friend.purchased.push("The One Ring");
// user.friend.purchased.push("A latte");
// console.log(user.friend.purchased);  // to see whole array
// console.log(user.friend.purchased[1]);
// console.log(user.friend);

// /*
// F. Loops
// 1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// 2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
// */
// console.log("\n*********  F. Loops  *********");
// console.log("\n1. User's purchased array:")
// for(let i = 0; i < (user.purchased).length; i++ ){ //User's purchased array print out
//     console.log(user.purchased[i]);
// };

// console.log("\n2. user.Friend's purchased array:")
// for(let i = 0; i < (user.friend.purchased).length; i++ ){ //user.friend.purchased array print out
//     console.log(user.friend.purchased[i]);
// };

// /*
// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// 2. it should increment the user's age by 1
// 3. make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoud that performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our user object, 
// make it take a parameter person, and have it modify the object that is passed in 
// as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
// */

// console.log("\n*********  Functions can operate on objects  *********");
// console.log(user);

// // user.oldAndLoud(user);  // If this was not done before, we could take care of this one too with this function
// console.log("\nBefore calling function oldAndloud:")
// console.log(user.friend)

// console.log("\nAfter calling function oldAndLoud:")
// user.oldAndLoud(user.friend)
// console.log(user.friend);

console.log("\n*********  Cat Combinator  *********");
// 3. Cat Combinator
// 1. Mama cat
console.log("\n*********  Mama cat  *********");
const cat1 = {
    name: "tiger",
    age: 10,
    breed: "bengal"
};
console.log(cat1.age);
console.log(cat1.breed);

// 2. Papa cat
console.log("\n*********  Papa cat  *********");
const cat2 = {
    name: "lion",
    age: 14,
    breed: "mountain"
};

console.log("\ncombineCats function")
function combineCats(mama, papa){
    console.log(mama);
    console.log(papa);
    const interBreedOffspring = {
        name: mama.name+papa.name,
        age: 1 ,
        breed: (mama.breed) + "-" + (papa.breed)          
    }
    return interBreedOffspring
};

combineCats(cat1, cat2);
// Second approach to achive line above.
combineCats({ name: "tiger", age: 10, breed: "bengal" }, { name: "lion", age: 14, breed: "mountain" });
console.log(combineCats(cat1, cat2));

// 4. Cat brain bender

console.log("\n*********  Cat brain bender  *********");

console.log("*********  Two levels deep of combineCats  *********");
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

console.log("\n*********  Three levels deep of combineCats  *********");
console.log(combineCats((combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))), (combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)))));






