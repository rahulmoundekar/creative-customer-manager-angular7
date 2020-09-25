import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },{
    path: 'profile',
    component:ProfileComponent
  }

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
