import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteTheorieComponent } from './carte-theorie.component';

describe('CarteTheorieComponent', () => {
  let component: CarteTheorieComponent;
  let fixture: ComponentFixture<CarteTheorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteTheorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteTheorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
