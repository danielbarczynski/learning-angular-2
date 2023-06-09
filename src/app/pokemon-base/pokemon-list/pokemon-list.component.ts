import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonTh') pokemonTh!: ElementRef;
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService, private renderer: Renderer2) { };

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons: Pokemon[]) =>
      this.pokemons = pokemons
    );
  };

  ngAfterViewInit(): void {
    console.log(this.pokemonRef);
    this.pokemonTh.nativeElement.innerText = "Pokemon Name";
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Jigitsu');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonTh.nativeElement, div);
  }

  onRemoveHandler(pokemon: Pokemon) {
    return this.pokemons = this.pokemons.filter(x => x.id !== pokemon.id);
  }
};
