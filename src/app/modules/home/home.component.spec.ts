import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdSysAlertModule } from 'src/app/shared/md-sys/md-sys-alert/md-sys-alert.module';
import { HomeFeaturesModule } from './components/home-features/home-features.module';
import { HomePresentationModule } from './components/home-presentation/home-presentation.module';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeeCardsModule } from 'src/app/shared/components/fee-cards/fee-cards.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        MdSysAlertModule,
        HomeFeaturesModule,
        HomePresentationModule,
        FeeCardsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
