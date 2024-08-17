import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

heroNames:string[] = ['Spiderman','Doctor Strage','Black Panther','Hulk'];

heroeEliminado?:string

DeleteHeroe():void{
  this.heroeEliminado = this.heroNames.pop();
}




}
