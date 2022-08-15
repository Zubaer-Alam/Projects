import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Manager';
  //this HeaderComponent.title gets referenced in header.component.html
  constructor() {}
  ngOnInit(): void {}

  /*
    toggleAddTask() is called when (btnClick)ed
    toggleAddTask() is used in header.component.html,
    so, it should be defined in header.component.ts
  */
  toggleAddTask() {
    console.log('Added');
  }
}
