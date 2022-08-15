import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  // This selector gets called in header.component.html
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() color!: string;
  @Input() text!: string;
  // The color and text input is taken from header.component.html
  // The exclamation resolves errors

  @Output() btnClick = new EventEmitter();
  /*
    btnClick is a custom event called from header.component.html.
    As there is (click) for traditional html <button>,
    similarly, we created (btnClick) for <app-button>
    (btnClick) is binded to toggleAddTask() created 
    in header.component.ts.
  */
  constructor() {}
  ngOnInit(): void {}

  /*
    onClick() is called from <button> in button component
    html to specify what happens when btn is (click)ed.
    onClick() is called from button.component.html, 
    hence it should be defined in button.component.ts 
  */
  onClick() {
    this.btnClick.emit();
  }
}
