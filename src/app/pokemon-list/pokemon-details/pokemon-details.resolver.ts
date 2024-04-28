import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export const pokemonDetailsResolver: ResolveFn<boolean> = (route, state) => {
  const id = route.params['id'];
  const http = inject(HttpClient);

  return http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
