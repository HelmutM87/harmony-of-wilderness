import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBedroom3Component } from './dialog-bedroom3.component';

describe('DialogBedroom3Component', () => {
  let component: DialogBedroom3Component;
  let fixture: ComponentFixture<DialogBedroom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogBedroom3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogBedroom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
