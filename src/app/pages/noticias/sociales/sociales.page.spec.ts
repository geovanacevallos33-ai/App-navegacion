import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialesPage } from './sociales.page';

describe('SocialesPage', () => {
  let component: SocialesPage;
  let fixture: ComponentFixture<SocialesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
