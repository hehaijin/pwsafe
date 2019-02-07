import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePasswordDialogComponent } from './delete-password-dialog.component';

describe('DeletePasswordDialogComponent', () => {
  let component: DeletePasswordDialogComponent;
  let fixture: ComponentFixture<DeletePasswordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePasswordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
