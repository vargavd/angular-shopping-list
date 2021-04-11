import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryItemsListComponent } from './every-items-list.component';

describe('EveryItemsListComponent', () => {
  let component: EveryItemsListComponent;
  let fixture: ComponentFixture<EveryItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
