import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonParTelephoneComponent } from './button-par-telephone.component';

describe('ButtonParTelephoneComponent', () => {
  let component: ButtonParTelephoneComponent;
  let fixture: ComponentFixture<ButtonParTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonParTelephoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonParTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
