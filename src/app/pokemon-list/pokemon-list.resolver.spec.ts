import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { pokemonListResolver } from './pokemon-list.resolver';

describe('pokemonListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => pokemonListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
