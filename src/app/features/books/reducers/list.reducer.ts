import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';

export interface BookItemEntity {
  title: string;
  author: string;
  format: string;
}

export interface ListState extends EntityState<BookItemEntity> {

}

export const adapter = createEntityAdapter<BookItemEntity>();


// const initialState = adapter.getInitialState();

const initialState: ListState = {
  ids: ['1', '2'],
  entities: {
    1: { title: '1', author: 'Shampoo', format: 'Hardcover' },
    2: { title: '2', author: 'Conditioner', format: 'E - Book' },
  }
};

const reducerFunction = createReducer(
  initialState,
  /* on(listActions.shoppingItemAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(listActions.shoppingItemPurchased, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { purchased: true } }, s)),
  on(listActions.shoppingListLoaded, (s, a) => adapter.addAll(a.payload, s)),
  on(listActions.shoppingItemAddedSuccessfully, (s, a) => {
    const tempState = adapter.removeOne(a.oldId, s);
    return adapter.addOne(a.payload, tempState); */
  // })
);


export function reducer(state: ListState = initialState, action: Action) {
  return reducerFunction(state, action);
}



