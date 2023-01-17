import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeeComponent } from './home-fee.component';

describe('HomeFeeComponent', () => {
  let component: HomeFeeComponent;
  let fixture: ComponentFixture<HomeFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
