import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingsPageComponent } from './shoppings-page.component';

describe('ShoppingsPageComponent', () => {
  let component: ShoppingsPageComponent;
  let fixture: ComponentFixture<ShoppingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
