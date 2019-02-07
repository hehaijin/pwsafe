import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMangerComponent } from './password-manger.component';

describe('PasswordMangerComponent', () => {
  let component: PasswordMangerComponent;
  let fixture: ComponentFixture<PasswordMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
