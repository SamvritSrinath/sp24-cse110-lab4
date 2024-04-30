# Part 2 - More Involved JS Questions

## Part 2.1 - Reading Code and Data Types

### Question 1

On line 12: `console.log(i)`, the value `3` will be printed out. Since `i` was declared as `var i` within the for loop, that means this variable is function scoped and not block scoped. Therefore since we iterate through our array of prices, the last value of `i` after the exit condition will be `3`(i.e. we will continue to loop until `i` is no longer less than the length of the array). So the value at line 12 of i will be 3 and that will be printed to console.

### Question 2

Likewise on line 13, `console.log(discountedPrice)`, the value `150` will be printed out. This is because the variable `discountedPrice` is declared as `var discountedPrice` within the for loop. Therefore, it is function scoped and not block scoped. The last price in the array is `300`, and since we are iterating through the array with a discount of 0.5, the final value of `discountedPrice` will be `150` and that will be printed to console.

### Question 3

On line 14, `console.log(finalPrice)`, the value `150` will be printed out. Since this is also declared as _var_ before the for loop. The final price is the same as the discounted price(in this case, as the Math.round function does not change the value of the discounted price). Therefore, the final price will be `150` and that will be printed to console.

### Question 4

The functoin will return the array `[50,100,150]` as the final output. This is because the function's goal is to apply the discount to each price in `prices`. So we had an array of `[100,200,300]` and we applied a discount of 0.5 to each value. Therefore, the final array will be `[50,100,150]` and that will be returned by the function.

### Question 5

The function **Will Error** because the loop variable `i` is declared using `let` and as such is block scoped to only that for loop. In line 12 when we attempt to access `i` outside of the for loop, it will not be accessible and will throw an error.

### Question 6

Similar to Question 5, the code shown **Will Error** because the variable `discountedPrice` is declared using `let` and is block scoped to only the for loop. Therefore, when we attempt to access `discountedPrice` outside of the for loop, it will not be accessible and will throw an error. Even though we use `discountedPrice` within the computation and push it to `discounted`, this variable itself is not accessible outside of the for loop.

### Question 7

The code at _line 14_ will print out `150` as its output. This is because the variable `finalPrice` is declared using `let`, but it's block is the entire function(it is not nested in any other block), so it is accessible throughout the function. So because the `console.log` statement is still within the scope of `finalPrice`, it will print out the value of `finalPrice` which is computed in the last for-loop iteration, which is 300 \* 0.5 = 150.

### Question 8

The function will print out `[50,100,150]` as the function's output. This is because the function is called with a discount of 50 and prices of `[100,200,300]`. The function then iterates through the prices array and applies the discount to each price. The final array will be `[50,100,150]` and that will be returned by the function. There are no errors present and all variables are in scope, so the function will run as expected.

### Question 9

At line 11, if we attempt to `console.log(i)` with `i` being declared with `let`, the code **Will Error**. This is because the variable `i` is block scoped to the for loop and is not accessible outside of the for loop. Therefore, when we attempt to access `i` outside of the for loop, it will not be accessible and will throw an error.

### Question 10

At line 12, `3` will be printed out because the variable `length` is never modified and is set to the length of the `prices` array upon initialization with `const` on line 4. Also, the block that the `length` variable is declared is the entire function, so it is still accessible at line 12. Therefore, the value of `length` will be `3` and that will be printed to console.

### Question 11

The function will correctly return `[50,100,150]` as its output. Even though `discounted` is declared as `const` what this means is that its reference cannot be reassigned to another array. The array object that `discounted` points to can still be modified. Therefore we can _push_ values to the `discounted` array and the function will return `[50,100,150]` as expected as we itearte through the prices array and apply the discount to each price.

### Question 12

#### Part A

`student["name"]`

#### Part B

`student["Grad Year"]`

#### Part C

`student.greeting()`

#### Part D

`student["Favorite Teacher"]["name"]`

#### Part E

`student.courseLoad[0]`

### Question 13

#### Part A

`'32'` will be printed to the console. This is because the `3` and `2` are concatenated as strings(not numbers). Therefore, the output will be `'32'`.

#### Part B

`1` will be printed to the console. This is because the `3` and `2` are converted to numbers and added together. Therefore, the output will be `1`. Oddly enough, while adding interprets and enforces the string type and does concatenation, subtracting converts the strings to numbers and performs the subtraction.

#### Part C

`3` will be printed to the console. The `null` value is interpreted as `0` and has no effect on the addition of `3` and `0`. Therefore, the output will be `3`.

