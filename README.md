# es6-es5-lib-test

A small test project to show how to integrate ES5 and ES6 libraries into an ECMAScript 6 project.
The es5 library has a transient dependeny to lodash.

## Installation

* Install  [node](https://nodejs.org)
* run `npm install`

## Usage

* `npm run watch` to start Webpack in watch mode - will recompile when you change a file.
* `npm run serve` to start Webpack  Server in hot reload mode - will recompile when you change a file.
* Change or add files in `src/app` folder. `main.js` is the entry point.
* Reload the browser when you have made a change.

## Result in the browser

Testing es6 internal classes and es6 and es5 external libraries:

- (es6 internal) A new point: (3, 25)
- (es6->es5 lib) The Dog name: Dog
- (es6->es5 lib) The Cat name: Cat
- (es5 lib umd) numToWord(1): Eins
- (es5 lib umd) wordToNum(Eins): 1

