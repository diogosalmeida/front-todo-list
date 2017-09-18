import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {path: '', redirectTo: '/tasks', pathMatch: 'full'},
    {path: 'tasks', component: TasksComponent, children:[
        { path: '', redirectTo: 'task', pathMatch: 'full' },
        { path: 'task', component: TaskComponent },
    ] },
    {path:'criar-task',component: CreateTaskComponent}
]