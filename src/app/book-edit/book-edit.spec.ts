import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BookEdit } from './book-edit';

describe('BookEdit', () => {
  let component: BookEdit;
  let fixture: ComponentFixture<BookEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookEdit],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
