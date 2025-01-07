import { Dragonball } from "./dragonball";
import { Race } from "./race.type";


export interface CacheStore {
  byName: TermCharacter;
  byRace: RaceCharacter;
}

export interface TermCharacter {
  term: string;
  character: Dragonball[];
}

export interface RaceCharacter {
  term: Race | string;
  character: Dragonball[];
}
