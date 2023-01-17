import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPhotosComponent } from './product-details-photos.component';

describe('ProductDetailsPhotosComponent', () => {
  let component: ProductDetailsPhotosComponent;
  let fixture: ComponentFixture<ProductDetailsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
