import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { tap, map, filter } from "rxjs/operators";
import * as counterActions from "../actions/counter.actions";
import { applicationStarted } from "../actions/app.actions";

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

  writeCountToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(counterActions.countBySet),
        tap(a => localStorage.setItem("by", a.by.toString()))
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

  constructor(private actions$: Actions) {}
}
