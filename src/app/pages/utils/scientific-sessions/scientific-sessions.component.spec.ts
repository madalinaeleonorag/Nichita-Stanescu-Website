import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificSessionsComponent } from './scientific-sessions.component';

describe('ScientificSessionsComponent', () => {
  let component: ScientificSessionsComponent;
  let fixture: ComponentFixture<ScientificSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScientificSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
