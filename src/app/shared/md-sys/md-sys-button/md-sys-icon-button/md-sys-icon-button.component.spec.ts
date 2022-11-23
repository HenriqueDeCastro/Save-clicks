import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysIconButtonComponent } from './md-sys-icon-button.component';

describe('MdSysIconButtonComponent', () => {
  let component: MdSysIconButtonComponent;
  let fixture: ComponentFixture<MdSysIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysIconButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
