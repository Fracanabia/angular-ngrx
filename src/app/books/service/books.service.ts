import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/books.models';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private _httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this._httpClient
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}
