import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  
  constructor(private pokemonService: PokemonService) { }

  toggleIsStrong(object: any): void{
  console.log(object);
  }

  ngOnInit() {
    this.pokemonService.getPokeomn(1).subscribe((pokemon: Pokemon) =>
    this.pokemon = pokemon)
  }

}
