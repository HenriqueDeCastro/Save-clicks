import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysNavigationComponent } from './md-sys-navigation.component';

describe('MdSysNavigationComponent', () => {
  let component: MdSysNavigationComponent;
  let fixture: ComponentFixture<MdSysNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
