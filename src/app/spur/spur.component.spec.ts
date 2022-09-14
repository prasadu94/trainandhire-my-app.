import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpurComponent } from './spur.component';

describe('SpurComponent', () => {
  let component: SpurComponent;
  let fixture: ComponentFixture<SpurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
