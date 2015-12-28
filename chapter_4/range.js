/**
 * Created by pavel on 28.12.15.
 *
 * Write a range function that takes two arguments, start and end, and returns
 * an array containing all the numbers from start up to (and including) end.
 *
 * Next, write a sum function that takes an array of numbers and returns the
 * sum of these numbers. Run the previous program and see whether it does
 * indeed return 55.
 *
 * As a bonus assignment, modify your range function to take an optional third
 * argument that indicates the “step” value used to build up the array. If no
 * step is given, the array elements go up by increments of one, corresponding
 * to the old behavior. The function call range(1, 10, 2) should return
 * [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
 * range(5, 2, -1) produces [5, 4, 3, 2].
 */

function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            array.push(i)
        }
    } else if (step < 0) {
        for (var j = start; j >= end; j += step) {
            array.push(j)
        }
    }
    return array
}

function sum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 10, 1));
