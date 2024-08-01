import { Animal, Cage, Zoo, printInfo } from "./TaskInterfaces";

let arrayOfCages: Cage[] = new Array();

let zoo: Zoo = { cages: arrayOfCages };

console.log(zoo);
