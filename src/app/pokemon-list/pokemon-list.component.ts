import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import _pokedex from '../../assets/json/pokedex.json';
import { PokemonService } from './pokemon.service';
const pokedex: Pokemon[] = _pokedex as Pokemon[];

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  private _pokemonList: Pokemon[] = pokedex;
  pageIndex: number = 0;
  pageNameFilter: string = '';
  pageSizeOptions: number[] = [25, 50, 100];
  pageSize: number = this.pageSizeOptions[0] ?? 25;
  selectedGens = new FormControl([]);
  selectedTypes = new FormControl([]);
  gens!: { name: string, first: number; last: number }[];
  types!: string[];

  get pokemonList(): any[] {
    return this._pokemonList.filter((pokemon: any) => {
      let isDesiredName = pokemon.name.english.startsWith(this.pageNameFilter.toLowerCase());
      let isDesiredType = true;
      let isDesiredGen = false;
      if(this.selectedTypes !== null) {
        isDesiredType = this.selectedTypes.value!.every((el) => pokemon.type.includes((el[0] as string).toUpperCase() + (el as string).substring(1)))
      }
      if(this.selectedGens !== null && this.selectedGens.value!.length > 0) {
        for(let gen of this.selectedGens.value!) {
          if(pokemon.id >= (gen as {name: string, first: string, last: string}).first && pokemon.id <= (gen as {name: string, first: string, last: string}).last) {
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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.types = this.pokemonService.types;
    this.gens = this.pokemonService.gens;
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}

interface Pokemon {
  id: number;
  name: Object;
  type: Array<string>;
  base: Object;
  species: string;
  description: string;
  evolution: { next: Object };
  profile: {
    height: string;
    weight: string;
    egg: Array<string>;
    ability: Object;
    gender: string;
  };
  image: Object;
}
