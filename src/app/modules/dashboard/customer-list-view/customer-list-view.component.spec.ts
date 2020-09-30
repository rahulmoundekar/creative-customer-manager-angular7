import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListViewComponent } from './customer-list-view.component';

describe('CustomerListViewComponent', () => {
  let component: CustomerListViewComponent;
  let fixture: ComponentFixture<CustomerListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
