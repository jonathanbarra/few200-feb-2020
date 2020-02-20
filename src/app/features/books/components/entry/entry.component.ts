import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  addItem(descriptionEl: HTMLInputElement) {
    // todo : dispatch an action
    const description = descriptionEl.value;
    // this.store.dispatch(shoppingItemAdded({ description }));
    descriptionEl.value = '';
    descriptionEl.focus();
  }
}
