import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //Al tener la palabra get, esto funciona exactamente igual que un atributo
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  //Si ponemos el metodo como private, no seria accesible desde el html
  //Al ser un metodo get+ hay que llamarlo con parentesis desde el html, a diferencia de las propiedades
  getHeroDescription():string {

    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
