import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleForm: FormGroup = new FormGroup({

    vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),

  });

    public id:string = '';
    public isEdit: boolean= false;
   

  constructor(
    private _vehicleservice:VehicleService, private _activatedRoute:ActivatedRoute) {

      this._activatedRoute.params.subscribe(
        (data:any)=>{

          if( data.id){
            this.id= data.id;
            this.isEdit= true;

          }
          else{
            this.isEdit = false;
          }
          this._vehicleservice.getVehicle( data.id).subscribe(
            (data2:any)=>{
              this.vehicleForm.patchValue(data2);
            }
          )
        }
      )
     }

  ngOnInit(): void {
  }

 submit(){
  console.log( this.vehicleForm.value);

  if(this.isEdit){
    this._vehicleservice.updateVehicle(this.id, this.vehicleForm.value).subscribe(


      (data:any)=>{
       alert('created succesfully !!!!')
     },
     (err:any)=>{
       alert('Internal server error');
     }
   )
    
  }

  else{
    this._vehicleservice.createVehicle(this.vehicleForm.value).subscribe(


      (data:any)=>{
       alert('created succesfully !!!!')
     },
     (err:any)=>{
       alert('Internal server error');
     }
   )
  }
  
 }


}
