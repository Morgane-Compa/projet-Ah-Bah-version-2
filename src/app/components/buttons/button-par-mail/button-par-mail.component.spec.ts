import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonParMailComponent } from './button-par-mail.component';

describe('ButtonParMailComponent', () => {
  let component: ButtonParMailComponent;
  let fixture: ComponentFixture<ButtonParMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonParMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonParMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
