import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComments } from './book-comments';

describe('BookComments', () => {
  let component: BookComments;
  let fixture: ComponentFixture<BookComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
