import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  pokemonInfo: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonInfo = this.route.snapshot.data['pokemonInfo'];
    console.log(this.pokemonInfo)
  }
}