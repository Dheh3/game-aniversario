import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HellPage } from './hell.page';

describe('HellPage', () => {
  let component: HellPage;
  let fixture: ComponentFixture<HellPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
