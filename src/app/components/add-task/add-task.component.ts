import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Task } from 'src/app/Tasks';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter()

  constructor(uiService:UiService) {
    this.subscription=uiService.onToggel().subscribe(value=>(this.showAddTask=value));
   }
  text!:string ;
  date!:string;
  reminder:boolean=false;
  showAddTask!:boolean;
  subscription!:Subscription;

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert('add text')
    
    }
    const newTask={
      text:this.text,
      day:this.date,
      reminder:this.reminder
    }
    this.text='';
    this.date='';
    this.reminder=false;
    this.onAddTask.emit(newTask);
  };
  

}
