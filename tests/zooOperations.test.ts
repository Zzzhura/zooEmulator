import { addAnimalToCage } from '../src/zooOperations';
import { Animal, Cage } from '../src/TaskInterfaces';

describe('testing zooOperations', () => {
  test('adding one animal to cage should return true if square is fit', () => {
    let bear: Animal = { name: 'bear', neededBiom: 'tundra', needOfReservoir: true, neededSquare: 25.5, necessaryFood: 'meat' };
    let cageMembers: Animal[] = new Array();
    let tundraCage: Cage = { biom: 'tundra', square: 1000, hasReservoir: true, members: cageMembers };
    expect(addAnimalToCage(bear, tundraCage)).toBe(true);
   })
 })