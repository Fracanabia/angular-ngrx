import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { booksReducer, featureBooksKey } from '../_store/books/books.reducer';
import {
  collectionReducer,
  featureCollectionKey,
} from '../_store/books/collection.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookCollectionComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature(featureBooksKey, booksReducer),
    StoreModule.forFeature(featureCollectionKey, collectionReducer),
  ],
})
export class BooksModule {}
