import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveproductComponent } from './saveproduct.component';

describe('SaveproductComponent', () => {
  let component: SaveproductComponent;
  let fixture: ComponentFixture<SaveproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveproductComponent]
    });
    fixture = TestBed.createComponent(SaveproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
