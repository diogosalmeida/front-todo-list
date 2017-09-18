import { ROUTES } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './tasks/task-service/task.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TaskComponent } from './tasks/task/task.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
