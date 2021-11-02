const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const flatten = require("./flatten");
const map = require("./map");
const letterPositions = require("./letterPositions");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const takeUntil = require("./takeUntil");
const without = require("./without");
const findKeyByValue = require("./findKeyByValue");
const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const assertObjectsEqual = require("./assertObjectsEqual");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArrayEqual");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  flatten: flatten,
  map: map,
  letterPositions: letterPositions,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  takeUntil: takeUntil,
  without: without,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
};
