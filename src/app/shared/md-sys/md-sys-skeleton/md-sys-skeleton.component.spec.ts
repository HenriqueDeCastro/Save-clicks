import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdSysSkeletonComponent } from './md-sys-skeleton.component';

describe('MdSysSkeletonComponent', () => {
  let component: MdSysSkeletonComponent;
  let fixture: ComponentFixture<MdSysSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdSysSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
