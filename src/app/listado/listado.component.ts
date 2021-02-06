import { PokemonDataService } from './../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/PokemonList';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

 // listaPokemon: Pokemon [];
  $listaPokemonObs: Observable<Pokemon[]>;
  listPokemon: PokemonList;
  listPokemonDetail: Pokemon[] = [];

  constructor(private pokemonDataService: PokemonDataService) {
    this.pokemonDataService.getPokemonListOffSet().subscribe(
      (pokemonList) => {
        //console.log(pokemonList.results)
        this.listPokemon = pokemonList
        this.listPokemon.results.forEach( element => {
          this.pokemonDataService.getPokemonData(element.name).subscribe(
            (pokemon) => {
              console.log(pokemon)
              this.listPokemonDetail.push(pokemon)
            }
          )
          
        });
      }
    )


   
  }

  

/*
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
*/
  ngOnInit(): void {
  }

}
