import { createReducer, on } from '@ngrx/store';
import { Book } from '../../books/models/books.models';
import { retrievedBookList } from './books.actions';

export const featureBooksKey = 'books';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (_, { books }) => books)
);
