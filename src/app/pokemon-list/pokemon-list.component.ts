import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

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
  _pokemonList!: Pokemon[];

  get pokemonList(): Pokemon[] {
    return this._pokemonList.filter((pokemon) =>
      pokemon.name.startsWith(this.pageNameFilter.toLowerCase())
    );
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this._pokemonList = this.route.snapshot.data['pokemon'].results.map(
      (element: Pokemon) => {
        element.id = +element.url.match(/\/\d+\//g)![0].replaceAll('/', '');
        return element;
      }
    );
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}

interface Pokemon {
  id: number;
  name: string;
  url: string;
}
