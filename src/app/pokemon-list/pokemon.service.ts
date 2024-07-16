import { Injectable } from '@angular/core';

import { Pokemon } from './pokemon';
import _pokedex from '../../assets/json/pokedex.json';

const pokedex: Pokemon[] = _pokedex as Pokemon[];

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _pokemonList: Pokemon[] = pokedex;
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

  getDesiredPokemonList(types: string[], name: string, gens: {name: string, first: number, last: number}[]) {
    return this._pokemonList.filter((pokemon: any) => {
      let isDesiredName = pokemon.name.english.toLowerCase().startsWith(name.toLowerCase());
      let isDesiredType = true;
      let isDesiredGen = false;
      if(types !== null) {
        isDesiredType = types.every((el) => pokemon.type.includes((el[0] as string).toUpperCase() + (el as string).substring(1)))
      }
      if(gens !== null && gens.length > 0) {
        for(let gen of gens) {
          if(pokemon.id >= gen.first && pokemon.id <= gen.last) {
            isDesiredGen = true;
            break;
          }
        }
      } else {
        isDesiredGen = true;
      }
      return isDesiredName && isDesiredType && isDesiredGen;
    });
  }
}
