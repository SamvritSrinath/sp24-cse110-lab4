# Dev Tools Part 2

1. The bug present within the code was the fact that the inputs `num1` and `num2` were both strings. And calculate sum simply let `result` be the addition of `num1` and `num2`, this operation would concatenate the two strings rather than add them together. I.e. if we had two inputs `num1 = 4` and `num2 = 5`, we would expect the sum to be `9`, but we would get `45` due to string concatenation. That was the bug, not forcing the inputs to be numbers.
2. To fix the bug, there were two ways that I could think of, either in the selector we could add a `parseInt()` wrapper around getting the values of `num1` and `num2`, or we could typecast the values of `num1` and `num2` to numbers within the `calculateSum` function using `Number()`. Both of these fixes would work, but I chose to use