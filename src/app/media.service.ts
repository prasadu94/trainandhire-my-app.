import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private _httpClient: HttpClient) { }
  getMedias():Observable<Media[]> {
    return this._httpClient.get<Media[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
