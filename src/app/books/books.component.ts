import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBook, retrievedBookList } from '../_store/books/books.actions';
import { removeBook } from './../_store/books/books.actions';
import {
  selectBookCollection,
  selectBooks,
} from './../_store/books/books.selectors';
import { BooksService } from './service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public books$ = this._store.select(selectBooks);

  public bookCollection$ = this._store.select(selectBookCollection);

  constructor(
    private readonly _store: Store,
    private readonly _booksService: BooksService
  ) {}

  ngOnInit(): void {
    this._booksService.getBooks().subscribe({
      next: (books) => this._store.dispatch(retrievedBookList({ books })),
    });
  }

  onAdd(bookId: string) {
    this._store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this._store.dispatch(removeBook({ bookId }));
  }
}
