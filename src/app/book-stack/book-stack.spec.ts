import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BookStack } from './book-stack';

describe('BookStack', () => {
  let component: BookStack;
  let fixture: ComponentFixture<BookStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStack],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
