import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeeGetAllMock } from '../../classes/mocks/brasil-api/fee/fee-get-all.mock';
import { MdSysCardModule } from '../../md-sys/md-sys-card/md-sys-card.module';
import { MdSysSkeletonModule } from '../../md-sys/md-sys-skeleton/md-sys-skeleton.module';

import { FeeCardsComponent } from './fee-cards.component';

describe('FeeCardsComponent', () => {
  let component: FeeCardsComponent;
  let fixture: ComponentFixture<FeeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeeCardsComponent],
      imports: [MdSysCardModule, MdSysSkeletonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeCardsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display skeleton when fee is empty', () => {
    fixture.detectChanges();
    const feeCardsContainer = fixture.debugElement.nativeElement.querySelector('.fee-cards__container');
    const mdSysSkeleton = feeCardsContainer.querySelectorAll('md-sys-skeleton');

    expect(mdSysSkeleton.length).toBe(3);
  });

  it('should display fee-cards when receive fee list', () => {
    component.fee = FeeGetAllMock;
    fixture.detectChanges();

    const feeCardsContainer = fixture.debugElement.nativeElement.querySelector('.fee-cards__container');
    const feeCardsContent = feeCardsContainer.querySelectorAll('.fee-cards__card__content');

    expect(feeCardsContent.length).toBe(3);
  });
});
