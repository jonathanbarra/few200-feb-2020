import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-todo-entry",
  templateUrl: "./todo-entry.component.html",
  styleUrls: ["./todo-entry.component.css"]
})
export class TodoEntryComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}

  addItem(item: HTMLInputElement) {
    const description = item.value;
    this.itemAdded.emit(description);
    item.value = "";
    item.focus();
  }
}
