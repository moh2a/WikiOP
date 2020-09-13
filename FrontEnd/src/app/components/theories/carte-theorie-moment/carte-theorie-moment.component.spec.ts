import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteTheorieMomentComponent } from './carte-theorie-moment.component';

describe('CarteTheorieMomentComponent', () => {
  let component: CarteTheorieMomentComponent;
  let fixture: ComponentFixture<CarteTheorieMomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteTheorieMomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteTheorieMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
