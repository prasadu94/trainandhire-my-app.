import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaboutDirectorComponent } from './aabout-director.component';

describe('AaboutDirectorComponent', () => {
  let component: AaboutDirectorComponent;
  let fixture: ComponentFixture<AaboutDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaboutDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaboutDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
