import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerService } from 'src/app/core/services/drawer/drawer.service';
import { DrawerButtonModule } from '../../components/drawer-button/drawer-button.module';
import { ThemeButtonModule } from '../../components/theme-button/theme-button.module';
import { MdSysNavButtonModule } from '../md-sys-button/md-sys-nav-button/md-sys-nav-button.module';

import { MdSysDrawerComponent } from './md-sys-drawer.component';

describe('MdSysDrawerComponent', () => {
  let component: MdSysDrawerComponent;
  let fixture: ComponentFixture<MdSysDrawerComponent>;
  let service: DrawerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdSysDrawerComponent],
      imports: [
        DrawerButtonModule,
        MdSysNavButtonModule,
        ThemeButtonModule,
        RouterTestingModule
      ],
      providers: [DrawerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdSysDrawerComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DrawerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${MdSysDrawerComponent.prototype.changeStatusDrawer.name}
    should call change from drawerService`, () => {
    const drawerServiceChangeSpy = jest.spyOn(service, 'change');
    fixture.detectChanges();

    component.changeStatusDrawer();
    expect(drawerServiceChangeSpy).toHaveBeenCalled();
  });

  it('should create list of buttons from buttonList', () => {
    fixture.detectChanges();

    const mdSysDrawerNavigationContainerListElement = fixture.debugElement.nativeElement.querySelector('.md-sys-drawer__navigation-container__list');
    const buttonsListElement = mdSysDrawerNavigationContainerListElement.querySelectorAll('md-sys-nav-button');

    expect(buttonsListElement.length).toBe(11);
  });
});
