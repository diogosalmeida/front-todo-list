import { TasksComponent } from './tasks/tasks.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {path: '', redirectTo: '/tasks', pathMatch: 'full'},
    {path: 'tasks', component: TasksComponent }
]