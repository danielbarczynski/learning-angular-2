import { Injectable } from '@angular/core';
import { Pokemon, PokemonType } from '../models/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const POKEMON_API = 'http://localhost:3000/pokemons/';
const POKEMON_API_TYPES = 'http://localhost:3000/pokemontypes/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { };

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(POKEMON_API + id)
  };

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(POKEMON_API);
  };

  getPokemonTypes(): Observable<PokemonType[]> {
    return this.http.get<PokemonType[]>(POKEMON_API_TYPES);
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(POKEMON_API, pokemon, httpOptions);
  }
}
