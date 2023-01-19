import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySchoolComponent } from './primary-school.component';

describe('PrimarySchoolComponent', () => {
  let component: PrimarySchoolComponent;
  let fixture: ComponentFixture<PrimarySchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarySchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
