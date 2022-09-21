import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaboutCompanyComponent } from './aabout-company.component';

describe('AaboutCompanyComponent', () => {
  let component: AaboutCompanyComponent;
  let fixture: ComponentFixture<AaboutCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaboutCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaboutCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
