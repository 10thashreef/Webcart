import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrimordComponent } from './confrimord.component';

describe('ConfrimordComponent', () => {
  let component: ConfrimordComponent;
  let fixture: ComponentFixture<ConfrimordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfrimordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfrimordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
