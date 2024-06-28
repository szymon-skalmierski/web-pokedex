import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import pokedex from '../../assets/json/pokedex.json';

const _pokedex:Pokemon[] = pokedex as Pokemon[];

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pageSizeOptions: number[] = [25, 50, 100];
  pageSize: number = this.pageSizeOptions[0] ?? 25;
  pageIndex: number = 0;
  pageNameFilter: string = '';
  private _pokemonList: Pokemon[] = _pokedex;

  get pokemonList(): any[] {
    return this._pokemonList.filter((pokemon: any) =>
      pokemon.name.english.startsWith(this.pageNameFilter.toLowerCase())
    );
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this._pokemonList = this.route.snapshot.data['pokemon'].results.map(
    //   (element: Pokemon) => {
    //     element.id = +element.url.match(/\/\d+\//g)![0].replaceAll('/', '');
    //     return element;
    //   }
    // );
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
