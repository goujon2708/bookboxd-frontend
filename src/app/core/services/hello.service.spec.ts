import { TestBed } from '@angular/core/testing';

import { HelloService } from './hello.service';

xdescribe('Hello', () => {
  let service: HelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
