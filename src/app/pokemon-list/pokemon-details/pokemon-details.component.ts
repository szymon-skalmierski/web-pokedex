import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  pokemonInfo: any;
  sprites!: string[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonInfo = this.route.snapshot.data['pokemonInfo'];
    
    const artwork = this.pokemonInfo.sprites.other['official-artwork'];
    this.sprites = [artwork.front_default, artwork.front_shiny];
  }
}