import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pageSizeOptions: number[] = [25, 50, 100];
  pageSize: number = this.pageSizeOptions[0] ?? 25;
  pageIndex: number = 0;
  pageNameFilter: string = "";
  pokemonList!: {name: string, url: string}[];

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
