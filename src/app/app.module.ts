import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PokemonListComponent } from './homepage/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './homepage/pokemon-list/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PokemonListComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
