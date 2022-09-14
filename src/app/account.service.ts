import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor( private _httpClient: HttpClient ) { }

  getAccount():Observable <Account[]> {

    return this._httpClient.get<Account[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')


  }}
