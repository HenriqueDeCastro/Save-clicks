import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRoutersComponent } from './menu-routers.component';

describe('MenuRoutersComponent', () => {
  let component: MenuRoutersComponent;
  let fixture: ComponentFixture<MenuRoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRoutersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
