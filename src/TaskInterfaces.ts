export interface Animal {
  name: string;
  neededBiom: string;
  needOfReservoir: boolean;
  neededSquare: number;
  necessaryFood: string;
  isPredator: boolean
}

export interface Cage {
  biom: string;
  square: number;
  hasReservoir: boolean;
  members: Animal[];
}

export interface Zoo {
  cages: Cage[];
}

export function printInfo(animal: Animal) {
  console.log(
    animal.name + " " + animal.needOfReservoir + " " + animal.neededBiom
  );
}
