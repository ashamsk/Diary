import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyentryComponent } from './dairyentry.component';

describe('DairyentryComponent', () => {
  let component: DairyentryComponent;
  let fixture: ComponentFixture<DairyentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
