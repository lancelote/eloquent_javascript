/**
 * Created by pavel on 11.01.16.
 *
 * Using the example data set from this chapter, compute the average age
 * difference between mothers and children (the age of the mother when the
 * child is born). You can use the average function defined earlier in this
 * chapter.
 *
 * Note that not all the mothers mentioned in the data are themselves present
 * in the array. The byName object, which makes it easy to find a person’s
 * object from their name, might be useful here.
 */

var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});


function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}


function hasKnownMother(person) {
    return byName[person.mother] != null;
}


function motherChildDiff(person) {
    return person.born - byName[person.mother].born;
}

var differences = ancestry.filter(hasKnownMother).map(motherChildDiff);
console.log(average(differences));
// → 31.2
