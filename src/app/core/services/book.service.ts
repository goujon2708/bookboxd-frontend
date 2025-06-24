import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environment/environment';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

    private httpClient = inject(HttpClient);

    searchBooks(book: string): Observable<Book[]> {
        return this.httpClient.get<Book[]>(`${environment.apiUrl}/books/search?query=${book}`);
    }
}
