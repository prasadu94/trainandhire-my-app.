import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaboutCeoComponent } from './aabout-ceo/aabout-ceo.component';
import { AaboutCompanyComponent } from './aabout-company/aabout-company.component';
import { AaboutDirectorComponent } from './aabout-director/aabout-director.component';



@NgModule({
  declarations: [
    AaboutCeoComponent,
    AaboutCompanyComponent,
    AaboutDirectorComponent
  ],

  exports:[
    AaboutCompanyComponent
  ], 
  imports: [
    CommonModule
  ]
})
export class AaboutUsModule { }
