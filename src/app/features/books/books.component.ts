import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookItemModel } from '../models';
import { BookState, selectBookItemModel } from './reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  list$: Observable<BookItemModel[]>;

  constructor(private store: Store<BookState>) { }

  ngOnInit() {
    this.list$ = this.store.select(selectBookItemModel);
  }

}
