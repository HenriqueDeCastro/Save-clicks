import { AppRoutesEnum } from 'src/app/shared/classes/enums';
import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, } from 'rxjs';
import { DrawerButtonModule } from 'src/app/shared/components/drawer-button/drawer-button.module';
import { MdSysIconButtonModule } from 'src/app/shared/md-sys/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';

import { ToolbarComponent } from './toolbar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ThemingService } from '../../services/common/theming/theming.service';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [
        MdSysIconButtonModule,
        DrawerButtonModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: AppRoutesEnum.HOME,
            loadChildren:() => import('../../../modules/home/home.module').then((m) => m.HomeModule),
          }
        ])
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
    const imgElement = fixture.debugElement.nativeElement.querySelector('img');
    expect(imgElement).not.toBeNull();
    expect(imgElement['src']).toContain('http://localhost/assets/imgs/logo-dark.svg');
  });

  it('should show image and have as src ./logo-light-theme when theme is light', () => {
    component.currentTheme$ = of('light');
    fixture.detectChanges();
    const imgElement = fixture.debugElement.nativeElement.querySelector('img');
    expect(imgElement).not.toBeNull();
    expect(imgElement['src']).toContain('http://localhost/assets/imgs/logo-light.svg');
  });

  it('should navigate to home page when image is clicked',
    fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
    fixture.detectChanges();

    const imgElement = fixture.debugElement.nativeElement.querySelector('img');
    imgElement.click();
    tick();

    fixture.whenStable().then(() => expect(location.path()).toEqual('/' + AppRoutesEnum.HOME));
  })));

  it(`should not display the logo when route to equal ${AppRoutesEnum.HOME}`, () => {
    fixture.detectChanges();
    let imgElement = fixture.debugElement.nativeElement.querySelector('img');
    imgElement.click();

    fixture.detectChanges();
    imgElement = fixture.debugElement.nativeElement.querySelector('img');
    expect(imgElement).toBeNull();
  });
});
