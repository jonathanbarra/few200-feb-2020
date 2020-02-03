import { TodoService } from "./todo.service";
import { Component, OnInit } from "@angular/core";
import { TodoItem } from "./todo-list/models";
import { Observable } from "rxjs";

@Component({
  selector: "app-communications",
  templateUrl: "./communications.component.html",
  styleUrls: ["./communications.component.css"]
})
export class CommunicationsComponent implements OnInit {
  /*  todoList: TodoItem[] = [
    { description: "mop floors", completed: true },
    { description: "take out trash", completed: false }
  ]; */

  todoList$: Observable<TodoItem[]>;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.todoList$ = this.service.getTodoItems();
  }

  onItemAdded(description: string) {
    this.service.addTodoItem(description);
  }
}
