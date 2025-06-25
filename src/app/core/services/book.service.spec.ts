import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('Book', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
