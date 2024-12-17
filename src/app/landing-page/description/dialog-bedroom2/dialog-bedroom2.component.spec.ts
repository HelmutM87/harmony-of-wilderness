import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBedroom2Component } from './dialog-bedroom2.component';

describe('DialogBedroom2Component', () => {
  let component: DialogBedroom2Component;
  let fixture: ComponentFixture<DialogBedroom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogBedroom2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogBedroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
