/**
 * Created by pavel on 11.01.16.
 *
 * When we looked up all the people in our data set that lived more than
 * 90 years, only the latest generation in the data came out. Let’s take
 * a closer look at that phenomenon.
 *
 * Compute and output the average age of the people in the ancestry data set
 * per century. A person is assigned to a century by taking their year of death,
 * dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
 *
 * For bonus points, write a function groupBy that abstracts the grouping
 * operation. It should accept as arguments an array and a function that
 * computes the group for an element in the array and returns an object that
 * maps group names to arrays of group members.
 *
 * Tips:
 *
 * The essence of this example lies in grouping the elements of a collection
 * by some aspect of theirs—splitting the array of ancestors into smaller
 * arrays with the ancestors for each century.
 *
 * During the grouping process, keep an object that associates century names
 * (numbers) with arrays of either person objects or ages. Since we do not
 * know in advance what categories we will find, we’ll have to create them on
 * the fly. For each person, after computing their century, we test whether
 * that century was already known. If not, add an array for it. Then add the
 * person (or age) to the array for the proper century.
 *
 * Finally, a for/in loop can be used to print the average ages for the
 * individual centuries.
 */

var ancestry = JSON.parse(ANCESTRY_FILE);


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}


function groupBy(array, sort) {
    var groups = {};
    array.forEach(function (item) {
        var group = sort(item);
        if (group in groups) {
            groups[group].push(item);
        } else {
            groups[group] = [item];
        }
    });
    return groups;
}


function byCentury(person) {
    return Math.ceil(person.died / 100)
}

var groupedData = groupBy(ancestry, byCentury);
for (var century in groupedData) {
    if (groupedData.hasOwnProperty(century)) {
        var ages = groupedData[century].map(function (person) {
            return person.died - person.born;
        });
    }
    console.log(century + ": " + average(ages))
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
