import { PokemonDataService } from './../services/pokemon-data.service';
import { Pokemon } from './../models/Pokemon';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  currentPokemon : Observable<Pokemon>;
  currentPokemon2 : Pokemon;




  constructor(pokemonDataService: PokemonDataService) {
   console.log('1', this.currentPokemon);
   this.currentPokemon = pokemonDataService.getPokemonData();

   pokemonDataService.getPokemonData().subscribe(
     (pokemon) => {
        this.currentPokemon2 = pokemon;
     }
   );

   console.log('2', this.currentPokemon);
  }

  ngOnInit(): void {
  }

}
