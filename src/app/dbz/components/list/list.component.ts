import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
characterList: Character[] = [{
  name:'Gohan',
  power: 10
  }];

@Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id? :string):void{

    if (!id) return;

    this.onDelete.emit(id);

  }
}
