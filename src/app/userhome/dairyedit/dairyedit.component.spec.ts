import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyeditComponent } from './dairyedit.component';

describe('DairyeditComponent', () => {
  let component: DairyeditComponent;
  let fixture: ComponentFixture<DairyeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
