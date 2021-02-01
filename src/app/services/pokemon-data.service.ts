import { Pokemon } from './../models/Pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {

  constructor(private httpClient: HttpClient) { }

  getPokemonData(): Observable<Pokemon> {
    return this.httpClient.get <Pokemon>('https://pokeapi.co/api/v2/pokemon/pikachu');
  }

  getPokemonList(): Observable<Pokemon[]>{
    return this.httpClient.get <Pokemon[]>('https://pokeapi.co/api/v2/pokemon');
  }
}
