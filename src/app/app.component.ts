import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: `<button (click)="AddHero()">Add Hero!</button>`
})
export class AppComponent {
  title = 'Pulsar Heroes';
  // private heroCounter = 0;
  // public AddHero(): void {
  //   let newHero = new Hero(`My Hero #${this.heroCounter++}`);
  //   this.heroes.push(newHero);
  // }
}
