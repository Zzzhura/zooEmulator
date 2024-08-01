import { Animal, Cage, Zoo } from "./TaskInterfaces";

export function addAnimalToCage(animal: Animal, cage: Cage) {
  if (
    cage.square - animal.neededSquare >= 0 &&
    cage.biom == animal.neededBiom
  ) {
    cage.members.push(animal);
    cage.square = cage.square - animal.neededSquare;
    console.log(animal.name + "added to cage");
    console.log("current square of cage is " + cage.square);
    return true;
  } else {
    throw console.error("There's no space to add " + animal.name);
    return false;
  }
}
