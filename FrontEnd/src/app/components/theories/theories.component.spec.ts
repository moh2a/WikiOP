import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoriesComponent } from './theories.component';

describe('TheoriesComponent', () => {
  let component: TheoriesComponent;
  let fixture: ComponentFixture<TheoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
