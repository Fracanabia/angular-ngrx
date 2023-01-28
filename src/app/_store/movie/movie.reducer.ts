import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '../../_store/movie/movie.actions';
import { Movie } from './../../movie/models/movie.models';

export const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.moviesLoadedAction, (state) => state),
  on(MovieActions.moviesLoadedSuccessAction, (_, { movies }) => movies)
);
