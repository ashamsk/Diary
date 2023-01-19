import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseviewComponent } from './expenseview.component';

describe('ExpenseviewComponent', () => {
  let component: ExpenseviewComponent;
  let fixture: ComponentFixture<ExpenseviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
