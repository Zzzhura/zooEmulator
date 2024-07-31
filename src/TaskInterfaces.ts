export interface Animal {
  name: string;
  neededBiom: string;
  needOfReservoir: true;
  neededSquare: number;
  necessaryFood: string;
}

export interface Cage {
  biom: string;
  square: number;
  hasReservoir: boolean;
 }

export interface Zoo {
  cages: Cage[];
 }

export function printInfo(animal: Animal) {
  console.log(
    animal.name + " " + animal.needOfReservoir + " " + animal.neededBiom,
  );
}