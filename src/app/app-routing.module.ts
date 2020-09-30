import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { CreateCustomerComponent } from './modules/dashboard/create-customer/create-customer.component';
import { CustomerListViewComponent } from './modules/dashboard/customer-list-view/customer-list-view.component';
import { CustomerInfoComponent } from './modules/dashboard/customer-info/customer-info.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  },{
    path: 'profile',
    component:ProfileComponent
  },{
    path: 'dashboard/newCustomer',
    component:CreateCustomerComponent
  },{
    path: 'dashboard/listView',
    component:CustomerListViewComponent
  },{
    path: 'customerDetails',
    component:CustomerInfoComponent
  }

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }