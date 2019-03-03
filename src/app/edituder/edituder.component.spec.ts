import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituderComponent } from './edituder.component';

describe('EdituderComponent', () => {
  let component: EdituderComponent;
  let fixture: ComponentFixture<EdituderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
