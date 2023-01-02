import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairydeleteComponent } from './dairydelete.component';

describe('DairydeleteComponent', () => {
  let component: DairydeleteComponent;
  let fixture: ComponentFixture<DairydeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairydeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
