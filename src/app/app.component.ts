import { Component } from '@angular/core';

interface Cat {
  name: string;
  age: number;
  color: string;
  isMy: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cats: Cat[] = [
    { name: 'Tom', age: 3, color: 'white', isMy: true },
    { name: 'Jerry', age: 2, color: 'brown', isMy: false },
    { name: 'Mickey', age: 1, color: 'black', isMy: true },
  ];
  fontsize: number = 25;
  color: string = 'pink';
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
