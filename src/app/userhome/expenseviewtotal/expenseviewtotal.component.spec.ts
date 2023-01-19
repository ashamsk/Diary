import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseviewtotalComponent } from './expenseviewtotal.component';

describe('ExpenseviewtotalComponent', () => {
  let component: ExpenseviewtotalComponent;
  let fixture: ComponentFixture<ExpenseviewtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseviewtotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseviewtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
