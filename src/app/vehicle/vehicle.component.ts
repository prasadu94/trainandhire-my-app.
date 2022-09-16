import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles: Vehicle[] = [];

  

  constructor( private _vehicleService: VehicleService, private router: Router) {


    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert('Internal server error')
      }
    )
   }

   view(id:string){
    this.router.navigateByUrl('/dashboard/vehicle-details'+'/'+id)

   }

  ngOnInit(): void {
  }

}
