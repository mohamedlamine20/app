import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/Mock-Tasks';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
