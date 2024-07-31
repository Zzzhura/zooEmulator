import { Animal, Cage, Zoo, printInfo } from './TaskInterfaces';

let bear: Animal = { name: "bear", neededBiom: "tundra", needOfReservoir: true };

let cage1: Cage = { biom: "tundra", square: 10.5, hasReservoir: true };
let cage2: Cage = { biom: "dessert", square: 100.12, hasReservoir: false };
let cage3: Cage = { biom: "forest", square: 55.125, hasReservoir: true };
let arrayOfCages: Cage[] = new Array();

arrayOfCages.push(cage1);
arrayOfCages.push(cage2);
arrayOfCages.push(cage3);

let zoo: Zoo = { cages: arrayOfCages };
printInfo(bear);
console.log(zoo)
