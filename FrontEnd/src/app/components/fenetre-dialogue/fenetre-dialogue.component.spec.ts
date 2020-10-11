import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreDialogueComponent } from './fenetre-dialogue.component';

describe('FenetreDialogueComponent', () => {
  let component: FenetreDialogueComponent;
  let fixture: ComponentFixture<FenetreDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenetreDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenetreDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
