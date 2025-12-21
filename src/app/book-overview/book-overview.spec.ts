import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BookOverview } from './book-overview';

describe('BookOverview', () => {
  let component: BookOverview;
  let fixture: ComponentFixture<BookOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookOverview],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
