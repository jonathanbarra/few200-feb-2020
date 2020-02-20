import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ListComponent } from '../components/list/list.component';
import { StoreModule } from '@ngrx/store';
// import { reducers } from '../reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { EntryComponent } from '../components/entry/entry.component';
import { featureName } from './reducers';
import { reducers } from 'src/app/reducers';
import { ListEffects } from './effects/list.effects';


@NgModule({
  declarations: [ShoppingComponent, EntryComponent, ListComponent],
  imports: [CommonModule, HttpClientModule, StoreModule.forFeature(featureName, reducers), EffectsModule.forFeature([ListEffects])],
  exports: [ShoppingComponent]
})
export class ShoppingModule { }
