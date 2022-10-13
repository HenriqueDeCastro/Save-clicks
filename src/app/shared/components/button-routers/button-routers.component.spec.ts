import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRoutersComponent } from './button-routers.component';

describe('ButtonRoutersComponent', () => {
  let component: ButtonRoutersComponent;
  let fixture: ComponentFixture<ButtonRoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRoutersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
