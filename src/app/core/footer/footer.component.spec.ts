import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show current year in sentence', () => {
    fixture.detectChanges();
    const currentYear = new Date().getFullYear().toString();
    const footerElement = fixture.debugElement.nativeElement.querySelector('.footer');

    expect(footerElement.textContent).toContain(currentYear);
  });
});
