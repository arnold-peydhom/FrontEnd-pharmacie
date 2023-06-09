import { TestBed } from '@angular/core/testing';

import { ListProductService } from './list-product.service';

describe('ListProductService', () => {
  let service: ListProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
