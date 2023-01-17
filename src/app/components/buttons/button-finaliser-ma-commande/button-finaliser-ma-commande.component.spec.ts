import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFinaliserMaCommandeComponent } from './button-finaliser-ma-commande.component';

describe('ButtonFinaliserMaCommandeComponent', () => {
  let component: ButtonFinaliserMaCommandeComponent;
  let fixture: ComponentFixture<ButtonFinaliserMaCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFinaliserMaCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFinaliserMaCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
