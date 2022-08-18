import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookPageComponent } from './single-book-page.component';

describe('SingleBookPageComponent', () => {
  let component: SingleBookPageComponent;
  let fixture: ComponentFixture<SingleBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBookPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
