import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SpurComponent } from './spur/spur.component';
import { ChartsComponent } from './charts/charts.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { CarsComponent } from './cars/cars.component';
import { PaytmComponent } from './paytm/paytm.component';
import { HighlightDirective } from './highlight.directive';

import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { IteamComponent } from './iteam/iteam.component';
import { MediaComponent } from './media/media.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    PagenotfoundComponent,
    SpurComponent,
    ChartsComponent,
    DatabindingComponent,
    CartComponent,
    PipesComponent,
    PricePipe,
    CarsComponent,
    PaytmComponent,
    HighlightDirective,
    VehicleComponent,
    AccountComponent,
    IteamComponent,
    MediaComponent,
    CreateVehicleComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
