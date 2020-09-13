import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageComponent } from './personnage.component';

describe('PersonnageComponent', () => {
  let component: PersonnageComponent;
  let fixture: ComponentFixture<PersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
