import {
  selectCurrentCount,
  selectCountAtStart,
  selectCountingBy
} from "./../../reducers/index";
import { countIncremented } from "./../../actions/counter.actions";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import * as actions from "../../actions/counter.actions";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  current$: Observable<number>;
  atStart$: Observable<boolean>;
  by$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.atStart$ = this.store.select(selectCountAtStart);
    this.by$ = this.store.select(selectCountingBy);
  }

  increment() {
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    this.store.dispatch(actions.countReset());
  }

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }
}
