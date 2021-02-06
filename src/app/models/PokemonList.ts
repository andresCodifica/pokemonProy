import { PokemonItemResult } from "./PokemonItemresult";

export class PokemonList {
    name: String;
    url: String;
    next: String;
    previous: String;
    results: PokemonItemResult[];

    constructor(){}
}