import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIsbnLookup } from './book-isbn-lookup';

describe('BookIsbnLookup', () => {
  let component: BookIsbnLookup;
  let fixture: ComponentFixture<BookIsbnLookup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookIsbnLookup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookIsbnLookup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
