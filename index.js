/* Example Challenge
 * Print out "hello world" in the console
 *
 * Steps:
 * 1. Use `console.log` to print out "hello world"
 *
 * Example Output: "hello world"
 */

console.log('hello world')

/* Challenge #1
 * Create a variable and print the value
 *
 * Steps:
 * 1. Create a variable and assign it any value
 * 2. Use `console.log` to print out your variable
 *
 * Example Output: n/a
 */
// TODO: ADD CODE HERE
 function any_value(any_var){
     console.log(any_var);
 }
var any_var ="This is any value fanctions";
console.log("Question 1:");
any_value("Answer: "+any_var);



/* Challenge #2
 * Create variables for your first and last name then print your full name
 *
 * Steps:
 * 1. Create a variable called `firstName` and assign your first name as the string value
 * 2. Create a variable called `lastName` and assign your last name as the string value
 * 3. Use `console.log` to print out your full name (make sure there's a space!)
 *
 * Example Output: "Elizabeth Thompson"
 */
// TODO: ADD CODE HERE
 first_name = "Sinan";
 last_name = "Cengiz";
 console.log("Question 2:");
 console.log("Answer: "+"First Name is " + first_name + ", Last Name is " +last_name );



/* Challenge #3
 * Calculate the total price rounded to two decimals
 *
 * Steps:
 * 1. Create a variable called `price` and assign a float value (ex. 9.98)
 * 2. Create a variable called `quantity` and assign an integer value (ex. 5)
 * 3. Create a variable called `total` and assign the value of `price` multiplied by `quantity`
 * 4. Use `console.log` to print out the `total` (rounded to the nearest two decimals)
 *
 * Example Output: "$49.90"
 */
// TODO: ADD CODE HERE
 price = 9.98;
 quantity = 5;
 total = price * quantity
 console.log("Question 3:");
 console.log("Answer: "+"Total is "+total.toFixed(2))



/* Challenge #4
 * Declare a variable and conditionally assign it a value
 *
 * Steps:
 * 1. Create a variable called `weather` and assign "Rainy" as the string value
 * 2. Declare a variable called `message` and don't assign it a value
 * 3. Create a conditional statement that checks if `weather` is equal to "Sunny"
 * 4. If `weather` meets the condition above, then set `message` equal to "Yay! It's sunny outside"
 * 5. Add an `else` clause that sets `message` equal to "Aww! It's not sunny outside"
 * 6. Use `console.log` to print out the value of `message`
 *
 * Example Output: "Aww! It's not sunny outside"
 */
// TODO: ADD CODE HERE
weather = "Rainy";
var message;
if (weather == "Sunny"){
    message = "Yay! It's sunny outside";
}
else{
    message = "Aww! It's not sunny outside";
}
console.log("Question 4:");
console.log("Answer: "+message)




/* Challenge #5
 * Create a function that returns any string
 *
 * Steps:
 * 1. Create a function called `myFunction` using the function keyword
 * 2. Add a return statement in your function which returns a random string
 * 3. Use `console.log` to print out the output of `myFunction()`
 *
 * Example Output: "I called a function!"
 */
// TODO: ADD CODE HERE
function myFunction(){
    //generate a random string
    random_string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    return "Random "+typeof(random_string)+": " + random_string;
}
console.log("Question 5:");
console.log("Answer: "+myFunction())

/* Challenge #6
 * Rewrite the function in Challenge #5 as an arrow function
 *
 * Steps:
 * 1. Create a function called `myArrowFunction` using the arrow syntax
 * 2. Add a return statement in your function which returns a random string
 * 3. Use `console.log` to print out the output of `myArrowFunction()`
 *
 * Example Output: "I called an arrow function!"
 */
myArrowFunction = () => {
    //generate a random string
    random_string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    return "Random "+typeof(random_string)+": " + random_string ;
}
console.log("Question 6:");
console.log("Answer: "+myArrowFunction())


// TODO: ADD CODE HERE

/* Challenge #7
 * Create a function that accepts a string argument and returns it in all uppercase
 *
 * Steps:
 * 1. Create a function called `stringToUpper`
 * 2. Add a parameter called `str` in your function signature
 * 3. Add a return statement in your function which returns the input string in all uppercase letters
 * 4. Use `console.log` to print out the output of `stringToUpper(str)`
 *
 * Example Output: "WHY AM I SCREAMING"
 */
stringToUpper = (str) => {
    return str.toUpperCase() 
}
console.log("Question 7:");
console.log(stringToUpper("Answer: "+"return uppercase of this string"))


// TODO: ADD CODE HERE

/* Challenge #8
 * Create a function that accepts a number argument and returns double its value
 *
 * Steps:
 * 1. Create a function called `multiplyByTwo`
 * 2. Add a parameter called `number` in your function signature
 * 3. Add a return statement in your function which returns `number` times two
 * 4. Create a variable called `num1` and assign it to the result of `multiplyByTwo(1)`
 * 5. Create a variable called `num2` and assign it to the result of `multiplyByTwo(5)`
 * 6. Create a variable called `num3` and assign it to the result of `multiplyByTwo(10)`
 * 7. Use `console.log` to print out the value of `num1`, `num2`, and `num3`
 *
 * Example Output: 2, 10, 20
 */

// TODO: ADD CODE HERE
multiplyByTwo = (number) => {
    return number* 2 
}

num1 = multiplyByTwo(1)
num2 = multiplyByTwo(5)
num3 = multiplyByTwo(10)
console.log("Question 8:");
console.log("Answer: "+`Num1: ${num1},  Num2: ${num2}, Num3: ${num3}`)
