/**
 * Created by pavel on 26.02.16.
 *
 * Code golf is a term used for the game of trying to express a particular
 * program in as few characters as possible. Similarly, regexp golf is the
 * practice of writing as tiny a regular expression as possible to match a
 * given pattern, and only that pattern.
 *
 * For each of the following items, write a regular expression to test whether
 * any of the given substrings occur in a string. The regular expression should
 * match only strings containing one of the substrings described. Do not worry
 * about word boundaries unless explicitly mentioned. When your expression works,
 * see whether you can make it any smaller.
 *
 *  + car and cat
 *  + pop and prop
 *  + ferret, ferry, and ferrari
 *  + Any word ending in ious
 *  + A whitespace character followed by a dot, comma, colon, or semicolon
 *  + A word longer than six letters
 *  + A word without the letter e
 *
 * Refer to the table in the chapter summary for help. Test each solution with a
 * few test strings.
 */

verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop"]);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s[\.,:;]/,
    ["bad punctuation ."],
    ["escape the dot"]);

verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[a-df-z]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    yes.forEach(function(s) {
        if (!regexp.test(s))
            console.log("Failure to match '" + s + "'");
    });
    no.forEach(function(s) {
        if (regexp.test(s))
            console.log("Unexpected match for '" + s + "'");
    });
}
