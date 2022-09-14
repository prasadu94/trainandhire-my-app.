import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accounts: Account[] = [];

  constructor( private _accountService: AccountService) {
    this._accountService.getAccount().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert('Internal server error')
      }
    )
   }

  ngOnInit(): void {
  }

}
