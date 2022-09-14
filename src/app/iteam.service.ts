import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iteam } from './iteam';

@Injectable({
  providedIn: 'root'
})
export class IteamService {

  constructor(private _httpClient: HttpClient) { }

  getiteams():Observable<Iteam[]> {
    return this._httpClient.get<Iteam[]>('https://fakestoreapi.com/products')
  }
}
