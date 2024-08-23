import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAuthorBtnComponent } from './become-author-btn.component';

describe('BecomeAuthorBtnComponent', () => {
  let component: BecomeAuthorBtnComponent;
  let fixture: ComponentFixture<BecomeAuthorBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BecomeAuthorBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeAuthorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
