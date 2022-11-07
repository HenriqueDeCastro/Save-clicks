import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysDrawerComponent } from './md-sys-drawer.component';

describe('MdSysDrawerComponent', () => {
  let component: MdSysDrawerComponent;
  let fixture: ComponentFixture<MdSysDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdSysDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
