import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonjson'
})
export class PokemonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value);
  }
}