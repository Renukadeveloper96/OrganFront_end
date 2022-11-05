import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptFormComponent } from './reciept-form.component';

describe('RecieptFormComponent', () => {
  let component: RecieptFormComponent;
  let fixture: ComponentFixture<RecieptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieptFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
