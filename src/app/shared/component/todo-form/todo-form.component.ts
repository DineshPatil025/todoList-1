import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
 @Output() getTodo : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendToDoItem(todo : HTMLInputElement){
    let val = todo.value.toLocaleUpperCase();
    if(val.length > 0){
      this.getTodo.emit(val)
      todo.value = "";
    }else{
      alert("add item");
    }
   
    todo.focus()
    
  }

}
