import { CommunicationsComponent } from "./component/communications/communications.component";
import { TipCalculatorComponent } from "./component/tip-calculator/tip-calculator.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CounterComponent } from "./component/counter/counter.component";

const routes: Routes = [
  {
    path: "counter",
    component: CounterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "tip",
    component: TipCalculatorComponent
  },
  {
    path: "communications",
    component: CommunicationsComponent
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
