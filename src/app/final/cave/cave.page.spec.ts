import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CavePage } from './cave.page';

describe('CavePage', () => {
  let component: CavePage;
  let fixture: ComponentFixture<CavePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
