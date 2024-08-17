import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Ironman';
  age = 45;

get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescriptoion():string{
  return `${ this.name } - ${ this.age }`
}

changeHero():void{
  this.name = 'Spiderman';
}

changeAge():void{
  this.age = 25
}

}
