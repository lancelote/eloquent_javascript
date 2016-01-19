/**
 * Created by pavel on 18.01.16.
 *
 * Design an interface that abstracts iteration over a collection of values.
 * An object that provides this interface represents a sequence, and the
 * interface must somehow make it possible for code that uses such an object to
 * iterate over the sequence, looking at the element values it is made up of
 * and having some way to find out when the end of the sequence is reached.
 *
 * When you have specified your interface, try to write a function logFive that
 * takes a sequence object and calls console.log on its first five elements—or
 * fewer, if the sequence has fewer than five elements.
 *
 * Then implement an object type ArraySeq that wraps an array and allows
 * iteration over the array using the interface you designed. Implement another
 * object type RangeSeq that iterates over a range of integers (taking from and
 * to arguments to its constructor) instead.
 *
 * Tips:
 * One way to solve this is to give the sequence objects state, meaning their
 * properties are changed in the process of using them. You could store a
 * counter that indicates how far the sequence object has advanced.
 *
 * Your interface will need to expose at least a way to get the next element
 * and to find out whether the iteration has reached the end of the sequence
 * yet. It is tempting to roll these into one method, next, which returns null
 * or undefined when the sequence is at its end. But now you have a problem
 * when a sequence actually contains null. So a separate method (or getter
 * property) to find out whether the end has been reached is probably
 * preferable.
 *
 * Another solution is to avoid changing state in the object. You can expose a
 * method for getting the current element (without advancing any counter) and
 * another for getting a new sequence that represents the remaining elements
 * after the current one (or a special value if the end of the sequence is
 * reached). This is quite elegant—a sequence value will “stay itself” even
 * after it is used and can thus be shared with other code without worrying
 * about what might happen to it. It is, unfortunately, also somewhat
 * inefficient in a language like JavaScript because it involves creating a lot
 * of objects during iteration.
 */


function logFive(sequence) {
    while (true) {
        if (!sequence.next()) break;
        console.log(sequence.current());
    }
}


function ArraySeq(array) {
    this.pos = -1;
    this.array = array
}

ArraySeq.prototype.next = function () {
    if (this.pos >= this.array.length - 1) {
        return false;
    } else {
        this.pos += 1;
        return true;
    }
};

ArraySeq.prototype.current = function () {
    return this.array[this.pos];
};


function RangeSeq(start, end) {
    this.pos = start;
    this.end = end;
}

RangeSeq.prototype.next = function () {
    if (this.pos >= this.end) {
        return false;
    } else {
        this.pos += 1;
        return true;
    }
};

RangeSeq.prototype.current = function () {
    return this.pos;
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
