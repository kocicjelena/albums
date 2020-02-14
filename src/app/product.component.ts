import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
@Component ({
   selector: 'my-app',
   templateUrl: './albums.html',
   providers: [ProductService]
})

export   class   Appproduct  {
   iproducts: IProduct[];
    tabFlag :boolean = true; 
  
  vertFlag : boolean= false;
   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
  
  
  showTab=function(){
    this.tabFlag = true;
    this.vertFlag = false;
  }
  showVertical= function() {
    this.tabFlag = false;
    this.vertFlag = true;
  }

}
