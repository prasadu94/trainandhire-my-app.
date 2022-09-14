import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient: HttpClient) { }

  getVehicles():Observable<Vehicle[]> {

    return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')


  }
 
   createVehicle( vehicle: Vehicle ): Observable<Vehicle> {

      return this._httpClient.post<Vehicle>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction', vehicle);

   }

    
  


}
