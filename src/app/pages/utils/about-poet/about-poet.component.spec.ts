import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPoetComponent } from './about-poet.component';

describe('AboutPoetComponent', () => {
  let component: AboutPoetComponent;
  let fixture: ComponentFixture<AboutPoetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPoetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPoetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
