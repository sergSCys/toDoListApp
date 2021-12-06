import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[] = []; // any type
  todoTitle: string = '';
  idForTodo: number = 0;
  beforeEdit: string = '';
  constructor() { }

  ngOnInit (){
    this.beforeEdit = '';
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
    this.beforeEdit = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void{
    if(todo.title.trim().length === 0) {
      todo.title = this.beforeEdit;
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {

  }


  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAll(): void {
   for (let i = 0; i < this.todos.length; i++) {
     this.todos[i].completed;
   }
  }
}

