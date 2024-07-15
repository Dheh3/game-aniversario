import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyPage } from './key.page';

describe('KeyPage', () => {
  let component: KeyPage;
  let fixture: ComponentFixture<KeyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
