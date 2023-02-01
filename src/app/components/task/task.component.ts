import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TaskService } from 'src/app/service/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=[];




  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    console.log(this.tasks);
    this.taskservice.getTaskes().subscribe(tasks=>this.tasks=tasks);
  }
  deleteTask(task:Task){
    this.taskservice
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }


  taggelRemminder(task:Task){
    task.reminder = !task.reminder;
    this.taskservice.updateTaskReminder(task).subscribe()
  }
  addTask(task:Task){
    console.log(task)
    this.taskservice.addTask(task).subscribe();
    
  }


}
