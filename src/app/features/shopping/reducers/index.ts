import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingItemModel } from '../../models';

export const featureName = 'shoppingFeature';

export interface ShoppingState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};


// Selectors


// 1. Create a feature
const selectFeature = createFeatureSelector<ShoppingState>(featureName);

// 2. One per branch
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. Helpers
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need


// TODO: ShoppingItemModel[]
export const selectShoppingItemModel = createSelector(selectAllListItems,
  (items) => items.map(item => ({ ...item, isTemporary: item.id.toString().startsWith('T') } as ShoppingItemModel))
);
