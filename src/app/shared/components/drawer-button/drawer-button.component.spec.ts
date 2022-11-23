import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerService } from 'src/app/core/services/drawer/drawer.service';
import { MdSysIconButtonModule } from '../../md-sys/md-sys-button/md-sys-icon-button/md-sys-icon-button.module';

import { DrawerButtonComponent } from './drawer-button.component';

describe('DrawerButtonComponent', () => {
  let component: DrawerButtonComponent;
  let fixture: ComponentFixture<DrawerButtonComponent>;
  let service: DrawerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerButtonComponent],
      imports: [MdSysIconButtonModule],
      providers: [DrawerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerButtonComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DrawerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${DrawerButtonComponent.prototype.showDrawer.name}
    should call change from drawerService`, () => {
    const drawerServiceChangeSpy = jest.spyOn(service, 'change');
    fixture.detectChanges();

    component.showDrawer();
    expect(drawerServiceChangeSpy).toHaveBeenCalled();
  });
});
