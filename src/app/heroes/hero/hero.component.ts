import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalazedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeAge(): void {
    this.age = 50;
  }
  changeHero(): void {
    this.name = 'Spiderman';
  }
  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