#### Part D

`3null` will be printed to the console. This is because the `null` value is converted to a string and concatenated with the string `'3'`. Therefore, the output will be `'3null'`. The string type is enforced in contrast to Part C because 3 was a string and the `null` value was coerced to a string to match the type of `3`.

#### Part E

`4` will be printed to the console. The `true` value is interpreted as `1`(and conversely `false` is interpreted as 0) and added to the number `3`. Therefore, the output will be `4` as `3 + 1 = 4`.

#### Part F

`0` will be printed to the console. The `false` value is interpreted as `0`, likewise the `null` value is also interpreted as 0. Since neither of them were declared as strings, they are interpreted as numbers and added together. Therefore, the output will be `0`.

#### Part G

`3undefined` will be printed to the console. This is because the `undefined` value is converted to a string and concatenated with the string `'3'`. Therefore, the output will be `'3undefined'`.

#### Part H

`NaN` will be printed to the console. This is because the `undefined` value is not a number and cannot be subtracted from the number `3`. Therefore, the output will be `NaN`. Although `3` in this case was declared as a string, the `undefined` value is not a number and cannot be subtracted from `3`, like Part B, the subtraction symbol coerces the strings to numbers and performs the subtraction.

### Question 14

#### Part A

`true` will be printed to the console. This is because the comparison will interpret the first field `'2'` as a number and then perform the comparison. Since the number `2` is greater than `1`, the output will be `true`.

### Part B

`false` will be printed to the console. This is because this is a **comparison of strings**, and `'12'` is lexically greater than `'2'`. Therefore, the output will be `false`.

### Part C

`true` will be printed to the console. This is because the comparison will interpret the first field `'2'` as a number and then perform the comparison. Since the number `2` is equal to `2`, the output will be `true`. This check does not enforce type equality, so the string `'2'` is converted to a number and compared to the number `2`. Since the values are the same, the statement will return true.

### Part D

`false` will be printed to the console. This is because the comparison will interpret the first field `'2'` as a number and then perform the comparison. Even though the _values are the same_, the _type is not the same_ as the number `2` is not equal to the string `'2'`. Therefore, the output will be `false`.

### Part E

In this case, `false` will be printed to the console. This is because the comparison will interpret `true` as the number `1` and then perform the comparison. Since the number `1` is not equal to the number `2`, the output will be `false`.

### Part F

`true` will be printed to the console. This is because the comparison will interpret `true` as the number `1` and then perform the comparison. Likewise, using the explicit `Boolean` converter will convert 2 to `true` as it is a value greater than 0(and is not one of the edge cases that would convert to `false`). Therefore, the output will be `true` as `true === Boolean(2)` as both types are Boolean and the values are the same.

### Question 15

The difference between the `==` operator and the `===` operator is one explicitly checks for type equality and the other does not. Both typecast values to the same type before performing the comparison(either string, Boolean or float/int). However, the `==` is less rigorous as if the type-casted values are the same, then the statement returns true. This is only one of the conditions that the `===` operator checks for. The `===` operator checks for both type and value equality. If the types are different, the statement will return false. If the types are the same, then the values are compared. If the values are the same, the statement will return true. If the values are different, the statement will return false. Therefore, the `===` operator is more rigorous and checks for both type and value equality in contrast to just checking for value equality like the `==` operator.

### Question 16

See Javascript File for code submission: `part2-question16.js` or click this link: [part2-question16.js](part2-question16.js)

### Question 17

The code will output `[2,4,6]` as its final output. This is because `doSomething` is listed as its callback and we initially pass in an array of `[1,2,3]`. We create a new array and start to iterate through the array passed in. We then apply the callback function to each element in the array, and for each element we multiply it by 2. This is the value that is **pushed into the array**, not the original value. Therefore, the final array will be `[2,4,6]` and that will be printed to console.

### Question 18

See my code in the Javascript file: `part2-question18.js` or click this link: [part2-question18.js](part2-question18.js)

To make the program output the time every second, we must use `setInterval` to write the time to the console every second, setting an Interval or a Delay of 1000 milliseconds.

### Question 19

The output of this code will be `1 \n 4 \n 3 \n 2`. This is because the `setTimeout` function is asynchronous and will allow the rest of the code to continue executing until the Timeout is completed. Similar to Promises in React, the setTimeout will enable 1 and 4 to be printed out with no delay, as they do not have a timeout. Following this, the `setTimeout` function will execute and print out 3 after 3 seconds. Finally, 2 will be printed out after 0 seconds as it has a timeout of 0 seconds.
