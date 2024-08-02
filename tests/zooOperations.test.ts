import { addAnimalToCage, calculateAmountOfFoodForCage } from "../src/zooOperations";
import { Animal, Cage } from "../src/TaskInterfaces";

describe("testing addAnimalToCage", () => {
  test("adding one animal to cage should return true if square is fit", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: true,
      neededSquare: 25.5,
      necessaryFood: 10,
      isPredator: true,
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(true);
  });

  test("adding animal with incorrect square", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: true,
      neededSquare: 10000,
      necessaryFood: 10,
      isPredator: true,
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });

  test("incorrect cage square", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: true,
      neededSquare: 100,
      necessaryFood: 10,
      isPredator: true,
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 0,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });

  test("adding animal with incorrect biom to the cage", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "forest",
      needOfReservoir: true,
      neededSquare: 10000,
      necessaryFood: 10,
      isPredator: true,
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });
  test("adding animal with no need in water reservoir", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: false,
      neededSquare: 10000,
      necessaryFood: 10,
      isPredator: true,
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });

  test("adding predator to no predator cage", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: false,
      neededSquare: 10000,
      necessaryFood: 10,
      isPredator: true,
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: false,
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });

  test("adding no predator to predator cage", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: false,
      neededSquare: 10000,
      necessaryFood: 10,
      isPredator: false,
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });
});

describe("testing calculateAmountOfFoodForCage", () => {
  test("empty cage", () => {
    let cageMembers: Animal[] = new Array();
    let cage: Cage = {
      biom: "Forest",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    expect(calculateAmountOfFoodForCage(cage)).toBe(0);
  });
  test("calculateAmountOfFoodForCage for one animal in cage", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "Forest",
      needOfReservoir: true,
      neededSquare: 100,
      necessaryFood: 10,
      isPredator: true,
    };
    let cageMembers: Animal[] = new Array();
    let cage: Cage = {
      biom: "Forest",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true,
    };
    addAnimalToCage(bear, cage);
    expect(calculateAmountOfFoodForCage(cage)).toBe(10);
  });
});
