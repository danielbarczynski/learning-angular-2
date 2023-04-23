import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent{
  pokemons: Pokemon[] = [
    { name: 'Levi', age: 3, color: 'white'},
    { name: 'Nano', age: 5, color: 'brown',},
    { name: 'Zirus', age: 4, color: 'black'},
  ];
}
