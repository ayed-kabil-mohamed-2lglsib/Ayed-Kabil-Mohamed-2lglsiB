import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutecabmotoComponent } from './aboutecabmoto.component';

describe('AboutecabmotoComponent', () => {
  let component: AboutecabmotoComponent;
  let fixture: ComponentFixture<AboutecabmotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutecabmotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutecabmotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
