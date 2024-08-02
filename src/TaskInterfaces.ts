export interface Animal {
  name: string;
  neededBiom: string;
  needOfReservoir: boolean;
  neededSquare: number;
  necessaryFood: number; // If predator necessaryFood == 1 means 1 kg for animal.
  isPredator: boolean;
}

export interface Cage {
  biom: string;
  square: number;
  hasReservoir: boolean;
  members: Animal[];
  isForPredators: boolean;
}

export interface Zoo {
  cages: Cage[];
}

export function printInfo(animal: Animal) {
  console.log(
    animal.name + " " + animal.needOfReservoir + " " + animal.neededBiom
  );
}
