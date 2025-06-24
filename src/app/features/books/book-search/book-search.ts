import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Book} from '../../../core/models/book';
import {BookService} from '../../../core/services/book.service';

@Component({
  selector: 'app-book-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-search.html',
  styleUrl: './book-search.scss'
})
export class BookSearch {

    query = '';
    results: Book[] = [];

    private bookService = inject(BookService);

    search() {
        if (!this.query.trim()) return;

        this.bookService.searchBooks(this.query).subscribe({
            next: (books) => this.results = books,
            error: (err) => {
                console.error('Erreur API', err);
                this.results = [];
            }
        });
    }
}
