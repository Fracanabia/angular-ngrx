import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/books.models';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> | null = [];
  @Output() remove = new EventEmitter<string>();
}
