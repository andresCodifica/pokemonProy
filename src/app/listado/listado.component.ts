import { PokemonDataService } from './../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/PokemonList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

 // listaPokemon: Pokemon [];
  //$listaPokemonObs: Observable<Pokemon[]>;
  listPokemon: PokemonList;
  listPokemonDetail: Pokemon[] = [];

  constructor(
    private pokemonDataService: PokemonDataService,
    private router: Router) {
   this.getList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=15');
  }


  getList(url: String){
  this.listPokemon = null;
  this.listPokemonDetail = [];
    this.pokemonDataService.getPokemonListOffSet(url).subscribe(
      (pokemonList) => {
        console.log(pokemonList)
        this.listPokemon = pokemonList
        this.listPokemon.results.forEach( element => {
          this.pokemonDataService.getPokemonData(element.name).subscribe(
            (pokemon) => {
              //console.log(pokemon)
              this.listPokemonDetail.push(pokemon)
            }
          ) 
        });
      }
    )
  }
  sendParam(name: String){

    this.router.navigate(['/detalle/',name]);
  }


  ngOnInit(): void {
  }

}
