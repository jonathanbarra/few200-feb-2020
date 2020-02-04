import { TodoDashboardSummary } from "./../models";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TodoService } from "../communications/todo.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  model$: Observable<TodoDashboardSummary>;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.model$ = this.service.getDashboardSummary();
  }
}
