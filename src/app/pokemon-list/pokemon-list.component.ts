import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pageIndex: number = 0;
  pageNameFilter: string = '';
  pageSizeOptions: number[] = [25, 50, 100];
  pageSize: number = this.pageSizeOptions[0] ?? 25;
  selectedGens = new FormControl<{ name: string, first: number; last: number }[]>([]);
  selectedTypes = new FormControl<string[]>([]);
  gens!: { name: string, first: number; last: number }[];
  types!: string[];

  get pokemonList(): any[] {
    return this.pokemonService.getDesiredPokemonList(this.selectedTypes.value!, this.pageNameFilter, this.selectedGens.value!);
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


