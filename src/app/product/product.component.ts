import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public cartCount = 0;
  
  constructor( private _cartService:CartService) { }

  ngOnInit(): void {
  }
  add(){
    this.cartCount++;
    this._cartService.setValue(this.cartCount);
  }

}
