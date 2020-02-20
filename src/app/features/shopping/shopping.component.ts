import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ShoppingItemModel } from '../models';
import { ShoppingState, selectShoppingItemModel } from './reducers';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  list$: Observable<ShoppingItemModel[]>;

  constructor(private store: Store<ShoppingState>) { }

  ngOnInit() {
    this.list$ = this.store.select(selectShoppingItemModel);
  }

}
