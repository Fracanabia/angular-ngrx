import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../../books/models/books.models';
import { featureBooksKey } from './books.reducer';
import { featureCollectionKey } from './collection.reducer';

export const selectBooks =
  createFeatureSelector<ReadonlyArray<Book>>(featureBooksKey);

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>(featureCollectionKey);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collections) => {
    return books.filter((book) =>
      collections.some((collection) => collection === book.id)
    );
  }
);
