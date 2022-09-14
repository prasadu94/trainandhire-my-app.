import { Component, OnInit } from '@angular/core';
import { Iteam } from '../iteam';
import { IteamService } from '../iteam.service';

@Component({
  selector: 'app-iteam',
  templateUrl: './iteam.component.html',
  styleUrls: ['./iteam.component.css']
})
export class IteamComponent implements OnInit {

  public iteams: Iteam[] = [];

  constructor(private _iteamService: IteamService) {

    this._iteamService.getiteams().subscribe(
      (data:any)=>{
        this.iteams = data;
      },
      (err:any)=>{
        alert('Internal server error')

      }
    )
   }

  ngOnInit(): void {

    
  }

}
