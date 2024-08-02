"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zooOperations_1 = require("../src/zooOperations");
describe("testing addAnimalToCage", () => {
    test("adding one animal to cage should return true if square is fit", () => {
        let bear = {
            name: "bear",
            neededBiom: "tundra",
            needOfReservoir: true,
            neededSquare: 25.5,
            necessaryFood: 10,
            isPredator: true,
        };
        let cageMembers = new Array();
        let tundraCage = {
            biom: "tundra",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(true);
    });
    test("adding animal with incorrect square", () => {
        let bear = {
            name: "bear",
            neededBiom: "tundra",
            needOfReservoir: true,
            neededSquare: 10000,
            necessaryFood: 10,
            isPredator: true,
        };
        let cageMembers = new Array();
        let tundraCage = {
            biom: "tundra",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(false);
    });
    test("incorrect cage square", () => {
        let bear = {
            name: "bear",
            neededBiom: "tundra",
            needOfReservoir: true,
            neededSquare: 100,
            necessaryFood: 10,
            isPredator: true,
        };
        let cageMembers = new Array();
        let tundraCage = {
            biom: "tundra",
            square: 0,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(false);
    });
    test("adding animal with incorrect biom to the cage", () => {
        let bear = {
            name: "bear",
            neededBiom: "forest",
            needOfReservoir: true,
            neededSquare: 10000,
            necessaryFood: 10,
            isPredator: true,
        };
        let cageMembers = new Array();
        let tundraCage = {
            biom: "tundra",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(false);
    });
    test("adding animal with no need in water reservoir", () => {
        let bear = {
            name: "bear",
            neededBiom: "tundra",
            needOfReservoir: false,
            neededSquare: 10000,
            necessaryFood: 10,
            isPredator: true,
        };
        let cageMembers = new Array();
        let tundraCage = {
            biom: "tundra",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(false);
    });
    test("adding predator to no predator cage", () => {
        let bear = {
            name: "bear",
            neededBiom: "tundra",
            needOfReservoir: false,
            neededSquare: 10000,
            necessaryFood: 10,
            isPredator: true,
        };
        let cageMembers = new Array();
        let tundraCage = {
            biom: "tundra",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: false,
        };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(false);
    });
    test("adding no predator to predator cage", () => {
        let bear = {
            name: "bear",
            neededBiom: "tundra",
            needOfReservoir: false,
            neededSquare: 10000,
            necessaryFood: 10,
            isPredator: false,
        };
        let cageMembers = new Array();
        let tundraCage = {
            biom: "tundra",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(false);
    });
});
describe("testing calculateAmountOfFoodForCage", () => {
    test("empty cage", () => {
        let cageMembers = new Array();
        let cage = {
            biom: "Forest",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        expect((0, zooOperations_1.calculateAmountOfFoodForCage)(cage)).toBe(0);
    });
    test("calculateAmountOfFoodForCage for one animal in cage", () => {
        let bear = {
            name: "bear",
            neededBiom: "Forest",
            needOfReservoir: true,
            neededSquare: 100,
            necessaryFood: 10,
            isPredator: true,
        };
        let cageMembers = new Array();
        let cage = {
            biom: "Forest",
            square: 1000,
            hasReservoir: true,
            members: cageMembers,
            isForPredators: true,
        };
        (0, zooOperations_1.addAnimalToCage)(bear, cage);
        expect((0, zooOperations_1.calculateAmountOfFoodForCage)(cage)).toBe(10);
    });
});
