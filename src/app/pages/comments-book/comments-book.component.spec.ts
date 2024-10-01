import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBookComponent } from './comments-book.component';

describe('CommentsBookComponent', () => {
  let component: CommentsBookComponent;
  let fixture: ComponentFixture<CommentsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
