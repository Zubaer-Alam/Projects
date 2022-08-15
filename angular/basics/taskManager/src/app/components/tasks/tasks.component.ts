import { TASKS } from 'src/app/mockTasks';
import { Task } from 'src/app/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  // TASK is a const imported from mockTasks.ts (DUmmy JSON server)
  // Task[] is the type of tasks which is imported from Task.ts
  constructor() {}

  ngOnInit(): void {}
}
