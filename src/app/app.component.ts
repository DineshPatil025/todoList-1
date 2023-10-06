import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todoList-1';
  todoArr: Array<string> = [];

  getTodo(todo: string) {
    this.todoArr.push(todo)
  }

  ngOnInit(): void {

  }
}
