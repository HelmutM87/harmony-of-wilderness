import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBedroom1Component } from './dialog-bedroom1.component';

describe('DialogBedroom1Component', () => {
  let component: DialogBedroom1Component;
  let fixture: ComponentFixture<DialogBedroom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogBedroom1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogBedroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
