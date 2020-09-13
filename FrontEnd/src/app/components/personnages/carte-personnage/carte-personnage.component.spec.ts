import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePersonnageComponent } from './carte-personnage.component';

describe('CartePersonnageComponent', () => {
  let component: CartePersonnageComponent;
  let fixture: ComponentFixture<CartePersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartePersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
