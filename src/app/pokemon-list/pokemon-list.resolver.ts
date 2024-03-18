import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export const pokemonListResolver: ResolveFn<boolean> = (route, state) => {
  const http = inject(HttpClient);

  return http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1025');
};
