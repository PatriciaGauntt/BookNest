import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BookFeedback } from './book-feedback';

describe('BookFeedback', () => {
  let component: BookFeedback;
  let fixture: ComponentFixture<BookFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookFeedback],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
