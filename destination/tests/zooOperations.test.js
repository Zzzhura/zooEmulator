"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zooOperations_1 = require("../src/zooOperations");
describe('testing zooOperations', () => {
    test('adding one animal to cage should return true if square is fit', () => {
        let bear = { name: 'bear', neededBiom: 'tundra', needOfReservoir: true, neededSquare: 25.5, necessaryFood: 'meat' };
        let cageMembers = new Array();
        let tundraCage = { biom: 'tundra', square: 1000, hasReservoir: true, members: cageMembers };
        expect((0, zooOperations_1.addAnimalToCage)(bear, tundraCage)).toBe(true);
    });
});
