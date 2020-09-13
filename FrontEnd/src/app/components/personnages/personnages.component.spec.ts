import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnagesComponent } from './personnages.component';

describe('PersonnagesComponent', () => {
  let component: PersonnagesComponent;
  let fixture: ComponentFixture<PersonnagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
