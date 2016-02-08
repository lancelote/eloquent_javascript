/**
 * Created by pavel on 08.02.16.
 *
 * It is a box with a lock. Inside is an array, but you can get at it only when
 * the box is unlocked. Directly accessing the _content property is not
 * allowed.
 *
 * Write a function called withBoxUnlocked that takes a function value as
 * argument, unlocks the box, runs the function, and then ensures that the box
 * is locked again before returning, regardless of whether the argument
 * function returned normally or threw an exception.
 *
 * For extra points, make sure that if you call withBoxUnlocked when the box
 * is already unlocked, the box stays unlocked.
 *
 * Hints:
 *
 * This exercise calls for a finally block, as you probably guessed. Your
 * function should first unlock the box and then call the argument function
 * from inside a try body. The finally block after it should lock
 * the box again.
 *
 * To make sure we don’t lock the box when it wasn’t already locked, check its
 * lock at the start of the function and unlock and lock it only when it
 * started out locked.
 */

var box = {
    locked: true,
    unlock: function() {
        "use strict";
        this.locked = false;
    },
    lock: function() {
        "use strict";
        this.locked = true;
    },
    _content: [],
    get content() {
        "use strict";
        if (this.locked) {
            throw new Error("Locked!");
        }
        return this._content;
    }
};


function withBoxUnlocked(body) {
    "use strict";
    if (!box.locked) { return body(); }

    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function() {
    "use strict";
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        "use strict";
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log(box.locked);
// → true
