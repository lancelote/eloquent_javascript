/**
 * Created by pavel on 02.02.16.
 *
 * Any serious ecosystem has a food chain longer than a single link. Write
 * another critter that survives by eating the herbivore critter. You’ll notice
 * that stability is even harder to achieve now that there are cycles at
 * multiple levels. Try to find a strategy to make the ecosystem run smoothly
 * for at least a little while.
 *
 * One thing that will help is to make the world bigger. This way, local
 * population booms or busts are less likely to wipe out a species entirely,
 * and there is space for the relatively large prey population needed to
 * sustain a small predator population.
 *
 * Hints:
 *
 * Many of the same tricks that worked for the previous exercise also apply
 * here. Making the predators big (lots of energy) and having them reproduce
 * slowly is recommended. That’ll make them less vulnerable to periods of
 * starvation when the herbivores are scarce.
 *
 * Beyond staying alive, keeping its food stock alive is a predator’s main
 * objective. Find some way to make predators hunt more aggressively when
 * there are a lot of herbivores and hunt more slowly (or not at all) when
 * prey is rare. Since plant eaters move around, the simple trick of eating
 * one only when others are nearby is unlikely to work—that’ll happen so
 * rarely that your predator will starve. But you could keep track of
 * observations in previous turns, in some data structure kept on the predator
 * objects, and have it base its behavior on what it has seen recently.
 */

function Tiger() {
    this.energy = 100;
    this.direction = "w";
    // Used to track the amount of prey seen per turn in the last six turns
    this.preySeen = [];
}

Tiger.prototype.act = function(view) {
    // Average number of prey seen per turn
    var seenPerTurn = this.preySeen.reduce(function(a, b) {
            return a + b;
        }, 0) / this.preySeen.length;
    var prey = view.findAll("O");
    this.preySeen.push(prey.length);
    // Drop the first element from the array when it is longer than 6
    if (this.preySeen.length > 6)
        this.preySeen.shift();

    // Only eat if the predator saw more than ¼ prey animal per turn
    if (prey.length && seenPerTurn > 0.25)
        return {type: "eat", direction: randomElement(prey)};

    var space = view.find(" ");
    if (this.energy > 400 && space)
        return {type: "reproduce", direction: space};
    if (view.look(this.direction) != " " && space)
        this.direction = space;
    return {type: "move", direction: this.direction};
};
