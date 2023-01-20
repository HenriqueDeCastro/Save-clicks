import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
