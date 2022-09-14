import { Component, OnInit } from '@angular/core';
import { SbiService } from '../sbi.service';

@Component({
  selector: 'app-paytm',
  templateUrl: './paytm.component.html',
  styleUrls: ['./paytm.component.css']
})
export class PaytmComponent implements OnInit {
  
  public amount:number= 0;
  constructor(private _sbiService: SbiService) { }

  ngOnInit(): void {
  }

  withdraw(){
    this._sbiService.withdraw(this.amount);
  }
  deposit(){
    this._sbiService.deposit(this.amount);
  }
  showBlance(){
    alert(this._sbiService.getBlance());
  }

}
