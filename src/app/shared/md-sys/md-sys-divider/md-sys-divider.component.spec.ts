import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysDividerComponent } from './md-sys-divider.component';

describe('MdSysDividerComponent', () => {
  let component: MdSysDividerComponent;
  let fixture: ComponentFixture<MdSysDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
