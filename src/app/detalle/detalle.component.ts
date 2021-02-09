import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../models/Pokemon';
import { PokemonDataService } from '../services/pokemon-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  currentPokemon : Pokemon;

  constructor(
    private pokemonDataService: PokemonDataService,
    private router: Router,
    rutaActiva: ActivatedRoute) {
    pokemonDataService.getPokemonData(rutaActiva.snapshot.params.item).subscribe(
      (pokemon) => {
        console.log(pokemon)
        this.currentPokemon = pokemon;
     },
     (error) => {      
      this.router.navigate(['/buscar/'])
       alert("No se encontro pokemon.")  
              
     })
  }

  nextPokemon(num: any){
    let pokemonNumber = parseInt(num)
    if(num!=200){pokemonNumber++}
    this.pokemonDataService.getPokemonData(pokemonNumber.toString()).subscribe(
      (pokemon) => {
        this.currentPokemon = pokemon;
        console.log(pokemon)
     }
    )
  }
  previousPokemon(num: any){
    let pokemonNumber = parseInt(num)
    if(num!=0){pokemonNumber--}
    this.pokemonDataService.getPokemonData(pokemonNumber.toString()).subscribe(
      (pokemon) => {
        this.currentPokemon = pokemon;
        console.log(pokemon)
     }
    )

  }
  ngOnInit(): void {
  }

}
