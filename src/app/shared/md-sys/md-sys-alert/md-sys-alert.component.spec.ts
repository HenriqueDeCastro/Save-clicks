import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdSysCardModule } from '../md-sys-card/md-sys-card.module';

import { MdSysAlertComponent } from './md-sys-alert.component';

describe('MdSysAlertComponent', () => {
  let component: MdSysAlertComponent;
  let fixture: ComponentFixture<MdSysAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysAlertComponent],
      imports: [MdSysCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
