import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysScrimComponent } from './md-sys-scrim.component';

describe('MdSysScrimComponent', () => {
  let component: MdSysScrimComponent;
  let fixture: ComponentFixture<MdSysScrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysScrimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysScrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
