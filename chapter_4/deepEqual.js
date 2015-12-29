/**
 * Created by pavel on 28.12.15.
 *
 * The == operator compares objects by identity. But sometimes, you would
 * prefer to compare the values of their actual properties.
 *
 * Write a function, deepEqual, that takes two values and returns true only if
 * they are the same value or are objects with the same properties whose values
 * are also equal when compared with a recursive call to deepEqual.
 *
 * To find out whether to compare two things by identity (use the === operator
 * for that) or by looking at their properties, you can use the typeof
 * operator. If it produces "object" for both values, you should do a deep
 * comparison. But you have to take one silly exception into account: by a
 * historical accident, typeof null also produces "object".
 */

function deepEqual(array1, array2) {
    var comparison;
    var prop;
    var lengthA = 0;
    var lengthB = 0;

    // Calculate array1 length
    for (prop in array1) {
        lengthA += 1;
    }

    // Calculate array2 length
    for (prop in array2) {
        lengthB += 1;
    }

    // Check if array length is different
    if (lengthA !== lengthB) {
        return false;
    }

    for (var property in array1) {
        if (array1.hasOwnProperty(property)) {
            if (typeof array1[property] === "object" && array1[property] != null) {
                comparison = deepEqual(array1[property], array2[property]);
            } else {
                comparison = array1[property] === array2[property]
            }
            if (!comparison) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
