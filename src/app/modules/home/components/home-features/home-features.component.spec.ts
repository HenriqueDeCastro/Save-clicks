import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdSysCardModule } from 'src/app/shared/md-sys/md-sys-card/md-sys-card.module';

import { HomeFeaturesComponent } from './home-features.component';

describe('HomeFeaturesComponent', () => {
  let component: HomeFeaturesComponent;
  let fixture: ComponentFixture<HomeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFeaturesComponent],
      imports: [MdSysCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create list of cards from cardsList', () => {
    fixture.detectChanges();

    const cardScrollContainerElement = fixture.debugElement.nativeElement.querySelector('.card-scroll-container');
    const cardsListElement = cardScrollContainerElement.querySelectorAll('md-sys-card');

    expect(cardsListElement.length).toBe(6);
  });
});
