import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PokemonService } from './pokemon-list/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-pokedex';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private pokemonService: PokemonService
  ) {
    this.pokemonService.types.forEach((value) => {
      this.matIconRegistry.addSvgIcon(
        `${value}-type`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `../assets/icons/types/${value}.svg`
        )
      );
    });
  }
}
