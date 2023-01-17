import { TestBed } from '@angular/core/testing';

import { ProductDetailsPhotosService } from './product-details-photos.service';

describe('ProductDetailsPhotosService', () => {
  let service: ProductDetailsPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailsPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
