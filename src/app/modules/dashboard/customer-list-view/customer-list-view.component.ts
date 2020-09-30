import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css']
})
export class CustomerListViewComponent implements OnInit {

  customers: Observable<Customer[]>;


  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customers = this.customerService.getCustomerList();
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomerById(id).subscribe(
      data => {
        this.getCustomers();
      },
      error => console.log(error));
  }

}
