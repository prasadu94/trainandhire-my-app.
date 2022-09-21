import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaboutCeoComponent } from './aabout-ceo.component';

describe('AaboutCeoComponent', () => {
  let component: AaboutCeoComponent;
  let fixture: ComponentFixture<AaboutCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaboutCeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaboutCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
