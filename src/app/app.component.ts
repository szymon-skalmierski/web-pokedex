import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-pokedex';
  private allTypes: string[] = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.allTypes.forEach(value=>{
      this.matIconRegistry.addSvgIcon(
        `${value}-type`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/types/${value}.svg`)
      );
    })
  }
}
