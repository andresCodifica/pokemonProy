import { Pokemon } from './../models/Pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/PokemonList';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {
  list:PokemonList

  constructor(private httpClient: HttpClient) { }

  getPokemonData(name: String): Observable<Pokemon> {
    return this.httpClient.get <Pokemon>('https://pokeapi.co/api/v2/pokemon/'+name);
  }

  getPokemonList(): Observable<Pokemon[]>{
    return this.httpClient.get <Pokemon[]>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonListOffSet(url: String) :Observable<PokemonList> {

    return  this.httpClient.get<PokemonList>(url.valueOf());   
  }

}
