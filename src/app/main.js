import Point from './Point.js';
import * as library from 'webpack-library-starter';
import * as numConvString from '../../node_modules/num-conv-string/lib/num-conv-string.umd.min.js';

const cat = new library.Cat();
const dog = new library.Dog();

var body = document.querySelector('body');
body.innerHTML = 'Testing es6 internal classes and es6 and es5 external libraries:' +  '<br>' +  '<br>' +
    '- (es6 internal) A new point: ' + new Point(3, 25) + '<br>' +
    '- (es6->es5 lib) The Dog name: ' + dog.name + '<br>' +
    '- (es6->es5 lib) The Cat name: ' + cat.name + '<br>' +
    '- (es5 lib umd)  numToWord(1): ' + numConvString.numToWord(1) + '<br>' +
    '- (es5 lib umd)  wordToNum(Eins): ' + numConvString.wordToNum('Eins') + '<br>' +
    '';

