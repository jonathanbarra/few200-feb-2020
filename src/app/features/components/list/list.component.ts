import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingItemModel } from '../../models';
import { Store } from '@ngrx/store';
import { ShoppingState } from '../../shopping/reducers';
import { ShoppingItemEntity } from '../../shopping/reducers/list.reducer';
import { shoppingItemPurchased } from '../../shopping/actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() model: ShoppingItemModel[];

  constructor(private store: Store<ShoppingState>) { }

  ngOnInit() {
  }

  markPurchased(item: ShoppingItemEntity) {
    this.store.dispatch(shoppingItemPurchased({ payload: item }));
  }

}
