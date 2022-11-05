import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListDoctorComponent } from './add-list-doctor.component';

describe('AddListDoctorComponent', () => {
  let component: AddListDoctorComponent;
  let fixture: ComponentFixture<AddListDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
