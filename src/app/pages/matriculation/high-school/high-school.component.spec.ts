import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchoolComponent } from './high-school.component';

describe('HighSchoolComponent', () => {
  let component: HighSchoolComponent;
  let fixture: ComponentFixture<HighSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
