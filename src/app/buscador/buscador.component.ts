import { PokemonDataService } from './../services/pokemon-data.service';
import { Pokemon } from './../models/Pokemon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  currentPokemon : Observable<Pokemon>;
  currentPokemon2 : Pokemon;
  itemPokemon: String



  constructor(
    pokemonDataService: PokemonDataService,
    private router: Router) {

   //console.log('1', this.currentPokemon);
   this.currentPokemon = pokemonDataService.getPokemonData();

   pokemonDataService.getPokemonData().subscribe(
     (pokemon) => {
        this.currentPokemon2 = pokemon;
     }
   );

   console.log('2', this.currentPokemon);
  }

  getInput(event:Event){
    this.itemPokemon =  (<HTMLInputElement>event.target).value;
  }

  sendParam(){
    this.router.navigate(['/detalle/',this.itemPokemon]);
  }

  ngOnInit(): void {
  }

}
