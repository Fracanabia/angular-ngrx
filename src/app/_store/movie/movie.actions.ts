import { createAction, props } from '@ngrx/store';
import { Movie } from './../../movie/models/movie.models';

export const moviesLoadedAction = createAction('[Movies API] Movies Loaded');

export const moviesLoadedSuccessAction = createAction(
  '[Movies API] Movies Loaded Success',
  props<{ movies: ReadonlyArray<Movie> }>()
);
