import { PokemonDataService } from './../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listaPokemon: Pokemon [];
  $listaPokemonObs: Observable<Pokemon[]>;

  constructor(private pokemonDataService: PokemonDataService) {
    this.pokemonDataService.getPokemonList().subscribe(
      (pokemonList) => {
        this.listaPokemon = pokemonList["results"];
        this.listaPokemon.forEach(
          (pokemon) => {
            console.log(pokemon)
          }
        );
      }
    );
    this.$listaPokemonObs = this.pokemonDataService.getPokemonList();

  }

  ngOnInit(): void {
  }

}
