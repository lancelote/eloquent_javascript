/**
 * Created by pavel on 02.02.16.
 *
 * Having the inhabitants of our world go extinct after a few minutes is kind
 * of depressing. To deal with this, we could try to create a smarter plant
 * eater.
 *
 * There are several obvious problems with our herbivores. First, they are
 * terribly greedy, stuffing themselves with every plant they see until they
 * have wiped out the local plant life. Second, their randomized movement
 * (recall that the view.find method returns a random direction when multiple
 * directions match) causes them to stumble around ineffectively and starve if
 * there don’t happen to be any plants nearby. And finally, they breed very
 * fast, which makes the cycles between abundance and famine quite intense.
 *
 * Write a new critter type that tries to address one or more of these points
 * and substitute it for the old PlantEater type in the valley world. See how
 * it fares. Tweak it some more if necessary.
 *
 * Hints:
 *
 * The greediness problem can be attacked in several ways. The critters could
 * stop eating when they reach a certain energy level. Or they could eat only
 * every N turns (by keeping a counter of the turns since their last meal in a
 * property on the creature object). Or, to make sure plants never go entirely
 * extinct, the animals could refuse to eat a plant unless they see at least
 * one other plant nearby (using the findAll method on the view). A combination
 * of these, or some entirely different strategy, might also work.
 *
 * Making the critters move more effectively could be done by stealing one of
 * the movement strategies from the critters in our old, energyless world. Both
 * the bouncing behavior and the wall-following behavior showed a much wider
 * range of movement than completely random staggering.
 *
 * Making creatures breed more slowly is trivial. Just increase the minimum
 * energy level at which they reproduce. Of course, making the ecosystem more
 * stable also makes it more boring. If you have a handful of fat, immobile
 * critters forever munching on a sea of plants and never reproducing, that
 * makes for a very stable ecosystem. But no one wants to watch that.
 */

function SmartPlantEater() {
    this.energy = 20;
}

SmartPlantEater.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var plant = view.find("*");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
};
