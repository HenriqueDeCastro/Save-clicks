import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysCardComponent } from './md-sys-card.component';

describe('MdSysCardComponent', () => {
  let component: MdSysCardComponent;
  let fixture: ComponentFixture<MdSysCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
