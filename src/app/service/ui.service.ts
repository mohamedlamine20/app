import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  showaddTask:boolean=false;
  private subject=new Subject<any>();

  constructor() { }
  toggelAddTask():void{
    this.showaddTask = !this.showaddTask;
    this.subject.next(this.showaddTask);
  }
  onToggel():Observable<any>{
   return this.subject.asObservable();
  }
}
