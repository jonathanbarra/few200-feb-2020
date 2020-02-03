import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tip-calculator",
  templateUrl: "./tip-calculator.component.html",
  styleUrls: ["./tip-calculator.component.css"]
})
export class TipCalculatorComponent implements OnInit {
  billAmount = 0;
  tipPercentage = 0.2;
  constructor() {}

  ngOnInit() {}

  changeTipPercentageTo(amount: number) {
    this.tipPercentage = amount;
  }

  billAmountUnpdated(amount: number) {
    this.billAmount = amount;
  }
}
