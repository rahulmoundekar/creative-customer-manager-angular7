import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerListViewComponent } from 'src/app/modules/dashboard/customer-list-view/customer-list-view.component';
import { CreateCustomerComponent } from 'src/app/modules/dashboard/create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { CustomerInfoComponent } from 'src/app/modules/dashboard/customer-info/customer-info.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProfileComponent,
    CreateCustomerComponent,
    CustomerListViewComponent,
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class DefaultModule { }