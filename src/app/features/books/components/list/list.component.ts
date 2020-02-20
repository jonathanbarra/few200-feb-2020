import { BookItemModel } from './../../../models';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookState } from '../../reducers';
import { BookItemEntity } from '../../reducers/list.reducer';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListComponent implements OnInit {

  @Input() model: BookItemModel[];

  constructor(private store: Store<BookItemModel>) { }

  ngOnInit() {
  }


}



