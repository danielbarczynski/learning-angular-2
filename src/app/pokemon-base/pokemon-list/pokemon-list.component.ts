import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent{
  pokemons: Pokemon[] = [
    { id: 1, name: 'Levi', age: 3, color: 'white'},
    { id: 2, name: 'Nano', age: 5, color: 'brown',},
    { id: 3, name: 'Zirus', age: 4, color: 'black'},
  ];

  onRemoveHandler(pokemon: Pokemon) {
    return this.pokemons = this.pokemons.filter(x => x.id !== pokemon.id);
  }
}
