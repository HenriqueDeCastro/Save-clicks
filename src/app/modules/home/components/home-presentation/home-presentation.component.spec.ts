import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdSysCardModule } from 'src/app/shared/md-sys/md-sys-card/md-sys-card.module';
import { MdSysDividerModule } from 'src/app/shared/md-sys/md-sys-divider/md-sys-divider.module';

import { HomePresentationComponent } from './home-presentation.component';

describe('HomePresentationComponent', () => {
  let component: HomePresentationComponent;
  let fixture: ComponentFixture<HomePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePresentationComponent],
      imports: [MdSysCardModule, MdSysDividerModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show current year in sentence', () => {
    fixture.detectChanges();
    const currentYear = new Date().getFullYear().toString();
    const cardContainerElement = fixture.debugElement.nativeElement.querySelector('.card-container');
    const cardsListElement = cardContainerElement.querySelectorAll('md-sys-card');

    expect(cardsListElement[0].textContent).toContain(currentYear);
  });

  it('should create list of cards from cardsList', () => {
    fixture.detectChanges();

    const cardContainerElement = fixture.debugElement.nativeElement.querySelector('.card-container');
    const cardsListElement = cardContainerElement.querySelectorAll('md-sys-card');

    expect(cardsListElement.length).toBe(3);
  });
});
