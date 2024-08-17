import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{counter}}</h3>

    <button (click)="contador(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="contador(-1)">-1</button>
  `
})

export class CounterComponent {
  title = 'mi primera app';
  counter = 10;

contador(value: number):void{
  this.counter += value;
}
reset(){
  this.counter = 10;
}}





