/**
 * Created by pavel on 11.01.16.
 *
 * Use the reduce method in combination with the concat method to “flatten” an
 * array of arrays into a single array that has all the elements of the input
 * arrays.
 */

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function (x, y) {return x.concat(y)}));
