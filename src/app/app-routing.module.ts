import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { ChartsComponent } from './charts/charts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IteamComponent } from './iteam/iteam.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PipesComponent } from './pipes/pipes.component';
import { SpurComponent } from './spur/spur.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  
  { path: 'dashboard', 
        component: DashbordComponent,  canActivate:[AuthGuard], 
        children:[

    {path:'charts', component: ChartsComponent},
    {path:'spur',component: SpurComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'cart',component:CartComponent },
    {path:'pipes',component:PipesComponent },
    {path:'cars',component:CarsComponent },
    {path:'paytm',component:PaytmComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'iteam',component:IteamComponent},
    {path:'media',component:MediaComponent},
    {path:'create-vehicle',component:CreateVehicleComponent, canDeactivate: [NotifyGuard]},
    {path:'create-user',component:CreateUserComponent}


  ]
  },
  {path:'', component: LoginComponent},
  {path:'**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }