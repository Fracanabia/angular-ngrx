import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MovieActions from '../_store/movie/movie.actions';
import { selectMovies } from '../_store/movie/movie.selectors';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies$ = this._store.select(selectMovies);

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(MovieActions.moviesLoadedAction());
  }
}
