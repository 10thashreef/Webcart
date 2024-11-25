import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnconfirmComponent } from './btnconfirm.component';

describe('BtnconfirmComponent', () => {
  let component: BtnconfirmComponent;
  let fixture: ComponentFixture<BtnconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnconfirmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
