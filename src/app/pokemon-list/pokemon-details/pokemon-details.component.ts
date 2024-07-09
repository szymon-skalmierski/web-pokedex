import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  pokemonInfo: any;
  sprites!: string[];
  types!: string[];
  stats!: { name: string; value: number }[];
  statsColumns: string[] = ['name', 'value'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemonInfo = this.route.snapshot.data['pokemonInfo'];

    const artwork = this.pokemonInfo.sprites.other['official-artwork'];
    this.sprites = [artwork.front_default, artwork.front_shiny];


    this.types = (this.pokemonInfo.types as Array<any>).map(
      (value) => value.type.name
    );

    this.stats = (this.pokemonInfo.stats as Array<any>).map((value) => ({
      name: value.stat.name,
      value: value.base_stat,
    }));
  }
}
