import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemonList!: {id: number, name: string, url: string}[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonList = this.route.snapshot.data['pokemon'].results;
    console.log(this.pokemonList)
  }
}
