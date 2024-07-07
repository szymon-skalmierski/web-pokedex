import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { pokemonDetailsResolver } from './pokemon-list/pokemon-details/pokemon-details.resolver';
import { PokemonDetailsComponent } from './pokemon-list/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: PokemonDetailsComponent,
    pathMatch: 'full',
    resolve: { pokemonInfo: pokemonDetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
