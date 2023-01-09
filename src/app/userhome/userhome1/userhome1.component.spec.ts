import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userhome1Component } from './userhome1.component';

describe('Userhome1Component', () => {
  let component: Userhome1Component;
  let fixture: ComponentFixture<Userhome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userhome1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userhome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
