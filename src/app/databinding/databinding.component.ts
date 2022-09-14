import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Students } from '../students';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public age: number = 22;
  public user: User= {name:'psd', city:'texas'};
  public students: Students={
    name:'prasadu',
    id: 'N123',
    marks: 99
  }
  //array of objects interpolation//
  public users: User[]=
  [
    {name:'prasadu', city:'texas'},
    {name:'joys', city:'vegas'},
    {name:'sidhu', city:'hyd'},
    {name:'srinu', city:'ap'},
  ]

  public student: Students[]=
  [
    {name:'prasadu', id:'texas', marks:90},
    {name:'joys', id:'vegas', marks:80},
    {name:'sidhu', id:'hyd', marks:45},
    {name:'srinu', id:'ap', marks:78},
  ]



  ///d
  public employee: Employee={
    name:'prasadu',
    company: 'NTR',
    package: 12000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
