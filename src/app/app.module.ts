import { TodoService } from "./component/communications/todo.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TipCalculatorComponent } from "./component/tip-calculator/tip-calculator.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { NavComponent } from "./component/nav/nav.component";
import { CommunicationsComponent } from "./component/communications/communications.component";
import { TodoEntryComponent } from "./component/communications/todo-entry/todo-entry.component";
import { TodoListComponent } from "./component/communications/todo-list/todo-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    DashboardComponent,
    NavComponent,
    CommunicationsComponent,
    TodoEntryComponent,
    TodoListComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
