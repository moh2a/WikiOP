import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPersonnageComponent } from './nouveau-personnage.component';

describe('NouveauPersonnageComponent', () => {
  let component: NouveauPersonnageComponent;
  let fixture: ComponentFixture<NouveauPersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
