# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lenilsamuel/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: Function that checks whether two arrays are equal.
* `eqObjects`: Function that checks whether two objects are equal.
* `head`: Function that returns the first value of an array.
* `tail`: Function that returns the last value of an array. Function does not change the original (provided) array
* `flatten`: Function that takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `assertEqual`: Simple test function that compares two values and checks whether they are strictly equal.
* `assertArraysEqual`: Simple test function that compares two arrays and checks whether they are strictly equal using the eqArrays function.
* `without`: Function that removes an unwanted element (provided) and returns a subset of the array without the provided unwanted element. 
* `middle`: Function that returns the middle element of an array. If the array is even-numbered, it returns an array with the two elements in the middle.
* `countOnly`: Function that takes in a collection of items and return counts for a specific subset of those items that are provided. 
* `countLetters`: Function that takes in a sentence as a string and returns a count of each letter in the sentence. 
* `letterPositions`: Function that returns all the indices in a given string where each character is found.
* `findKeyByValue`: Function that searches for a key on an object where its value matches a given value. 
* `assertObjectsEqual`: Simple test function that compares two objects and checks whether they are equal. 
* `assertObjectsEqual`: Simple test function that compares two objects and checks whether they are equal. 
* `takeUntil`: Function that accepts and array and a callback function and returns a slice of the array including all elements until the passed in 'filter' value via the callback. 
* `findKey`: Function that takes in an object and a callback and checks the object. It returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined.
