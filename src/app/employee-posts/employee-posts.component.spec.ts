import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePostsComponent } from './employee-posts.component';

describe('EmployeePostsComponent', () => {
  let component: EmployeePostsComponent;
  let fixture: ComponentFixture<EmployeePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
