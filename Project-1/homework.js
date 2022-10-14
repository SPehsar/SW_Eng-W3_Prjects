// class Hamster{
//     constructor(ownerPram, nameParam = "", priceParam = 15){
//         this.owner = ownerPram,
//         this.name = nameParam,
//         this.price = priceParam
//     }

//     // Hampster class methods

// wheelRun(){
//     console.log("squeak squeak");
// } 

// eatFood(){
//     console.log("nibble nibble");
// }  
// getPrice(){
//     return this.price;
// }  

// }

// testing the Hamster class:
// const anInstanceOfHamster = new Hamster();
// anInstanceOfHamster.wheelRun();
// anInstanceOfHamster.eatFood();
// console.log(anInstanceOfHamster.getPrice());

// // Superclass - parent class named Person
// class Person {
//     constructor(nameParam, ageParam = 0, heightParam = 0, weightParam = 0, moodParam = 0, hampsterParam = [], bankAcountParam = 0) {
//         this.name = nameParam,
//         this.age = ageParam,
//         this.height = heightParam,
//         this.weight = weightParam,
//         this.mood = moodParam,
//         this.hamster = hampsterParam,
//         this.bankAcount = bankAcountParam
//     }

//     getName() {
//         return this.name;
//     }

//     getAge() {
//         return this.age;
//     }

//     getWeight() {
//         return this.weight;
//     }

//     greet()  {
//         console.log('Hello ' + this.name);
//     }
//     eat()  {
//         this.weight++;
//         this.mood++;
//     }
//     exercise()  {
//         this.weight--;
//     }
//     ageUp()   {
//         this.age++;  
//         this.height++; 
//         this.weight++; 
//         this.mood--; 
//         this.bankAcount += 10;
//     }
//     buyHamster(hamster1)  {
//         this.hamster.push(hamster1.name);
//         this.mood++; 
//         this.bankAcount -= hamster1.getPrice();

//     }
// }

// const Timmy = new Person("Timmy");
// console.log("\n****Timmy as we created it \n" + Timmy); // to make sure we see Timmy's correct attribute

// // ageing Timmy
// for(let i = 1; i <= 5; i++){
//     Timmy.ageUp();
// };

// console.log("\n****Timmy at age 5: \n" + Timmy); // to make sure we see Timmy's correct attribute

// console.log("\nTimmy's age is = "  + Timmy.age);

// console.log(Timmy); // to make sure we see Timmy's correct attribute
// console.log("\nTimmys weight initially " + Timmy.weight); // to see Timmy's weight attribute

// for(let i = 1; i <= 5; i++){
//     Timmy.exercise();
// };
// console.log("\nTimmys weight after 5 times exercise " + Timmy.weight); // to see Timmy's weight attribute

// // ageing Timmy
// for(let i = 6; i <= 14; i++){
//     Timmy.ageUp();
// };

// console.log("\n****Timmy at age 9: \n" + Timmy); // to make sure we see Timmy's correct attribute

// console.log("\nTimmy's age is = "  + Timmy.age);

// console.log(Timmy); // to make sure we see Timmy's correct attribute
// const Gus = new Hamster();
// Gus.name = "Gus";
// Gus.owner = "Timmy";
// console.log(Gus); // to make sure we see Gus's correct attribute
// console.log( Gus.getPrice()); // to make sure getPrice() works
// Timmy.buyHamster(Gus);
// console.log(Timmy); // to make sure we see Timmy's correct attribute
// // ageing Timmy
// for(let i = 15; i <= 29; i++){
//     Timmy.ageUp();
// };

// console.log("\n****Timmy at age 15: \n" + Timmy); // to make sure we see Timmy's correct attribute

// console.log("\nTimmy's age is = "  + Timmy.age);

// for(let i = 1; i <= 2; i++){
//     Timmy.eat();
//     Timmy.exercise();
// };
// console.log(Timmy); // to make sure we see Timmy's correct attribute

// Chef Make Dinners
/*Chef should be a factory of Dinner
Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
Have the Chef create 3 dinners, log the dinners
*/

class Dinner {
    constructor(appetizerParam, entreeParam, dessertParam){
        this.appetizer = appetizerParam || "None"
        this.entree = entreeParam || "None"
        this.dessert = dessertParam || "None"
    };

}

class Chef {
    constructor(customerParam){
        this.customer = customerParam,
        this.foodOrder = []

    };
    setFoodOrder( appetizerArg, entreeArg, dessertArg){
    //setFoodOrder(){
        const newDinnerOrder = new Dinner(this.foodOrder.length)
        newDinnerOrder.appetizer = appetizerArg
        newDinnerOrder.entree = entreeArg
        newDinnerOrder.dessert = dessertArg
        this.foodOrder.push(newDinnerOrder)
        
    };
    
}
const me = new Chef("Me")
// console.log(me);

console.log("\n++++++ Let's have the first dinner order and add it to array!\n")

me.setFoodOrder("Carrot", "Soup", "Icecream");
console.log("\n++++++ foodOrder array after 1st dinner order!\n");
console.log(me.foodOrder);
console.log("\n++++++ the whole object attribute after first order!\n");
console.log(me);

console.log("\n++++++ Let's have the second dinner and add it to the array that has first order!\n")

me.setFoodOrder("2 Carrots", "5 Soups", "4 Icecream bowls");
console.log("\n++++++ foodOrder array after 2nd dinner order!\n");
console.log(me.foodOrder);
console.log("\n++++++ the whole object attribute after second order!\n");
console.log(me);