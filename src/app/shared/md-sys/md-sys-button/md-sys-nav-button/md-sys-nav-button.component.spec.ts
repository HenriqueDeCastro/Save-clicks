import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysNavButtonComponent } from './md-sys-nav-button.component';

describe('MdSysNavButtonComponent', () => {
  let component: MdSysNavButtonComponent;
  let fixture: ComponentFixture<MdSysNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysNavButtonComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
