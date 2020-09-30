import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

 customer: Customer;

  constructor(private dashboardcomponent: DashboardComponent) { }

  ngOnInit() {
    this.customer = this.dashboardcomponent.customer;
  }

}
