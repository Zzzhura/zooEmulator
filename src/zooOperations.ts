import { Animal, Cage, Zoo } from "./TaskInterfaces";

export function addAnimalToCage(animal: Animal, cage: Cage) {
  if (compareAnimalToCageProps(animal, cage)) {
    cage.members.push(animal);
    cage.square = cage.square - animal.neededSquare;
    console.log(animal.name + "added to cage");
    console.log("current square of cage is " + cage.square);
    return true;
  } else {
    console.error("There's no space to add " + animal.name);
    return false;
  }
}

export function compareAnimalToCageProps(animal: Animal, cage: Cage) {
  if (
    cage.square - animal.neededSquare >= 0 &&
    cage.biom == animal.neededBiom &&
    cage.hasReservoir == animal.needOfReservoir &&
    cage.isForPredators == animal.isPredator
  ) {
    return true;
  } else {
    return false;
  }
}

export function calculateAmountOfFoodForCage(cage: Cage) {
  let amountOfFood: number = 0;
  if (cage.members.length == 0) {
    console.log("Cage is empty");
    return amountOfFood;
  } else {
    for (let i = 0; i < cage.members.length; i++) {
      amountOfFood = amountOfFood + cage.members[i].necessaryFood;
    }
  }
  return amountOfFood;
}

export function isAnimalHasNeededType(animal: Animal, cage: Cage) {
  return animal.isPredator == cage.isForPredators ? true : false;
}
