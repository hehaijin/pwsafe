import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPasswordComponent } from './add-new-password.component';

describe('AddNewPasswordComponent', () => {
  let component: AddNewPasswordComponent;
  let fixture: ComponentFixture<AddNewPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
