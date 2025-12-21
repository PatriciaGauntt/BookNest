import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BookResume } from './book-resume';

describe('BookResume', () => {
  let component: BookResume;
  let fixture: ComponentFixture<BookResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookResume],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
