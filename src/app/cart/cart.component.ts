import { Component, OnInit } from '@angular/core';
import { Employees1 } from '../employees1';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  public name: string ='';
  public age : number =0;
  public company: string ='';
  public package : number =0;

  public employees:Employees1[]= [];


  constructor() { }

  ngOnInit(): void {
  }
  
   Register(){
    this.employees.push(
      {
        'name': this.name,
        'age': this.age,
        'company': this.company,
        'package': this.package
      }
    );
   }

   delete(i:number){
    this.employees.splice(i,1)
   }

   clear(){
    this.employees=[];
   }

   packagelowtohigh(){
    this.employees=this.employees.sort((a,b) =>a.package-b.package);
   }

   packagehightolow(){
    this.employees=this.employees.sort((a,b) =>b.package-a.package);
   }

}
