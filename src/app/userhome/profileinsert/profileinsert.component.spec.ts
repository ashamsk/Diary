import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileinsertComponent } from './profileinsert.component';

describe('ProfileinsertComponent', () => {
  let component: ProfileinsertComponent;
  let fixture: ComponentFixture<ProfileinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileinsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
