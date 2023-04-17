import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular-2';
  style: string = 'color: red; font-size: 20px;'
  imgSrc: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  car: string = "Opel Astra H";
  cat: string = "";
  click(): void {
    this.car = "";
  }
  log(animal: string | null): void {
    console.log(animal);
  }
}
