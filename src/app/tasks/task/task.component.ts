import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  @Input() task;
  constructor() { }

  ngOnInit() {
  }

}
