import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  getPokemons(): Pokemon[] {
    return [{ id: 1, name: 'Levi', age: 3, color: 'white' },
    { id: 2, name: 'Nano', age: 5, color: 'brown', },
    { id: 3, name: 'Zirus', age: 4, color: 'black' }]
  }
}
