import { Component, OnInit,Output } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:String='Task Tracker';
  showAddTask!:boolean;
  subscription!:Subscription;




  constructor(private uiService:UiService ,private router:Router) { 
    this.subscription =this.uiService.onToggel().subscribe(value =>(this.showAddTask=value));
   

  }

  ngOnInit(): void {
  }
 taggelClick(){
   this.uiService.toggelAddTask(); 

 }
 hasRoute(route:string){
   return this.router.url=== route;
 }
}
