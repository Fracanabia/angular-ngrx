import { createFeatureSelector } from '@ngrx/store';
import { Movie } from '../../movie/models/movie.models';

export const selectMovies =
  createFeatureSelector<ReadonlyArray<Movie>>('movies');
