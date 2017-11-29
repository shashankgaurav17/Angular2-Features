import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListChildComponent } from './shopping-list-child.component';

describe('ShoppingListChildComponent', () => {
  let component: ShoppingListChildComponent;
  let fixture: ComponentFixture<ShoppingListChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
