import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdSysIconButtonModule } from '../../md-sys/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';

import { ThemeButtonComponent } from './theme-button.component';
import { of } from 'rxjs';
import { ThemingService } from 'src/app/core/services/common/theming/theming.service';

describe('ThemeButtonComponent', () => {
  let component: ThemeButtonComponent;
  let fixture: ComponentFixture<ThemeButtonComponent>;
  let service: ThemingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeButtonComponent],
      imports: [MdSysIconButtonModule],
      providers: [ThemingService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeButtonComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ThemingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${ThemeButtonComponent.prototype.changeTheme.name}
    should call update from themingService`, () => {
    const drawerServiceChangeSpy = jest.spyOn(service, 'update');
    fixture.detectChanges();

    component.changeTheme('dark');
    expect(drawerServiceChangeSpy).toHaveBeenCalled();
  });

  it('should show text indicating the theme dark when the button is of the extended type', () => {
    component.themeToApply$ = of('dark');
    component.extended = true;
    fixture.detectChanges();
    const labelSwitchThemeElement = fixture.debugElement.queryAll(By.css('.theme-button-extended__label'));
    expect(labelSwitchThemeElement[0].nativeElement).not.toBeNull();
    expect(labelSwitchThemeElement[0].nativeElement.textContent).toContain('Mudar para o modo escuro');
  });

  it('should show text indicating the theme light when the button is of the extended type', () => {
    component.themeToApply$ = of('light');
    component.extended = true;
    fixture.detectChanges();
    const labelSwitchThemeElement = fixture.debugElement.queryAll(By.css('.theme-button-extended__label'));
    expect(labelSwitchThemeElement[0].nativeElement).not.toBeNull();
    expect(labelSwitchThemeElement[0].nativeElement.textContent).toContain('Mudar para o modo claro');
  });
});
