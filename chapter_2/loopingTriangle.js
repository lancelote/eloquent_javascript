/**
 * Write a loop that makes seven calls to console.log to output the following triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 **/

var output = '#';
for (var i = 0; i < 7; i++) {
    console.log(output);
    output += '#'
}
