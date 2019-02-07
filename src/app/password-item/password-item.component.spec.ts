import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordItemComponent } from './password-item.component';

describe('PasswordItemComponent', () => {
  let component: PasswordItemComponent;
  let fixture: ComponentFixture<PasswordItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
