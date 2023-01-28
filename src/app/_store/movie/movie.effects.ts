import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieService } from 'src/app/movie/service/movie.service';
import * as MovieActions from '../../_store/movie/movie.actions';

@Injectable({ providedIn: 'root' })
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.moviesLoadedAction),
      mergeMap(() =>
        this.movieService.getAll().pipe(
          map((movies) => MovieActions.moviesLoadedSuccessAction({ movies })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
