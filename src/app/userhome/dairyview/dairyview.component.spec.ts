import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyviewComponent } from './dairyview.component';

describe('DairyviewComponent', () => {
  let component: DairyviewComponent;
  let fixture: ComponentFixture<DairyviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
