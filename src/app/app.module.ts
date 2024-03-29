import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskComponent } from './components/task/task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestPipe } from './test.pipe';
  const appRoutes :Routes=[
    { path:'',component:TaskComponent},
    { path:'about',component:AboutComponent},
  ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TaskComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    TestPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,RouterModule.forRoot(appRoutes,{enableTracing :true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
