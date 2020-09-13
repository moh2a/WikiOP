import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheorieComponent } from './theorie.component';

describe('TheorieComponent', () => {
  let component: TheorieComponent;
  let fixture: ComponentFixture<TheorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
