# Part 1 - Javascript Questions

Quotes are included to seperate the output of the code versus my explanation, what the console is outputted is the items within the quotes. The boldness of the text is to highlight my responses.

### Question 1

On line 9, what is printed is **"values added: 20"**. This is because result is function scoped due to the `var` keyword, and the value of result is instantiated to 0 on line 5, and assigned value `result = num1 + num2' on line 9. This code **does not** return an error.

### Question 2

What is printed on line 13 is **"final result: 20"**. This is because the `result` variable is function scoped due to the `var` keyword, so it is still accessible even beyond the `if(add)` block. **No Error**

### Question 3

What's printed on line 9 is that is **"values added: 20"**. This is because the `result` variable is still found in the block scope of the `if(add)` block, so it is still accessible because it was declared with the `let` keyword. **No Error YET**, there will be an error that occurs later on line 13, as we try to print out a value that is block scoped.

### Question 4

This code on line 13 **Will return an error**, this is because the `result` variable is block scoped and contained within the `if(add)` block as it was declared using `let` within this block. Outside of this code segment, the `result` variable is not accessible and so if we try to access it on line 13, it will return an error because it was never defined.

### Question 5

This code **Will return an error**, we attempt to modify a `const` field as we have declared `result` as a constant variable on line 5. This means we cannot change/modify the value of `result` similar to FINAL variables in Java. So on line 7 when we attempt to change the value of `result`, it will return an error(before reaching the print statement on line 9).

### Question 6

Likewise, this code **will return an error** as we attempted to not only modify a `const` field in line 7, `result` is a const variable and is _block_scoped_ similar to `let`. Thus we won't even be able to access this variable on line 13, as it is not defined outside of the `if(add)` block.
