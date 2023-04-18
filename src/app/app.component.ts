import { Component } from '@angular/core';

interface Cat {
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
  cats: Cat[] = [
    { name: 'Tom', age: 3, color: 'white' },
    { name: 'Jerry', age: 2, color: 'brown' },
    { name: 'Mickey', age: 1, color: 'black' },
  ];

  title = 'learning-angular-2';
  style: string = 'color: red; font-size: 20px;'
  imgSrc: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  car: string = "BMW";
  isTrue: boolean = false;
  cat: string = "";
  click(): void {
    this.car = "";
  }
  log(animal: string | null): void {
    console.log(animal);
  }
}
