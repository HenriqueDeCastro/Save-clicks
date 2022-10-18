import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToolbarModule } from './core/toolbar/toolbar.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToolbarModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a app-toolbar', () => {
    fixture.detectChanges();
    const headerElements = fixture.debugElement.queryAll(By.css('app-toolbar'));
    expect(headerElements.length).toBe(1);
  });

  it('should have a router-outlet', () => {
    fixture.detectChanges();
    const routerOutletElements = fixture.debugElement.queryAll(By.css('router-outlet'));
    expect(routerOutletElements[0].nativeElement).toBeTruthy();
  });
});
