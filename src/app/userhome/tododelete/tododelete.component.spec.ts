import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododeleteComponent } from './tododelete.component';

describe('TododeleteComponent', () => {
  let component: TododeleteComponent;
  let fixture: ComponentFixture<TododeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
