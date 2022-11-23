import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, } from 'rxjs';
import { DrawerButtonModule } from 'src/app/shared/components/drawer-button/drawer-button.module';
import { MdSysIconButtonModule } from 'src/app/shared/md-sys/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';
import { ThemingService } from '../services/theming/theming.service';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [
        MdSysIconButtonModule,
        DrawerButtonModule
      ],
      providers: [ThemingService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show image and have as src ./logo-dark-theme when theme is dark', () => {
    component.currentTheme$ = of('dark');
    fixture.detectChanges();
    const imgElement = fixture.debugElement.nativeElement.querySelectorAll('img');
    expect(imgElement).not.toBeNull();
    expect(imgElement[0]['src']).toContain('logo-dark-theme.svg');
  });

  it('should show image and have as src ./logo-light-theme when theme is light', () => {
    component.currentTheme$ = of('light');
    fixture.detectChanges();
    const imgElement = fixture.debugElement.nativeElement.querySelectorAll('img');
    expect(imgElement).not.toBeNull();
    expect(imgElement[0]['src']).toContain('logo-light-theme.svg');
  });
});
