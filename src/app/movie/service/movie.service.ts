import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this._httpClient
      .get<{ items: Movie[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}
