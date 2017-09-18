import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  endPoint: String = "http://localhost:4000"

  constructor(private http: Http) {
    
  }

  getTasks(): Observable<object[]> {
    return this.http.get(`${this.endPoint}/tasks`)
    .map(response => response.json())
  }

}
