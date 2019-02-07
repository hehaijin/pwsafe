import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGroupComponent } from './password-group.component';

describe('PasswordGroupComponent', () => {
  let component: PasswordGroupComponent;
  let fixture: ComponentFixture<PasswordGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
