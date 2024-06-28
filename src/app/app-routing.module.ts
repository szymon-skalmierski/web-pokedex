import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-list/pokemon-details/pokemon-details.component';

import { pokemonListResolver } from './pokemon-list/pokemon-list.resolver';
import { pokemonDetailsResolver } from './pokemon-list/pokemon-details/pokemon-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    pathMatch: 'full',
    // resolve: { pokemon: pokemonListResolver },
  },
  {
    path: ':id',
    component: PokemonDetailsComponent,
    pathMatch: 'full',
    // resolve: { pokemonInfo: pokemonDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
