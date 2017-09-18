import { Component, OnInit } from '@angular/core';
import { TaskService } from './task-service/task.service';

@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks: object[]

  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks)
  }


  
}
