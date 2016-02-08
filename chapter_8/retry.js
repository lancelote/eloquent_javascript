/**
 * Created by pavel on 08.02.16.
 *
 * Say you have a function primitiveMultiply that, in 50 percent of cases,
 * multiplies two numbers, and in the other 50 percent, raises an exception
 * of type MultiplicatorUnitFailure. Write a function that wraps this clunky
 * function and just keeps trying until a call succeeds, after which it
 * returns the result.
 *
 * Make sure you handle only the exceptions you are trying to handle.
 *
 * Hints:
 *
 * The call to primitiveMultiply should obviously happen in a try block.
 * The corresponding catch block should rethrow the exception when it is not
 * an instance of MultiplicatorUnitFailure and ensure the call is retried when
 * it is.
 *
 * To do the retrying, you can either use a loop that breaks only when a call
 * succeeds—as in the look example earlier in this chapter—or use recursion
 * and hope you don’t get a string of failures so long that it overflows the
 * stack (which is a pretty safe bet).
 */


function MultiplicatorUnitFailure() {}


function primitiveMultiply(a, b) {
    "use strict";
    if (Math.random() < 0.5) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure();
    }
}


function reliableMultiply(a, b) {
    "use strict";
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure)) {
                throw e;
            }
        }
    }
}
