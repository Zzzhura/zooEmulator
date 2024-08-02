import { addAnimalToCage } from "../src/zooOperations";
import { Animal, Cage } from "../src/TaskInterfaces";

describe("testing zooOperations", () => {
  test("adding one animal to cage should return true if square is fit", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: true,
      neededSquare: 25.5,
      necessaryFood: "meat",
      isPredator: true
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(true);
  });

  test("adding animal with incorrect square", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: true,
      neededSquare: 10000,
      necessaryFood: "meat",
      isPredator: true
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });

  test("incorrect cage square", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: true,
      neededSquare: 100,
      necessaryFood: "meat",
      isPredator: true
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 0,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });

    test("adding animal with incorrect biom to the cage", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "forest",
      needOfReservoir: true,
      neededSquare: 10000,
      necessaryFood: "meat",
      isPredator: true
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
    });
    test("adding animal with no need in water reservoir", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: false,
      neededSquare: 10000,
      necessaryFood: "meat",
      isPredator: true
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
    });
  
  test("adding predator to no predator cage", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: false,
      neededSquare: 10000,
      necessaryFood: "meat",
      isPredator: true
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: false
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });

  test("adding no predator to predator cage", () => {
    let bear: Animal = {
      name: "bear",
      neededBiom: "tundra",
      needOfReservoir: false,
      neededSquare: 10000,
      necessaryFood: "meat",
      isPredator: false
    };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = {
      biom: "tundra",
      square: 1000,
      hasReservoir: true,
      members: cageMembers,
      isForPredators: true
    };
    expect(addAnimalToCage(bear, tundraCage)).toBe(false);
  });
});
