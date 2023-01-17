import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMoinsComponent } from './button-moins.component';

describe('ButtonMoinsComponent', () => {
  let component: ButtonMoinsComponent;
  let fixture: ComponentFixture<ButtonMoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonMoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
