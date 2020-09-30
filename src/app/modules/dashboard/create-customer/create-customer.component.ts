import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  created = false;


  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
  }

  save() {
    this.customerService.createNewCustomer(this.customer)
      .subscribe(
        error => console.log(error));
    this.customer = new Customer();
    this.created = true;
  }

  onSubmit() {
    this.save();
  }


  
}
