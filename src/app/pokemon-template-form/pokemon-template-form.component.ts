import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemons: Pokemon[] = [];
  pokemonTypes!: PokemonType[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((pokemon: Pokemon) => this.pokemon = pokemon);
    this.pokemonService.getPokemonTypes().subscribe((pokemonTypes: PokemonType[]) => this.pokemonTypes = pokemonTypes);
  }
  
  toggleIsStrong(object: any): void{
  console.log(object);
  }

  onSubmitHandle(form: any) {
    const pokemonName = form.value.pokemonName;
    const isStrong = form.value.isStrong;
    const pokemonType = form.value.pokemonType;
    const pokemon = { id: 6, name: pokemonName, age: 6, color: "blue", isStrong: isStrong, type: pokemonType };
    console.log(pokemon);
    this.pokemonService.createPokemon(pokemon).subscribe((pokemon: Pokemon) => this.pokemons.push(pokemon));
  }
}
