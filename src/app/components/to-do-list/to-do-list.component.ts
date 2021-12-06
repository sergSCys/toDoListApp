import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[] = []; // any type
  todoTitle: string = "";
  idForTodo: number = 0;
  constructor() { }

  ngOnInit (){
    this.idForTodo = 4;
    this.todos = [
      {
        'id': 1,
        'title': 'Finish Angular thingy',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Second thingy',
        'completed': false,
        'editing': false,
      },
      {
        'id': 3,
        'title': 'third thingy',
        'completed': false,
        'editing': false,
      },
      ]
    }
  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false
    })

    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }


}

