import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from '../_store/counter/counter.reducer';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';

const featureCountKey = 'count';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(featureCountKey, counterReducer),
  ],
})
export class CounterModule {}
