/**
 * Created by pavel on 11.01.16.
 *
 * Arrays also come with the standard methods every and some. Both take a
 * predicate function that, when called with an array element as argument,
 * returns true or false. Just like && returns a true value only when the
 * expressions on both sides are true, every returns true only when the
 * predicate returns true for all elements of the array. Similarly, some
 * returns true as soon as the predicate returns true for any of the elements.
 * They do not process more elements than necessary—for example, if some finds
 * that the predicate holds for the first element of the array, it will not
 * look at the values after that.
 *
 * Write two functions, every and some, that behave like these methods, except
 * that they take the array as their first argument rather than being a method.
 *
 * Hints:
 *
 * The functions can follow a similar pattern to the definition of forEach at
 * the start of the chapter, except that they must return immediately (with
 * the right value) when the predicate function returns false—or true. Don’t
 * forget to put another return statement after the loop so that the function
 * also returns the correct value when it reaches the end of the array.
 */


function every(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false
        }
    }
    return true
}


function some(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return true
        }
    }
    return false
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
