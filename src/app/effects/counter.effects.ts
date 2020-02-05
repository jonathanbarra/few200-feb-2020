import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { tap, map, filter } from "rxjs/operators";
import * as counterActions from "../actions/counter.actions";
import { applicationStarted } from "../actions/app.actions";
import { Store } from "@ngrx/store";
import { AppState, selectCurrentCount } from "../reducers";

@Injectable()
export class CounterEffects {
  // when application is started:
  // check the local storate for "by"
  // if it is there, dispatch an action at setCountBy
  // if it isn't there, don't do anything

  readCountFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(applicationStarted),
        map(() => localStorage.getItem("by")),
        filter(by => by !== null),
        map(by => +by), //  AKA  parseInt(by, 10)),
        map(by => counterActions.countBySet({ by }))
      ),
    { dispatch: true }
  );

  readCurrentFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(applicationStarted),
        map(() => localStorage.getItem("current")),
        filter(current => current !== null),
        map(current => +current), //  AKA  parseInt(by, 10)),
        map(current => counterActions.currentSet({ current }))
      ),
    { dispatch: true }
  );
  writeCountToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(counterActions.countBySet),
        tap(a => localStorage.setItem("by", a.by.toString()))
      ),
    { dispatch: false }
  );

  writeCurrentToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          counterActions.countDecremented,
          counterActions.countIncremented,
          counterActions.countReset
        ),
        tap(() => localStorage.setItem("current", this.current.toString()))
      ),
    { dispatch: false }
  );

  logActions$ = createEffect(
    () =>
      this.actions$.pipe(
        tap(a => console.log(`Got an action of type ${a.type}`))
      ),
    { dispatch: false }
  );

  current: number;
  constructor(private actions$: Actions, private store: Store<AppState>) {
    store.select(selectCurrentCount).subscribe(c => (this.current = c));
  }
}
