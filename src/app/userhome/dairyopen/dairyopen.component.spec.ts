import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyopenComponent } from './dairyopen.component';

describe('DairyopenComponent', () => {
  let component: DairyopenComponent;
  let fixture: ComponentFixture<DairyopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyopenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
