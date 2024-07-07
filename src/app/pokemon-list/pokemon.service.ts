import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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

  gens: { name: string, first: number; last: number }[] = [
    { name: 'Generation I', first: 1, last: 151 },
    { name: 'Generation II', first: 152, last: 251 },
    { name: 'Generation III', first: 252, last: 386 },
    { name: 'Generation IV', first: 387, last: 493 },
    { name: 'Generation V', first: 494, last: 649 },
    { name: 'Generation VI', first: 650, last: 721 },
    { name: 'Generation VII', first: 722, last: 809 },
    { name: 'Generation VIII', first: 810, last: 905 },
  ];

  constructor() {}
}
