import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  types: string[] = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ];

  gens: {[name: string]: {first: number, last: number}}[] = [
    {
      "Generation I": {
        first: 1,
        last: 151
      },
      "Generation II": {
        first: 152,
        last: 251
      },
      "Generation III": {
        first: 252,
        last: 386
      },
      "Generation IV": {
        first: 387,
        last: 493
      },
      "Generation V": {
        first: 494,
        last: 649
      },
      "Generation VI": {
        first: 650,
        last: 721
      },
      "Generation VII": {
        first: 722,
        last: 809
      },
      "Generation VIII": {
        first: 810,
        last: 905
      },
    }
  ]

  constructor() { }
}
