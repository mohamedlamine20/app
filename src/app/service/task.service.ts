import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/Mock-Tasks';
import { Task } from 'src/app/Tasks';
import {Observable,of} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'

const HttpOption ={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
  }
  )
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:8080/tasks/all';

  constructor(private http:HttpClient) { }
  getTaskes():Observable<Task[]>{
  return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task):Observable<Task>{
   const url='http://localhost:8080/tasks/'+task.id;
   return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task):Observable<Task>{

    const urll='http://localhost:8080/tasks/'+task.id;
    return this.http.put<Task>(urll, task, HttpOption);

  

  }
  addTask(task:Task):Observable<Task>{
    console.log("servise",task);
    const urll='http://localhost:8080/tasks'
    return this.http.post<Task>(urll,task);

  }

  getPost():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
