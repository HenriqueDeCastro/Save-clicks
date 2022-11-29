import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DrawerButtonModule } from 'src/app/shared/components/drawer-button/drawer-button.module';
import { ThemeButtonModule } from 'src/app/shared/components/theme-button/theme-button.module';
import { MdSysNavButtonModule } from 'src/app/shared/md-sys/md-sys-button/md-sys-nav-button/md-sys-nav-button.module';
import { MdSysNavigationModule } from 'src/app/shared/md-sys/md-sys-navigation/md-sys-navigation.module';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [
        MdSysNavigationModule,
        MdSysNavButtonModule,
        ThemeButtonModule,
        DrawerButtonModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
