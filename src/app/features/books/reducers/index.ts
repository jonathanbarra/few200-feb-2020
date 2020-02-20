import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import { BookItemModel } from '../../models';


export const featureName = 'bookFeature';

export interface BookState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};



// Selectors


// 1. Create a feature
const selectFeature = createFeatureSelector<BookState>(featureName);

// 2. One per branch
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. Helpers
const { selectAll: selectAllListItems } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need


// TODO: ShoppingItemModel[]
export const selectBookItemModel = createSelector(selectAllListItems,
  (items) => items.map(item => ({ ...item } as BookItemModel))
  // (items) => items.map(item => ({ ...item, isTemporary: item.id.toString().startsWith('T') } as BooksItemModel))
);
