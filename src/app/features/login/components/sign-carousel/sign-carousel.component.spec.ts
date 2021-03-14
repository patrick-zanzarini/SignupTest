import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignCarouselComponent } from './sign-carousel.component';

describe('SignCarouselComponent', () => {
  let component: SignCarouselComponent;
  let fixture: ComponentFixture<SignCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
