import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pageSize: number = 25;
  pageIndex: number = 0;
  pokemonList!: {id: number, name: string, url: string, deferStatus: boolean}[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonList = this.route.snapshot.data['pokemon'].results;
    console.log(this.pokemonList);
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
