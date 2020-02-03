import { TodoItem } from "./models";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  @Input() list: TodoItem[] = [];

  constructor() {}

  ngOnInit() {}

  markComplete(item: TodoItem) {
    item.completed = true;
  }
}
