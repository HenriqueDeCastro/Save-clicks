import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { NavModule } from './core/nav/nav.module';
import { DrawerService } from './core/services/drawer/drawer.service';
import { ScrimService } from './core/services/scrim/scrim.service';
import { ThemingService } from './core/services/theming/theming.service';
import { ToolbarModule } from './core/toolbar/toolbar.module';
import { MdSysDrawerModule } from './shared/md-sys/md-sys-drawer/md-sys-drawer.module';
import { MdSysScrimModule } from './shared/md-sys/md-sys-scrim/md-sys-scrim.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        ToolbarModule,
        NavModule,
        MdSysScrimModule,
        MdSysDrawerModule,
        FooterModule
      ],
      providers: [
        ThemingService,
        ScrimService,
        DrawerService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display .noscroll when showDrawer$ is true', () => {
    component.showDrawer$ = of(true);
    fixture.detectChanges();
    const noScrollElement = fixture.debugElement.nativeElement.querySelector('.noscroll');
    expect(noScrollElement).not.toBeNull();
    expect(noScrollElement).not.toBeNull();
  });

  it('should display .scroll when showDrawer$ is false', () => {
    component.showDrawer$ = of(false);
    fixture.detectChanges();
    const scrollElement = fixture.debugElement.nativeElement.querySelector('.scroll');
    expect(scrollElement).not.toBeNull();
    expect(scrollElement).not.toBeNull();
  });
});
