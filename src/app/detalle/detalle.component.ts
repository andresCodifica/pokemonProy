import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  currentPokemon : Pokemon;

  constructor(
    pokemonDataService: PokemonDataService,
    rutaActiva: ActivatedRoute) {
    pokemonDataService.getPokemonData(rutaActiva.snapshot.params.item).subscribe(
      (pokemon) => {
        this.currentPokemon = pokemon;
        console.log(pokemon.abilities)
     }
    )
  }

  ngOnInit(): void {
  }

}
