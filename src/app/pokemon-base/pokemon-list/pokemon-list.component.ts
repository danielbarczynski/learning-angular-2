import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];
  constructor(private pokemonService: PokemonService) {
    
  }
  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  onRemoveHandler(pokemon: Pokemon) {
    return this.pokemons = this.pokemons.filter(x => x.id !== pokemon.id);
  }
}
