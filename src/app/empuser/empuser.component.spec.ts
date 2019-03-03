import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpuserComponent } from './empuser.component';

describe('EmpuserComponent', () => {
  let component: EmpuserComponent;
  let fixture: ComponentFixture<EmpuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
