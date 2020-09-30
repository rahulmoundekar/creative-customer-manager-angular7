import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer';
import { error } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers: Customer[] = [];
  customer: Customer = new Customer();

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
      },
      error => console.log(error));
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomerById(id).subscribe(
      data => {
        this.getCustomers();
      },
      error => console.log(error));
  }

  viewCustomer(id: number) {
    this.customerService.getCustomerById(id).subscribe(
      data => {
        console.log(data);
        this.customer = data;
      },
      error => console.log(error));
      this.router.navigate(['customerDetails']);
  }

  editCustomer(id: number){
    this.customerService.getCustomerById(id).subscribe(
      data => {
        this.customer = data;
        this.router.navigate(['dashboard/newCustomer']);
      },
      error => console.log(error));
  }

}
