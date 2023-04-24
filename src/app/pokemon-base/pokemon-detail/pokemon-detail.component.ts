import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input() 
  pokemon!: Pokemon;
  
  @Output() 
  remove: EventEmitter<Pokemon> = new EventEmitter();

  onRemove(pokemon: Pokemon) {
    this.remove.emit(pokemon);
  }
}
