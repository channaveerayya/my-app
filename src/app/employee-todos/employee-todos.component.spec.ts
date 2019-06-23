import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTodosComponent } from './employee-todos.component';

describe('EmployeeTodosComponent', () => {
  let component: EmployeeTodosComponent;
  let fixture: ComponentFixture<EmployeeTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
