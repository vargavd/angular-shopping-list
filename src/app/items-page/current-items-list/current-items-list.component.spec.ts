import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentItemsListComponent } from './current-items-list.component';

describe('CurrentItemsListComponent', () => {
  let component: CurrentItemsListComponent;
  let fixture: ComponentFixture<CurrentItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
