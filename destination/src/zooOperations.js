"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnimalToCage = addAnimalToCage;
exports.compareAnimalToCageProps = compareAnimalToCageProps;
exports.calculateAmountOfFoodForCage = calculateAmountOfFoodForCage;
exports.isAnimalHasNeededType = isAnimalHasNeededType;
function addAnimalToCage(animal, cage) {
    if (compareAnimalToCageProps(animal, cage)) {
        cage.members.push(animal);
        cage.square = cage.square - animal.neededSquare;
        console.log(animal.name + "added to cage");
        console.log("current square of cage is " + cage.square);
        return true;
    }
    else {
        console.error("There's no space to add " + animal.name);
        return false;
    }
}
function compareAnimalToCageProps(animal, cage) {
    if (cage.square - animal.neededSquare >= 0 &&
        cage.biom == animal.neededBiom &&
        cage.hasReservoir == animal.needOfReservoir &&
        cage.isForPredators == animal.isPredator) {
        return true;
    }
    else {
        return false;
    }
}
function calculateAmountOfFoodForCage(cage) {
    let amountOfFood = 0;
    if (cage.members.length == 0) {
        console.log("Cage is empty");
        return amountOfFood;
    }
    else {
        for (let i = 0; i < cage.members.length; i++) {
            amountOfFood = amountOfFood + cage.members[i].necessaryFood;
        }
    }
    return amountOfFood;
}
function isAnimalHasNeededType(animal, cage) {
    return animal.isPredator == cage.isForPredators ? true : false;
}
