# HOF #
HOF: means Higher Order Function. you will always hear callback when it comes to HOF. and this means a function calling a function

In JavaScript, a higher-order function is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.
This ability allows for more flexible and concise code, especially when dealing with operations on collections of data.

**HOF** are functions which takes another function as a parameter or return a function as a value. the function passed as a parameter is call a callback

Why Use Higher-Order Functions?
Higher-order functions can simplify your code by:

1. Reducing redundancy
2. Increasing readability
3. Enhancing modularity

## MOST USED CALL BACK FUNCTIONS ##
* setTimeOut
* setInterval
* ForEach
* map
* filter
* reduce
* find
* every 
* some

## map ##
The map function creates a new array by applying a given function to each element of the original array.
## filter ##
The filter function creates a new array containing all the elements that pass a test implemented by a given function.

## reduce ##
reduce takes a callback function, the callback function takes accumulator,current and optional initial value as parameters  and return a single value.
it is a good paractice to define an initial value value for the accumulator value.if we do not specify this value by default the accumulator the array first value.if our array is an empty array then javascript will throw and error

## setTimeOut ##
The setTimeout() method of the Window interface sets a timer which executes a function or specified piece of code once the timer expires.

## ForEach ##

## Destructuring, spread and rest ##