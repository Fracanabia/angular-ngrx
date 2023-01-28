import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../_store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private readonly _store: Store<{ count: number }>) {
    this.count$ = this._store.select('count');
  }

  increment() {
    this._store.dispatch(increment());
  }
  decrement() {
    this._store.dispatch(decrement());
  }
  reset() {
    this._store.dispatch(reset());
  }
}
