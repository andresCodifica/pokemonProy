import { TestBed } from '@angular/core/testing';

import { PokemonDataServicesService } from './pokemon-data-services.service';

describe('PokemonDataServicesService', () => {
  let service: PokemonDataServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDataServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
