import { Component } from '@angular/core';

interface Pokemon {
  name: string;
  age: number;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pokemons: Pokemon[] = [
    { name: 'Levi', age: 3, color: 'white'},
    { name: 'Nano', age: 5, color: 'brown',},
    { name: 'Zirus', age: 4, color: 'black'},
  ];
  
  // fontsize: number = 25;
  // color: string = 'pink';
  // title = 'learning-angular-2';
  // style: string = 'color: red; font-size: 20px;'
  // imgSrc: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  // car: string = "BMW";
  // isTrue: boolean = false;
  // cat: string = "";
  // click(): void {
  //   this.car = "";
  // }
  // log(animal: string | null): void {
  //   console.log(animal);
  // }
}
