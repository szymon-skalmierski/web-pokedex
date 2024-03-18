import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { pokemonListResolver } from './pokemon-list/pokemon-list.resolver';

const routes: Routes = [
  {
    path: '', component: PokemonListComponent, pathMatch: 'full',
    resolve: {pokemon: pokemonListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
